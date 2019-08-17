# Orbit

Orbit is a wholesome community for developers.

## Table of contents

  - [Screenshots](#Screenshots)
  - [Prerequisites](#Prerequisites)
  - [Getting started](#Getting-started)
  - [Browser extension](#Browser-extension)
  - [Try it out](#Try-it-out)
  - [Contributors](#Contributors)
  - [License](#License)

## Prerequisites

> [Node.js](https://nodejs.org/en/) >=10.11.0

## Getting started

Some initial setup is required before running this project.

The configuration is located in `/server/config/config.js`. This file contains the following: 

- Database credentials
- Github OAuth app credentials
- JSON Webtokens secret key

You have to create this file yourself. Here is a template of what this file looks like:

```js
module.exports = {
  database: {
    host: {HOSTNAME},
    dialect: "postgres",
    database: {DATABASE},
    user: {USER},
    port: {PORT},
    password: {PASSWORD},
    uri: `postgres:/{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}`
  },
  github: {
    client_id: {GITHUB_ID},
    client_secret: {GITHUB_SECRET}
  },
  auth: {
    jwtSecret: {SECRET}
  }
};
```

Install all dependencies and run the application:

```sh
npm run install-all
npm run start-all
```

Happy coding!

## Browser extension

This project comes with an extension for both Google Chrome and Firefox. It displays reputation gained by users on their GitHub profiles. Here's how to install it: 

### Google Chrome

1. Open the Extension Management page by navigating to [chrome://extensions](chrome://extensions).
     - The Extension Management page can also be opened by clicking on the Chrome menu, hovering over **More Tools** then selecting **Extensions**.
2. Enable Developer Mode by clicking the toggle switch next to **Developer Mode**.
3. Click the **LOAD UNPACKED** button and select the extension directory.

### Firefox

1. Open [about:debugging](about:debugging) in Firefox, click **Load Temporary Add-on** and select the manifest.json file in the extension's directory.

Ta-da! The extension has been successfully installed.

## Try it out

You can try out the project [here](https://manatran.github.io/). Please keep in mind that the server hosted on [Heroku](https://orbit-heroku.herokuapp.com/) can take a while to start up. Refreshing the site might be necessary if your content does not load.

## Contributors

  **Manaus Transez**
  
-  [Website](https://manatran.github.io/)
-  [Twitter](https://twitter.com/manaus_t)

## License

Licensed under the MIT license.
