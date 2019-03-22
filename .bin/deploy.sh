#!/bin/bash

#
# @TODO: add conditional to see if working tree is clean. only proceed when clean.
#

# configure node/gulp for deploy
export NODE_ENV='production'

# run server in background so we can complete UnCSS task during `gulp deploy`
gulp bs > /dev/null &

# build assets
gulp deploy
git add assets/css

# terminate `gulp dev:bs` background task
#
# In the context of this shell script, we can kill the last background job we
# started because the parent shell doesn't apply in here.
#
# @see https://stackoverflow.com/a/30171578/175551
kill %-

# instruct developer to review/commit/push
echo ""
echo "————————————————————————————————————————————————————————————————————————"
echo "=> To deploy: Please review the diff, commit any changes, and push live."
echo "————————————————————————————————————————————————————————————————————————"
echo ""
git status
