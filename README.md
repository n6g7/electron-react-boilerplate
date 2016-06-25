# Electron/React boilerplate [![CircleCI](https://circleci.com/gh/n6g7/electron-react-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/n6g7/electron-react-boilerplate/tree/master)

Electron, React, Webpack, ESLint, Stylus

## How to

- setup a new project?

```sh
git clone git@github.com:n6g7/electron-react-boilerplate.git my-project
cd my-project

# Create your own repository
rm -r .git && git init

# Edit package.json (name, version, description, etc)
atom package.json
atom app/package.json

# Change main window name (<title> tag)
atom app/index.html
```
- run? `webpack && npm start`
- test? `npm test`
- build?

```sh
# Install dependencies to build linux & windows apps (https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build#os-x)
brew install Caskroom/cask/xquartz wine mono
brew install gnu-tar libicns graphicsmagick

# Build
npm run build
```

## Todo

- [X] Tests
- [X] Building
  - [X] OSX
  - [X] Linux
  - [X] Windows
- [X] App icon
- [ ] Redux
- [ ] React hot loader
- [ ] Code signing
