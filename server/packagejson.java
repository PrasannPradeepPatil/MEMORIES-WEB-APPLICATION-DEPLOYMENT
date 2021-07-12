/*
ADDITIONS/CHANGES TO PACKAGE.JSON ARE SHOWN WITH **

package.json                   
{                                  PROPERTIES:When you create server these properties are set 
  "name": "server",                name of dir     
  "version": "0.0.0",              version of dir 
  "private": true,                 privacy of dir   
                                  
  "scripts": {                      SCRIPTS: when you run npm key ;then we execute value of the key
    "start":"node/nodemon ./bin/www"  sudo npm start = node/nodemon ./bin/www
                                      **CHANGE NODE TO NODEMON(rerun terminal on changes to package.json)*
  },

  "dependencies": {                 DEPENDENCIES:  When you install a package it is added in dependency and deployed
    "cookie-parser": "~1.4.4",      package used for?            (installed while creating project)
    "debug": "~2.6.9",              package used for debugging   (installed while creating project)
    "express": "~4.16.1",           package used for express     (installed while creating project)
    "http-errors": "~1.6.3",        package used for http errors (installed while creating project)
    "jade": "~1.11.0",              package used for ?           (installed while creating project) 
    "mongoose": "^5.12.14",         package used for mongo db    (installed while creating project)
    "morgan": "~1.9.1"              package used for ?           (installed while creating project)
  } 
  "dev-dependencies": {              DEVELOPMENT DEPENDENCIES:When you install a package using -dev it is added in dev-dependency and is not  deployed           
  }                                   |
                                      |
                                      |
                                    //DEPENDENCY STRUCTIRE
                                    “packageName: ^/~ majorVersion.minorVersion.patchVersion”
                                    patchversion = bug fix ;
                                    minorVersion = changes without disturbing API;
                                    majorVersion = change API itself 
                                    ^ --> supose you have a “module: ^4.1.13” and someone   forks your   repo and performs      
                                        npm –i modulename which my have diff version later in time   ; then
                                        ^ tells install modue as long as its major version = 4  so ^4.1.8 can be written as ^4.x
                                    ~ --> tells install module as long as major version = 4 ; minor version = 1 so ~4.1.8 can be        
                                            written as ~4.1.x
                                    no % or ~ --> install the exact version so this is the best 



                                    //INITIALISE JSON FILE
                                    >npm init                           -->create a package.json which will keep all meta data for packahges

                                    //INSTALL PACKAGES
                                    >npm install                            -->install the packages already mentioned in package.json when
                                                                            you create the project
                                    >npm install package@version --save     -->create node_modules and inside it installs package 
                                                                            adds the package dependency in package.json ka dependencies{}     
                                    >npm install package@version dev--save -->create node_modules and inside it installs package 
                                                                            adds the package dependency in package.json ka dev dependencies{}    
                                                                            telling that this is a devloper package and must not be deployed                                                           


                                    //UNINSTALL PACKAGES                                        
                                    >npm uninstall packagename           -->In node_modules remove package
                                                                            remove package from package.json ka dependencies{}    

                                    //UPDATE PACKAGE
                                    >npm outdated                       --> show the package with outdated versions ; with current wanted and latest version
                                    >npm  update                        --> update the package to latest ver only if the majorversion is same ; else to wanted ver
                                                                            and updates package.json
                                    >npm-check-updates                  -->install check updates package
                                                                        and updates package.json
                                    >npm-check-updates and  ncu –u      --> update the outdated package to latest version in package.json
                                                                        and updates package.json
                                    >npm install                        --> update the outdated package to latest version 
                                                                            and updates package.json
                                                                            
                                                                                                
                                    //VIEW PACKAGES             
                                    > npm list                          --> view  all the  packages  and their sub dependencies;
                                                                            or view package.json
                                    > npm list  --depth=0               --> view all the  packages 
                                                                            or view package.json
                                    >npm view packagename               --> view all the metadata of a packages
                                                                            or view package.json  
                                    >npm view packagename dependencies  --> you can view all the dependencies of package 
                                                                            or view package.json
                                    >npm view packagename  version      --> you can view current   version of package
                                                                            or view package.json
                                    >npm view modulename versions       --> you can view current version of package
                                                                            or view package.json
                                    >npm outdated                      --> show the package with outdated versions ; with current wanted and latest version
                                                                            or view package.json

                                    //-G FLAG(COMANDS WITH -G FLAG ARE TO BE WRITTEN WITH SUDO IN LINUX)
                                    -g flag -->Without -g the package will be installed in node_moduules in current directory
                                            With -g flag the package will be installed globally where node is installed and all directories in all projects can acess it 
                                            Eg npm install – g packagename@version -- install package globally so available for all packages
                                                npm uninstall –g packagename          --uninstall global package
                                                npm list –g ; npm list –g –depth=0 ; npm view –g packagename and so on 



*/