/**
 * Created by zimmerd on 7/24/14.
 */

App.SignOutRoute = Ember.Route.extend({
    beforeModel: function() {
        Ember.$.ajax({
            url: '/users/sign_out',
            type: 'DELETE',
            success: function(result) {
                location.reload();
            }
        });
    }
});