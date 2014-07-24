/**
 * Created by zimmerd on 7/23/14.
 */

App.IndexController = Ember.ArrayController.extend( {

//    productsCount: Ember.computed.alias('length'),
    time: function() {
        return (new Date()).toDateString()
    }.property()

});