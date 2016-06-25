# Electron/React boilerplate

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
atom dist/index.html
```
- run? `webpack && npm start`
- test? `npm test`

## Todo

- [ ] Tests
- [ ] Packaging
- [ ] Redux
- [ ] React hot loader
