/**
 * Created by zimmerd on 7/23/14.
 */
App.WeightsRoute = Ember.Route.extend({

    model: function() {
        console.log('in weightroute call');
        return this.store.find('weight');
    }

});