<div id="header" align="center">

<img width="1427" alt="Screen Shot 2023-02-06 at 5 06 37 PM" src="https://user-images.githubusercontent.com/98505112/217115812-64b416bc-b8d1-4d7b-89a9-05d866cdbb03.png">
</div>


<h1 align="center"> Pavilion Challenge </h1>

## Table of Contents

- [Challenge Overview](#challenge-overview)
- [Context](#context)
- [Functionality](#functionality)
- [Future Features](#future-deatures)
- [Setup](#setup-to-run-locally)
- [Contributors](#contributors)

## Challenge Overview

### GitHub Member Directory

Imagine that you’ve been asked to build a web application that pulls member profile information from the GitHub members API endpoint.
Your task is to create a paginated single page application using React that lists some information about each user in a “member card” and displays a directory of 10 cards per page.

The deliverable is the source code, using whichever libraries, packages, frameworks, tools, and development methodologies you choose. The requirements intentionally leave out many details. This is an opportunity for you to make decisions about the design of the app. What you leave out is just as important as what you include!

## Context

Throughout this challenge, I took full advantage of React’s modular nature by creating dynamically rendered components used on a single view. A thoughtful architecture was implemented using a utilities and components folder. I utilized the GitHub Users REST API to get information about authenticated users. I was able to conceal an Auth Token within a process.env file. This was also my first time implementing pagination from an API call. I accomplished this by researching how to harness the power of Link Headers and utilized a third party package, "@web3-storage/parse-link-header", to parse the "next" link from the API response. I have included code comments throughout to explain my approach more in depth. Using SCSS, I reduced the amount of repeated styling and aligned my app with Github's branding. Utilizing a mobile-first approach with flexbox,  the app is fully responsive across all viewport sizes . Lastly, end-to-end testing with Cypress was applied to ensure that the application behaves as expected and that the flow of data is maintained.

## Functionality

The front end is a single page application that fetches member data from the GitHub API and renders the following:

* A Member Card that shows the following about each member:
  - Username with a link to the profile
  - Avatar
  - Name
  - Location
  - Email Address
  - The number of public repositories they have
  
* There are 10 Member Cards per page
* Styling with CSS and SCSS
* The design is fully responsive
* Error handling for a broken URL

## Future Features

* Search 
* Filtering
* Back button
* Routing pagination


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
