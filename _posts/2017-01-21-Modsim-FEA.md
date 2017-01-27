---
layout: post
title: "ModSim FEA"
date: 2017-01-21
---

For a thermodynamics project in Modeling and Simulation, Adam Selker and I wrote a Finite Element Analysis program, to simulate the thermal flow in a heat sink with air passing by it. We wrote it in C++. It is capable of simulating billions of cells. The setup allows for defining new materials, including fluids moving in laminar flow, and arbitrarily shaped objects. We presented our findings about the optimal heat sink design in a formal presentation to a professor and students. The biggest takeaway for me was learning to code in a team, using git collaboratively, and iterative programming. We made many iterations of the presentation to be able to adequately explain this fairly complicated subject in a short time, and make sure our listeners understood what we were showing. Next steps would would be to implement multi-threading in the FEA, and a more usable tool for building objects in the simulation.
