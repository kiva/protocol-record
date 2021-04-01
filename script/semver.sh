#!/bin/bash
set -e

# This script calculates an appropriate semantic version based on the most
# recent tag in the git repository.

tag=$(git tag --points-at HEAD 2> /dev/null)
if [ -z "$tag" ]
then
    # if there's no git tag, then use the latest tag and add to the patch version
    latest=$(git describe --abbrev=0 --tags `git rev-list --tags --max-count=1`)
    if [[ $latest == *"-"* ]] || [[ $latest == *"+"* ]]; then
        >&2 echo "characters - and + are not allowed in docker tags"
        exit 1
    fi
    major=$(echo $latest | cut -d'.' -f1)
    minor=$(echo $latest | cut -d'.' -f2)
    patch=$(echo $latest | cut -d'.' -f3)
    patchcount=$(git rev-list $latest.. --count)
    let "newpatch = $patch + $patchcount"
    tag="$major.$minor.$newpatch"
fi

if [[ $tag == *"-"* ]] || [[ $tag == *"+"* ]]; then
    >&2 echo "characters - and + are not allowed in docker tags"
    exit 1
fi

echo $tag
