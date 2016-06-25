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

# Change main window name (<title> tag)
atom app/index.html
```
- run? `webpack && npm start`
- test? `npm test`

## Todo

- [X] Tests
- [ ] Packaging
- [ ] Redux
- [ ] React hot loader
