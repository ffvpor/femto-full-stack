#! /usr/bin/env bash

# Exit in case of error
set -e

echo "Check location..."
if [ ! -d ./femto-full-stack ] ; then
    echo "Important: Run this script from outside the project,"
    echo "to generate a sibling develop-femto-full-stack project with independent git"
    exit 1
fi

echo "Remove previous environment..."
rm -rf ./develop-femto-full-stack
echo "Generate development environment..."
cookiecutter --no-input -f ./femto-full-stack project_name="Develop femto-full-stack"
echo "cd develop-femto-full-stack"
echo "then ready to develop!"
