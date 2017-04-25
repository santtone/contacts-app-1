@echo off

echo ### Building Angular 4 app using Angular CLI ###
cd ../client
call ng build --environment=local --output-path=../cordova/www --base-href .
echo ### Angular 4 app builded and copied to cordova/www ###
cd ../cordova

echo ### Removing existing Android platform ###
call cordova platform remove android

echo ### Creating new Android platform ###
call cordova platform add android@6.2.1

echo ### Android build ready! :) ###
echo ### Run 'cordova run android' command to run app on the device... ###
pause