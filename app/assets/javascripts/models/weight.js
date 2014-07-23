/**
 * Created by zimmerd on 7/23/14.
 */

App.Weight = DS.Model.extend({

    name: DS.attr('string'),
    weight: DS.attr('number'),
    created_at: DS.attr('date'),
    updated_at: DS.attr('date')

});