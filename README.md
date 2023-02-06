## Table of Contents

- [Challenge Overview](#challenge-overview)
- [Setup](#setup)
- [Contributors](#contributors)

## Challenge Overview

### GitHub Member Directory

Imagine that you’ve been asked to build a web application that pulls member profile information from the GitHub members API endpoint.
Your task is to create a paginated single page application using React that lists some information about each user in a “member card” and displays a directory of 10 cards per page.

The deliverable is the source code, using whichever libraries, packages, frameworks, tools, and development methodologies you choose. The requirements intentionally leave out many details. This is an opportunity for you to make decisions about the design of the app. What you leave out is just as important as what you include!

Throughout this challenge, I took full advantage of React’s modular nature by creating dynamically rendered components used on a single view. Thoughtful architecture was implemented using a utilities and components folder. I utilized the GitHub USERS REST API to get public and private information about authenticated users. This was my first time using an "auth token" with an API and I was able to conceal the token within a process.env file. This was also my first time implementing pagination within an application. I accomplished this successfully by ...... Using shared classes and nested styling in SASS, I was able to reduce the amount of repeated CSS throughout the app. A mobile-first development approach was utilized to make the design fully responsive across all viewport sizes. Lastly, end-to-end testing with Cypress was applied to ensure that the application behaves as expected and that the flow of data is maintained for various user tasks and processes.

### This  application includes the following core functionality:

The front end is a single page application that fetches member data from the GitHub API and renders the following:

* A Member Card that shows the following about each member:
  - Username with a link to the profile
  - Avatar
  - Name
  - Location
  - Email Address
  - The number of public repositories they have
  
* There should be 10 Member Cards per page
* Styling with CSS and SCSS
* The design is responsive
* Error handling for a broken URL


## Setup to Run Locally

1. Fork and clone this repository
2. Cd into the root directory and run `npm i`
3. To run this server, run `npm start` in the terminal and React will start the development server. To stop the local server, use command `Control + C`.
4. Open a browser window and go to http://localhost:3000 to view the website
5. To run the testing suite, run `npm run cypress` and Cypress will open up.


## Contributors

**Rachel Allen**

- [LinkedIn](https://www.linkedin.com/in/rachel-lynn-allen/)
- [GitHub](https://github.com/Rallen13)
