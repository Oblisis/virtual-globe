# Virtual Globe

A 3D Visualization of spacecraft around the earth. See a live demo [here](https://oblisis.github.io/virtual-globe/).

<p align="center">
  <img src="https://user-images.githubusercontent.com/7519391/170894900-b24f5615-139f-46a1-8840-b3616ed46e7f.gif">
</p>

## Background

The number of objects in space is growing at an unprecedented rate. Each year a record number of launches occur with ever increasing payloads of satellite systems.
While the volume of space around Earth is vast, the increased density of satellites gives rise to a need for constant space domain awareness.

Space Domain Awareness (SDA) involves the regular detection, tracking, cataloging and identification of artifical objects around the earth. 
Its basic function is to answer the following questions for each object in space:
 - What is it?
 - Where is it?
 - Where is it going?

Answering these questions help ensure that space remains a functional and safe environment now and into the future.

Satellites are continually tracked by a global array of sensor systems in order to provide up to date and accurate state estimations.
The United States Space Force provides a public catalog of all man-made objects currently orbiting the earth and can be accessed through a number of public repositories:
- www.space-track.org
- www.celestrak.com
- www.unifieddatalibrary.com

There are many virtual globe implementations around the internet, but most fail to provide a compelling user experience.

This project is primarily an exercise in learning to use Three.js by creating a visualization that quickly conveys a sense of space domain awareness while remaining visually appealing.


### Roadmap

- [X] 3d Earth
- [X] Styling Controls Editor
- [X] Geodetic to Scene coordinates
- [X] Equatorial Plane Gratitule
- [X] Load SGP4 Records Statically
- [X] Satellite Marker for Instantateous Locations
- [X] Satellite Trajectories
- [X] Earth Overly Shader
- [X] Earth Country outlines GeoJSON
- [ ] Diegetic Satellite Info Overlay
- [ ] Satellite Instantatenous Location Interpolation
- [ ] Satellite Trajectories Refresh
- [ ] Satellite Marker Optimization
- [ ] Load Sensor Records Statically
- [ ] Sensor Location Markers
- [ ] Selected Object Camera Tracking
- [ ] Object Search
- [ ] Load Satellite Records Dynamically
- [ ] Load Sensor Records Dynamically
- [ ] Summary Satellite Statistics
