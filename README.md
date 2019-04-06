# FriendFinder

This applecation is a compatibility-based "FriendFinder", basically a dating app. This full-stack site will take in results from a users' response to a survey, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall "match" according to how the current user answered the survey.

It uses Express to handle routing and it is deployed using Heroku so other users can fill it out.

## Using the App

Upon the loading of the home page at (https://gentle-waters-57181.herokuapp.com/
), the user can click on the "Go to survey" to start taking the survey. Once the user submits the survey, they get presented with a potential match according to their responses to the survey.

## About the App

This is a node.js based app that utilizes espress and heroku. 
The file structure consists of the following:

  ```
  FriendFinder
    - .gitignore: files to be ignored
    - app: 
      - data: 
        - friends.js: data
      - public: 
        - home.html: home page
        - survey.html: survey page
      - routing: 
        - apiRoutes.js: routes for when user hits the local API
        - htmlRoutes.js: routes for serving the public files
    - package.json: pkg containing the info about the dependencies of the app
    - server.js: setup of the express server.
  ```

