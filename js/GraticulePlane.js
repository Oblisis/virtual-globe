import * as THREE from 'three';

class GraticulePlane extends THREE.Group {

    constructor(scale = 1,
        resolution = 50,
        innerRadius = 0,
        outerRadius = 1,
        radiusSegments = 5,
        thetaSegments = 8,
        color = "rgb(10,63,161)",
        opacity = 1,
        edgeColor = "rgb(71, 94, 255)",
        edgeOpacity = 1) {

        super();
        this.type = 'GraticulePlane';

        this.parameters = {
            scale: scale,
            resolution: resolution,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            radiusSegments: radiusSegments,
            thetaSegments: thetaSegments,
            color: color,
            opacity: opacity,
            edgeColor: edgeColor,
            edgeOpacity: edgeOpacity
        };

        resolution = Math.max(3, Math.floor(resolution));
        innerRadius = Math.max(0, innerRadius);
        outerRadius = Math.max(innerRadius, outerRadius);
        radiusSegments = Math.max(1, Math.floor(radiusSegments));
        thetaSegments = Math.max(2, Math.floor(thetaSegments));

        // Disk
        const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, resolution);
        ringGeometry.rotateX(- Math.PI / 2);
        ringGeometry.scale(scale, scale, scale);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: opacity,
            side: THREE.DoubleSide
        });
        this.planeMaterial = ringMaterial;

        this.ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
        this.ringMesh.renderOrder = 1;
        this.ringMesh.position.set(0, -0.1, 0);
        this.add(this.ringMesh);

        // Radial Segments
        const radiusSegementSize = (outerRadius - innerRadius) / (radiusSegments);
        const TWO_PI = Math.PI * 2;
        const gratMaterial = new THREE.LineBasicMaterial({
            color: edgeColor,
            transparent: true,
            linewidth: 2,
            opacity: edgeOpacity
        });
        this.edgeMaterial = gratMaterial;

        for (let i = 0; i <= radiusSegments; i++) {
            const r = innerRadius + radiusSegementSize * i;
            const curve = new THREE.EllipseCurve(
                0, 0,
                r, r,
                0, TWO_PI,
                false,
                0
            );

            const points = curve.getPoints(resolution);
            const gratGeometry = new THREE.BufferGeometry().setFromPoints(points);
            gratGeometry.rotateX(- Math.PI / 2);
            gratGeometry.scale(scale, scale, scale);
            const line = new THREE.Line(gratGeometry, gratMaterial);

            this.add(line);
        }


        // Angle Segments
        const thetaSegmentsSize = TWO_PI / (thetaSegments);
        for (let i = 0; i < thetaSegments; i++) {
            const theta = innerRadius + thetaSegmentsSize * i;
            const points = [];
            const xi = innerRadius * Math.sin(theta);
            const yi = innerRadius * Math.cos(theta);
            const xf = outerRadius * Math.sin(theta);
            const yf = outerRadius * Math.cos(theta);

            points.push(new THREE.Vector3(xi, 0, yi));
            points.push(new THREE.Vector3(xf, 0, yf));

            const gratGeometry = new THREE.BufferGeometry().setFromPoints(points);
            gratGeometry.scale(scale, scale, scale);
            const line = new THREE.Line(gratGeometry, gratMaterial);

            this.add(line);
        }
    }
}

export { GraticulePlane };