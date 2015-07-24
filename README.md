# sample-iq
A reactive LIMS.

## Meteor PAckage Dependencies
// aldeed:tabular          1.2.0  Datatables for large or small datasets in Meteor
// meteorhacks:aggregate   1.2.1  Proper MongoDB aggregations support for Meteor
// https://atmospherejs.com/yogiben/admin
// underscore              1.0.3  Collection of small helpers: _.map, _.each, ...
// useraccounts:bootstrap  1.9.1  Accounts Templates styled for Twitter Bootstrap.
accounts-password     1.1.1  Password support for accounts
accounts-ui           1.1.5  Simple templates to add login widgets to an app
alanning:roles        1.2.13  Role-based authorization
aldeed:collection2    2.3.3  Automatic validation of insert and update operations on the client and server.
aldeed:simple-schema  1.3.2  A simple schema validation object with reactivity. Used by collection2 and autoform.
iron:router           1.0.7  Routing specifically designed for Meteor
meteor-platform       1.2.2  Include a standard set of Meteor packages in your app
ongoworks:security    1.1.0  Logical security for client-originated MongoDB collection operations
twbs:bootstrap        3.3.4  The most popular front-end framework for developing responsive, mobile first projec...
sacha:spin            2.0.4  Simple spinner package for Meteor



## importing the data
* Perquisite : csv export from mySQL which includes a heading row located in the project directory
* Start the meteor app
* In a new terminal window, navigate to the directory where the app resides
* command: `meteor mongo`
* Within the mongo shell command: 
`mongoimport -h localhost:3001 --db meteor --collection contacts --type csv --headerline --file /opt/backups/contacts.csv`
