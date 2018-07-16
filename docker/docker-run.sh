#!/usr/bin/env bash
set -eo pipefail

case $1 in
  start)
    # The '| cat' is to trick Node that this is an non-TTY terminal
    # then react-scripts won't clear the console.
    yarn app-start | cat
    ;;
  build)
    yarn app-build
    ;;
  test)
    yarn app-test $@
    ;;
  *)
    exec "$@"
    ;;
esac