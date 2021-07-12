/*
ADDITIONS/CHANGES TO PACKAGE.JSON ARE SHOWN WITH **

package.json                   
{                                    PROPERTIES:When you create client these properties are set 
  "name": "server",                  name of dir     
  "version": "0.0.0",                version of dir 
  "private": true,                   privacy of dir   
  "proxy":"http://localhost//5000"   proxy:'http://localhost:PortNoWhereMongoDbIsConnectedToSever
                                     **ADD THIS KEY(rerun terminal on changes to package.json)**
   
  "scripts": {                       SCRIPTS: when you run npm key ;then we execute value of the key
    "start": "react-scripts start",  sudo npm start =react-scripts start    
    "build": "react-scripts build",  sudo npm build = react-scripts build"
    "test": "react-scripts test",    sudo npm test = react-scripts test
    "eject": "react-scripts eject"   sudo npm eject = react-scripts eject
   },

  "dependencies": {                 DEPENDENCIES:  When you install a package it is added in dependency and deployed

    "@material-ui/core": "^4.12.1",          package used for material UI in components (installed while creating project)
    "@material-ui/icons": "^4.11.2",         package used for material UI in components (installed while creating project)
    "@testing-library/jest-dom": "^5.14.1",  package used for  ?                        (installed while creating project)
    "@testing-library/react": "^11.2.7",     package used for  ?                        (installed while creating project)
    "@testing-library/user-event": "^12.8.3",package used for  ?                        (installed while creating project)
    "axios": "^0.21.1",                      package used for api fns                   (installed while creating project)
    "moment": "^2.29.1",                     package used for material UI  in ?         (installed while creating project)
    "react": "^17.0.2",                      package used for react                     (installed while creating project)
    "react-dom": "^17.0.2",                  package used for react components ka render(installed while creating project)
    "react-file-base64": "^1.0.3",           package used for react filebase            (installed while creating project)
    "react-redux": "^7.2.4",                 package used for redux in react             (installed while creating project)
    "react-scripts": "4.0.3",                package used for  react ka scripts          (installed while creating project)
    "redux-thunk": "^2.3.0",                 package used for redux in react             (installed while creating project)


  } 
  "dev-dependencies": {              DEVELOPMENT DEPENDENCIES:When you install a package using -dev it is added in dev-dependency and is not  deployed           
  }                                   |
                                      |
                                      |
                                    //DEPENDENCY STRUCTIRE
                                    same as package.json of server



*/