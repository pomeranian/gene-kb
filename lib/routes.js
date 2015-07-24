// Iron.utils.debug = true;

Router.configure({
	layoutTemplate: 'appLayout',
	notFoundTemplate: '404page',
	loadingTemplate: 'appLoading'
}); 
/*
Router.plugin('dataNotFound', {
	notFoundTemplate: 'NotFound',
	except: ['/', 'about']
	// or only: ['routeOne', 'routeTwo']
});
*/

Router.map(function () {

  this.route('about'); 

  this.route('home', { path: '/', template: 'empty' });

  this.route('users', {
  	data: function () {return Meteor.users.find(); }  
  });
  
  this.route('insertClientForm');
  this.route('JobAddForm');
  this.route('activities');
  this.route('markers', {
  	data: function () {return Meteor.Markers.find(); }  
  });

});