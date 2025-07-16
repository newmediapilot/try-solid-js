# Publishes gh-pages branch to Github Pages

# validate()
# - Check parameters
# initialize()
# - Delete/Create new gh-pages branch
# prepare()
# - Switch to main and reset modules
# patch()
# - Update package.json version
# build()
# - Build production bundle and return to main
# squash()
# - Squash branch to last entry of [deploy-preview.sh] with commit message

flatten() {
  npm run gf
}

validate() {
  # [ -z "$1" ] && { echo "[deploy-preview.sh] Commit message is required"; exit 1; };
  read -p "[deploy preview] Are you sure? [y/N]: " confirm && [[ $confirm == [yY] ]] || {
    echo exiting
    exit 0
  }
  echo "[deploy-preview.sh] validate :: skipping"
}

prepare() {
  echo "[deploy-preview.sh] Switch to main and reset modules :: start"
  git checkout main
  git fetch --all
  git pull
  npm run  reset
  echo "[deploy-preview.sh] Switch to main and reset modules :: done"
}

initialize() {
  #  echo "[deploy-preview.sh] Delete/Create new gh-pages branch :: start"
  #  git push origin --delete gh-pages
  #  git checkout -b gh-pages
  #  git push --set-upstream origin gh-pages
  #  echo "[deploy-preview.sh] Delete/Create new gh-pages branch :: end"
  echo "[deploy-preview.sh] initialize :: skipping"
}

build() {
  echo "[deploy-preview.sh] Build production bundle :: start"
  npm run build
  echo "[deploy-preview.sh] Build production bundle :: done"
}

patch() {
  echo "[deploy-preview.sh] Update package.json version :: start"
  npm version patch --no-git-tag-version && git add package.json
  V=$(node -p "require('./package.json').version")
  git commit --amend -am "[automated-build] => $V"
  git tag "$V"
  git push --force && git push --tags
  echo "[deploy-preview.sh] Update package.json version :: done"
}

deploy() {
  echo "[deploy-preview.sh] Build production bundle and return to main :: start"
  gh-pages -d dist
  echo "[deploy-preview.sh] Build production bundle and return to main :: done"
}

# Run in sequence
flatten
validate
prepare
initialize
patch
build
deploy

echo "[deploy-preview.sh] "
echo "[deploy-preview.sh] Build complete..."
echo "[deploy-preview.sh] https://newmediapilot.github.io/try-solid-js/"
