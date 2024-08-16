# Template Really Fuckong good

## Table of Contents

-   [Template Really Fuckong good](#template-really-fuckong-good)
    -   [Table of Contents](#table-of-contents)
    -   [About ](#about-)
    -   [Getting Started ](#getting-started-)
        -   [Installing](#installing)
    -   [Usage ](#usage-)

## About <a name = "about"></a>

This template is for creating a vanilla js website with everything included like

-   Favicon automatic generation
-   Social media text and image
-   Sass
-   Deploy to github pages
-   Babel, minification, webpack loaders. You got it!

## Getting Started <a name = "getting_started"></a>

1. Clone this repo
2. Change the favicon under `src/assets/social.png`
3. Change the title of the html page
4. Change the meta descriptions in `package.json`
5. Change the social media text in `webpack.prod.js`
6. Change the social media images in `src/assets/social.png`

### Installing

`npm install`

## Usage <a name = "usage"></a>

For development:

`npm run start`

Access on `http://localhost:8080/`

Remember to run cloud function at the `name-rememberer-login-cloud-function` project

For deploy to github pages:

`npm run deploy`

Main route can be found at `http://localhost:8080/network.html`

Project hosted at firebase cloud functions!

NVM version: `16.4.0`

The authentication can only be done for `https://benna100.github.io/name-rememberer/`. Link to article her: https://medium.com/@devesu/how-to-secure-your-firebase-project-even-when-your-api-key-is-publicly-available-a462a2a58843

Link to console here: https://console.cloud.google.com/apis/credentials/key/58c78e2d-cfc5-4fea-81a8-e30f96d691cb?project=name-rememberer-8ed08

If developing localhost remove the restriction so you can log in localhost
