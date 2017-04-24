@echo off

echo Removing existing Android platform...
call cordova platform remove android

echo Creating new Android platform...
call cordova platform add android@6.2.1

echo Android platform ready! :)
pause