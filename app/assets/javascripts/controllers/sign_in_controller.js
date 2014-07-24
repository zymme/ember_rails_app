/**
 * Created by zimmerd on 7/24/14.
 */

App.SignInController = Ember.Controller.extend({

   actions: {

       signIn: function() {
           var controller = this;

           console.log('in signIn function() ');

           return Ember.$.post('/users/sign_in.json', {
               user: {
                   email: this.get('email'),
                   password: this.get('password')
                   }
           }, function(data) {

                   console.log('in data function() ...');


                   location.reload();
               },
               'json'
           ).fail( function() {
                   alert('sign in failed');
               })
       }
   }

});