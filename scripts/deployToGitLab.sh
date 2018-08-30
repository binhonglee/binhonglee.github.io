#!/bin/bash
git remote add gitlab git@gitlab.com:binhonglee/binhonglee.gitlab.io.git
git reset --hard HEAD
git push gitlab master -f
