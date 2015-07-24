// Add permissions etc. Uses ongoworks:security

// Client side code may insert, update, or remove a Client record, privided the user is logged in.
Clients.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();
Jobs.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();
Activity.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();
Samples.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();