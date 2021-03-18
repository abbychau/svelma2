#!/usr/bin/env bash

# abort on errors
set -e

NODE_ENV=production npm run build
# NODE_ENV=production npm run jsdocs
NODE_ENV=production npm run docs

# navigate into the build output directory
cd docs/__sapper__/export/svelma2

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
if [[ $CI ]]
then
  git push -f https://${GITHUB_TOKEN}@github.com/abbychau/svelma2.git master:gh-pages
else
  git push -f git@github.com:abbychau/svelma2.git master:gh-pages
fi

cd -