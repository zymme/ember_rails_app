/**
 * Created by zimmerd on 7/24/14.
 */

App.ApplicationRoute = Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo('weights');
        var route = this;
        Ember.$.post('/users/sign_in', function() {

            console.log('user is signed in');
            route.controllerFor('application').set('signedIn', true);

        }).fail(function() {
            console.log('in fail function for users/sign_in');

            route.controllerFor('application').set('signedIn', false);
        });
    }
});
