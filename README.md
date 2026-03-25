# volto-widget-theme-picker

[![Releases](https://img.shields.io/github/v/release/eea/volto-widget-theme-picker)](https://github.com/eea/volto-widget-theme-picker/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-widget-theme-picker%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-widget-theme-picker/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-theme-picker&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-theme-picker)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-theme-picker&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-theme-picker)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-theme-picker&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-theme-picker)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-theme-picker&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-theme-picker)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-widget-theme-picker%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-widget-theme-picker/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-theme-picker&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-theme-picker&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-theme-picker&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-theme-picker&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-theme-picker&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-theme-picker&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-theme-picker&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-theme-picker&branch=develop)

[Volto](https://github.com/plone/volto) add-on

## Features

![Widget Theme Picker](https://raw.githubusercontent.com/eea/volto-widget-theme-picker/master/docs/volto-widget-theme-picker.gif)

## Getting started

### Try volto-widget-theme-picker with Docker

      git clone https://github.com/eea/volto-widget-theme-picker.git
      cd volto-widget-theme-picker
      make
      make start

Go to http://localhost:3000

`make start` now defaults to Volto 18. To run the same setup against Volto 17, use:

      VOLTO_VERSION=17 make
      VOLTO_VERSION=17 make start

### Add volto-widget-theme-picker to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-widget-theme-picker": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-widget-theme-picker'];
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

   For a legacy Volto 17 project, install the package with `yarn` and restart the frontend as usual.

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-widget-theme-picker/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-widget-theme-picker/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-widget-theme-picker/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
