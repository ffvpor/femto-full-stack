# Contributing

Thanks for your interest in contributing to `femto-full-stack` generator! Please take a moment to review this document **before submitting a pull request**.

## Prepare your environment

### Clone femto-full-stack generator

```zsh
$ cd path/to/your/base/dev/env
$ git clone https://github.com/ffvpor/femto-full-stack.git
$ tree -L 1
.
├── ...
├── femto-full-stack
└── ...
```

### Create new project

```zsh
$ femto-full-stack/scripts/set-ffs-dev.sh
```

What happens when we launch the script ```set-ffs-dev```?

- First, it check if we are at the same level than cloned generator,
- then remove the previous environment
- and, finally it generate the project, thanks to *cookiecutter*!

```zsh
$ tree -L 1
.
├── ...
├── develop-femto-full-stack # new project directory
├── ...
├── femto-full-stack # cloned generator
└── ...
```

Go to `develop-femto-full-stack` directory and develop!

## Prepare local development

### Backend Part

First, install backend dependencies and activate the virtual environment:

```zsh
$ cd path/to/your/project/directory/backend/app
$ poetry config virtualenvs.in-project true
$ poetry install
$ poetry shell
Spawning shell within path/to/your/project/directory/backend/app/.venv
. path/to/your/project/directory/backend/app/.venv/bin/activate
```

Next, create initial data in database

```zsh
$ python app/initial_data.py
# Success if:
INFO:__main__:Creating initial data
INFO:__main__:Initial data created
```

Then, it's time to launch [uvicorn](https://www.uvicorn.org/)

```zsh
$ uvicorn --host localhost --port 8002 app.main:app --reload

INFO:     Uvicorn running on http://[localhost]:8002 (Press CTRL+C to quit)
INFO:     Started reloader process [3142] using watchgod
INFO:     Started server process [3145]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Note on uvicorn command line options**

| Option       | Comment                    | Default value |
| ------------ | -------------------------- | ------------- |
| --host       | Bind socket to this host.  | 127.0.0.1     |
| --port       | Bind socket to this port.  | 8080          |
| app.main:app | Used the object ```app``` in main.py inside ```app``` sub-directory (starting from path/to/your/project/directory/backend/app)  | ---          |
| --reload     | Restart server after code changes. Only in dev mode!  | ---          |

For more details, see [here](https://www.uvicorn.org/#usage)

Open your browser at http://localhost:8002/ and you will see the JSON response : ```Hello: "World"```. You can also use ```curl``` to explore your API

```zsh
$ curl http://localhost:8002
{"Hello":"World"}%
```

Navigate to http://localhost:8002/docs to explore the automatic interactive API documentation, powered by [Swagger UI](https://github.com/swagger-api/swagger-ui)). As an alternative (provided by [ReDoc](https://github.com/Redocly/redoc)), you can go to http://localhost:8002/redoc.

### Frontend Part

First, install frontend dependencies:

```zsh
$ cd path/to/your/project/directory/frontend
$ npm install # or: yarn install
```

Then, start [rollup](https://rollupjs.org/) development server with:

```zsh
$ npm run dev # or: yarn dev
```

Navigate to localhost:5000. You should see your app running. Edit any file in ```src```, save it, and see your changes, thanks to rollup ```--watch``` option.

## Retrofit your changes

It's time to update the generator with your changes.

```zsh
$ femto-full-stack/scripts/set-ffs-back.sh
```

What happens when we launch the script ```set-ffs-back```?

- Again, it check if we are at the same level than cloned generator,
- then remove python __pycache__ files (if Linux)
- then remove files in femto-full-stack/{{cookiecutter.project_blueprint}}
- and, finally it synchronize new files, thanks to *rsync*!
