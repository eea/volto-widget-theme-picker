# @eeacms/volto-widget-theme-picker

[![Releases](https://img.shields.io/github/v/release/eea/volto-widget-theme-picker)](https://github.com/eea/volto-widget-theme-picker/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-widget-theme-picker%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-widget-theme-picker/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-theme-picker&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-theme-picker)

[Volto](https://github.com/plone/volto) add-on

## Features

![Widget Theme Picker](https://raw.githubusercontent.com/eea/volto-widget-theme-picker/master/docs/volto-widget-theme-picker.gif)

## Upgrade

### Upgrading to 4.x

> This version requires `Volto 18` or `Volto 19` and Node.js 22.

The widget keeps the same id, the same props and the same default colours, so upgrading from 3.x on Volto 18 needs no code changes, and add-ons that reference the widget by name keep working. The release adds Volto 19 support and moves the repository to the Volto 19 layout, where the published package lives in `packages/volto-widget-theme-picker`.

#### Breaking changes

- **Node.js 22 or newer is required** (`engines.node >= 22`), 3.x declared no engine.
- **React 18 is required.** The package declares `react` and `react-dom` as `^18.2.0` peers, 3.x declared no peers.
- **The package no longer ships the Jest setup.** `jest-addon.config.js` and `jest.setup.js` were removed in favour of Vitest, so a Volto 18 project that still runs the Jest harness has to keep its own copy.

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Node.js: `>=22.0.0`

## Installation

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

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
