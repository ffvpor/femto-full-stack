#! /usr/bin/env bash

# Exit in case of error
set -e

echo "Check location..."
if [ ! -d ./femto-full-stack ] ; then
    echo "Important: Run this script from outside the project,"
    echo "to retrofit your changes into femto-full-stack project"
    exit 1
fi

if [ $(uname -s) = "Linux" ] ; then
  echo "Remove __pycache__ files"
  find ./develop-femto-full-stack/ -type d -name __pycache__ -prune -exec rm -rf {} +
fi

echo "Remove all files in femto-full-stack"
rm -rf ./femto-full-stack/\{\{cookiecutter.project_blueprint\}\}/*

echo "Sync files from develop-femto-full-stack to femto-full-stack"
rsync -a --exclude=node_modules --exclude='.venv' ./develop-femto-full-stack/* ./femto-full-stack/\{\{cookiecutter.project_blueprint\}\}/
