#!/bin/bash
set -ex

PROJECT_ROOT=/home/alamin/Documents/dcl-deploy-project/dclWebsite-frontend-dev/

# Build docker dev image
cd $PROJECT_ROOT
docker build . -t dcl-website-frontend-dev -f Dockerfile.dclWebsite

# Create volume for node dependencies - if it doesn't already exist
docker volume create node-deps

# Create volume for yarn cache folder
docker volume create yarn-deps

# Get yarn cache directory path
# The yarn cache directory will depend on your operating system and version of yarn.
# See https://yarnpkg.com/lang/en/docs/cli/cache/ for more info
YARN_CACHE_DIR=$(docker run --rm dcl-website-frontend-dev  yarn cache dir)

# Install yarn dependencies
docker run \
  -t --rm \
  --name dcl-website-frontend-dev-yarn-install \
  --mount type=bind,source=$PROJECT_ROOT,target=/app \
  --mount source=node-deps,target=/app/node_modules \
  --mount source=yarn-deps,target=$YARN_CACHE_DIR \
  dcl-website-frontend-dev \
  /usr/local/bin/yarn install

# Build the package
docker run \
  -t --rm \
  --name dcl-website-frontend-dev-yarn-install \
  --mount type=bind,source=$PROJECT_ROOT,target=/app \
  --mount source=node-deps,target=/app/node_modules \
  --mount source=yarn-deps,target=$YARN_CACHE_DIR \
  dcl-website-frontend-dev \
  /usr/local/bin/yarn build

docker tag dcl-website-frontend-dev  dcl-website-frontend-dev