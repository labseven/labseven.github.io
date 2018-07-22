---
layout: post
title: "Aquaponics"
date: 2017-01-21
published: false
---
I am a team lead for the electrical and lights subteam on the Aquaponics build team. Aquaponics is a system for growing plants without soil (hydroponics) in a symbiotic environment with aquatic animals. [Read more about it on Wikipedia.](https://en.wikipedia.org/wiki/Aquaponics)

We are building one in a library shelf, to grow basil and other herbs with fish feeding into the system. The goal is to have a highly automated system with minimal human intervention between planting and harvest.
I lead the electrical and lights subteam. We spec'd lights for the plants, and used an Teensy to time the lights and watering pump. We discovered that SMD5050 red and blue LEDs emit wavelengths very close to chlorophyll's peak absorption color, and specced LED strips appropriately. The Teensy has a battery-powered Real-time Clock to keep time even if the power cuts out. We run the grow lights (red and blue) every day for 12 hours. Because the system is in a very public space, light and sound pollution were a big consideration in the design, as were aesthetics. Ultimately, the most interesting part that I created was an IoT power strip. The Teensy controlled 4 outlets with relays, to which we plugged in the main grow lights and 3 pumps, allowing us to programmatically control the watering and lighting cycles.
