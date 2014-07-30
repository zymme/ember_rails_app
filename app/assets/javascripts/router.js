// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  // this.resource('posts');
    this.route('about', { path: '/aboutus' } );

    this.resource('weights', function() {
        this.route('new');
    });

    this.route('sign_in');
    this.route('sign_out');

    this.route('searchusers');


});
