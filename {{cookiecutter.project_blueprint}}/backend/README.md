# {{cookiecutter.project_name}} Backend

## Backend Requirements

- [poetry](https://python-poetry.org/docs/): Manage python packages and environment
- [curl](https://curl.se/): Explore API in CLI mode

## Backend local development

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
