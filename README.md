# Portfolio Project

This is a portfolio website built using React, Material UI, and Joy UI. It showcases personal projects, social profiles, academic background, and a downloadable resume.

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Functionality Overview](#functionality-overview)  
3. [Packages Used](#packages-used)  
4. [Acknowledgments](#acknowledgments)  

## Project Overview

1. Implemented the API waiting time fallback mechanism animation like a progress spinner from MUI.  
2. To optimize the application, I used lazy loading hooks for better performance.  
3. I used the typewriter-effect library for the effect on my home page.  
4. I encountered a problem fetching an API that contained an array of objects; later I resolved it by making the initial `useState` value `[]` instead of `null`, since previously we were using `stringify` for sending the data.  
5. Implemented the stickman running animation; whenever we hover over the icon, it will run, simulating a network transition.  
6. Created a sample portfolio using Canva, which can be downloaded to the system.  

## Functionality Overview

### Home Page
- It contains the introduction page with a typewriter effect.
- The data is fetched from the server backend.

### Social Profile Page
- It contains all the social links with attractive icons and animations.

### Projects Page
- It includes all the projects I have completed at the UG level.

### Academics Page
- Used the stepper component to make it more attractive.
- It has pictures from my previous school days and animations that rotate on hover.

### 404 Page
- Custom error page.

## Packages Used

- React
- Material UI
- React Router
- Redux Toolkit
- Typewriter-effect
- Axios

## Acknowledgments

Inspiration, code snippets, etc.

I would like to extend my gratitude to Gigme and [Ashik](https://github.com/ashikrai) bro for their guidance and support throughout this project. Their insights and encouragement played a vital role in helping me complete this work successfully.
