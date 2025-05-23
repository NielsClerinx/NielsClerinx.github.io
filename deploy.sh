
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
touch .nojekyll

# Create a custom _headers file to set the correct MIME types
echo '/*
  Content-Type: text/javascript; charset=utf-8
' > _headers

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# replace <USERNAME> with your GitHub username and <REPO> with your repository name
git push -f git@github.com:NielsClerinx/NielsClerinx.github.io main:gh-pages

cd -

