#This is Work in Progress
##Backend
node.js + MongoDB (express + mongoose). Docker image from MongoDB is great for dev purpose. 
Source code is in ``server`` directory. ``server/configuration.js`` contains server/db/smpt config.
```
$ npm install
$ node server.js
```
##Frontend
browserify + bootstrap for now. Source code in ``client`` in the build process moved to ``static`` directory which is exposed via express static middleware.
```
$ bower install
$ grunt
```
Production build: ``grunt dist``.
