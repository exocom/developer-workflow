# Using yeoman to create a project that can easily be deployed to Apace (LAMP), NodeJS (MEAN), build.phonegap.com, cordova (Mobile Devices), and to GitHub Pages.
***

## How to install
    npm install
    bower install

## How to view /app source files
    grunt server

## How to view /dist source files
	node app
	
## How to deploy
### LAMP / MEAN / GitHub Pages
    grunt build
### build.phonegap.com (zip)
    grunt build:adobe
### Cordova
	grunt build:cordova