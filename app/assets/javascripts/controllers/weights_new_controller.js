/**
 * Created by zimmerd on 7/24/14.
 */
App.WeightsNewController = Ember.Controller.extend({


    actions: {
        createWeight: function() {

            console.log('in create weight function');

            var weight = this.store.createRecord('weight', {
                name: this.get('name'),
                weight: this.get('weight')
            });

            var self = this;

            weight.save().then(function() {
                console.log('weight created!');
                self.transitionToRoute('weights');
                self.set('name', '');
                self.set('weight', '');

            },
            function() {
               alert('failed to create weight');
            });

        }
    }
});