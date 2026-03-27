# WTWR (What to Wear?): The Dynamic Weather & Wardrobe App

## Project Overview

Have you ever stared at your closet wondering if you need a light jacket or a heavy coat? **WTWR** is a full-stack "What to Wear" application that takes the guesswork out of getting dressed. By integrating real-time weather data with a custom digital wardrobe, the app suggests the perfect outfit for the current conditions in your specific location.

This project represents my transition into **Full-Stack MERN development**, moving from a purely frontend React app to a secure, database-driven ecosystem.

## The Tech Stack

- **Frontend:** React, React Router, Context API (for User and Temperature states).

- **Backend:** Node.js, Express.js.

- **Database:** MongoDB via Mongoose.

- **Auth:** JWT (JSON Web Tokens) for secure sessions and persistent login.

- **Design:** Built using a mobile-first approach following BEM methodology and Figma specifications.

## Key Features

- **Smart Weather Filtering:** The app automatically categorizes your clothes into "Hot," "Warm," or "Cold" and displays only what’s relevant to the current temperature.

- **Personalized Wardrobe:** Users can upload their own clothes, delete items, and "like" their favorites.

- **Secure Profiles:** A dedicated profile page where you can update your name or avatar and manage your specific items.

- **Real-Time Data:** Fetches live weather updates via the OpenWeatherMap API to keep suggestions accurate.

## Deployment

This project is deployed on Google Cloud Platform VM instance.

[weatherweartoday.jumpingcrab.com](https://weatherweartoday.jumpingcrab.com)

## How to Run Locally

1. Clone the repository.

2. Install dependencies using npm install.

3. Start the development server with npm run dev.

4. _Note: You'll also need to have the Backend Server running simultaneously for full functionality._

## Links

- [Figma Design](https://www.figma.com/file/bfVOvqlLmoKZ5lpro8WWBe/Sprint-14_-WTWR?t=3hvVWRz9LUFsxyNn-6)

- [GitHub Backend Repository](https://github.com/thetanos24/se_project_express)

- [GitHub Frontend Repository](https://github.com/thetanos24/se_project_react)
