# Flatten current branch to the most recent tag

LATEST_TAG=$(git describe --tags --abbrev=0)
PKG_VERSION=$(git describe --tags --abbrev=0)

read -p "[flattening-branch] Flattening branch to $LATEST_TAG] - Are you sure? [y/N]: " confirm && [[ $confirm == [yY] ]] || { echo exiting; exit 0; }

git reset --soft $LATEST_TAG
git run pr
git add .
git commit -m "[wip] $V"
git push --force