/**
 * Created by zimmerd on 8/1/14.
 */


emq.globalize();

App.setupForTesting();
App.injectTestHelpers();
setResolver(Ember.DefaultResolver.create({ namespace: App }));


moduleFor("controller:about", "About Controller");

test('calling the contactName property ', function() {

    expect(1);

    var ctrl = this.subject();

    equal(ctrl.get('contactName'), 'Zed');


});