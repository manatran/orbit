# Orbit

Orbit is a wholesome community for developers.

## Table of contents

  - [Screenshots](#Screenshots)
  - [Prerequisites](#Prerequisites)
  - [Getting started](#Getting-started)
  - [Try it out](#Try-it-out)
  - [Contributors](#Contributors)
  - [License](#License)

## Screenshots

{{ Coming soon }}

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
npm run c-install
npm run c-start
```

Happy coding!

## Google Chrome extension

This project comes with an extension for the Google Chrome browser. It displays reputation gained by users on their GitHub profiles. You can install it here: TODO: upload and link here

## Try it out

This project will soon be hosted online.

## Contributors

  **Manaus Transez**
  
-  [Website](https://manatran.github.io/)
-  [Twitter](https://twitter.com/manaus_t)

## License

Licensed under the MIT license.
