---
layout: post
title: "A Notifications App"
date: 2018-04-12
published: true
---
One pain point that I've been having at college has been organizing informal events with people outside of my immediate friends. I like to make coffee and host morning coffee drinking in my lofted room, but people didn't remember to show up. The standard way to organize events at school is through an email list, but nobody checks their email on a weekend morning.

So I decided to make a lightweight webapp that would send push notifications to people's phones on coffee mornings. With a single button press, they can subscribe to the reminders. It then sends automatic notifications about new and upcoming events.

[![Notification Website]({{ site.url }}/assets/coffee_notify_mockup.png)]({{ site.url }}/assets/coffee_notify_mockup.png)

> The current view of the notification feed

I built it to learn React, and how to track users and send push notifications using NodeJS. The biggest struggle was to get a custom [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) working nicely with [create-react-app](https://github.com/facebook/create-react-app). Eventually I solved it with [cra-append-sw](https://github.com/bbhlondon/cra-append-sw).

The demo is currently hosted at [verynice.party](https://verynice.party).

I am rewriting the app to have a more maintainable codebase, allow users to set notifications per-event, and to make it easier for anyone to spin up a new page (which requires significantly rewriting the admin page). This might be a new era in informal events at Olin.