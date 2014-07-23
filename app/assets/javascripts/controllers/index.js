/**
 * Created by zimmerd on 7/23/14.
 */

App.IndexController = Ember.Controller.extend( {

    productsCount: 6,
    time: function() {
        return (new Date()).toDateString()
    }.property()

});