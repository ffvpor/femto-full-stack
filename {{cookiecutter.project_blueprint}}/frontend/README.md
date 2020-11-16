# {{cookiecutter.project_name}} Frontend

## Frontend Requirements

- [Node.js](https://nodejs.org/): “Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine”. Nodes.js includes [npm](https://www.npmjs.com/).

Notes: You can also replace Node.js normal installation by [nvm](https://github.com/nvm-sh/nvm) to manage multiple released Node.js versions and use [yarn](https://yarnpkg.com/) instead of npm.

## Frontend local development

First, install frontend dependencies:

```zsh
$ cd path/to/your/project/directory/frontend
# npm
$ npm install
# yarn
$ yarn install
```

Then, start [rollup](https://rollupjs.org/) development server with:

```zsh
# npm
$ npm run dev
# yarn
$ yarn dev
```

Navigate to localhost:5000. You should see your app running. Edit any file in ```src```, save it, and see your changes, thanks to rollup ```--watch``` option.
