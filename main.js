if (Meteor.isClient) {

	// Meteor.subscribe("users");

	Template.users.helpers({
		userCount: function () {
			return Meteor.users.find().count();
		}
	});

	Accounts.ui.config({
		// forbidClientAccountCreation: true,
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });
}

/*******
/* MUST RUN IN COMMON CODE (ie not client/sever folders)
********/


/*==============================================*/

if (Meteor.isServer) {
  

	Meteor.startup(function () {
		/*
		if (Meteor.users.find().count() === 0) {
			var newID = Meteor.users.insert({
				username:"Admininistrator",email:"admin@example.com",password:"poopoo"
			});
			Roles.addUsersToRoles(newID, ['admin']);
		}
		*/
	});

	
  Meteor.publish("users", function () {
    return Meteor.users.find();
  });
	/*
  Meteor.publish("roles", function () {
  	return Roles.find({})
  })
	*/
}
