#!/bin/bash
npm run build
rm -rf -v ../backup
echo Old backup removed
echo
mkdir -v ../backup
mv -v ../index.html ../backup
mv -v ../static ../backup
echo Moved existing files to backup
echo
mv -v dist/index.html ../
mv -v dist/static ../
echo Moved new files to appropriate location
