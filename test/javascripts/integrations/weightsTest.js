/**
 * Created by zimmerd on 8/1/14.
 */

//emq.globalize();

App.setupForTesting();
App.injectTestHelpers();

//module('Integration: Transitions', {
//    setup: function() {
//        console.log('setting up');
//        Ember.run(App, App.advanceReadiness);
//    },
//    teardown: function() {
//        console.log('tearing down');
//        App.reset();
//    }
//});



//test("Check HTML is returned", function() {
//
////    expect(1);
//
//    var promise = new Ember.RSVP.Promise(function(resolve){
//        Ember.run(function() {
//            console.log('in Ember.run for visit(/)');
//            visit("/");
//        }, resolve);
//
//    });
////    var promise = new Ember.RSVP.Promise(function(resolve) {
////        Ember.run(this, resolve, 'hello');
////    });
//
////    Ember.RSVP.Promise(function(resolve){
////        visit('/', function(result){
////            resolve(result.response);
////        });
////    });
////});
////
//    Ember.run(function() {
//
//        promise.then(function(result) {
//            console.log('in promise.then for 2nd Ember.run ');
//            ok(exists(result), "HTML Found");
//            alert(result);
//
//
//        })
//    });
//
////    QUnit.stop();
//});

//test("Get Weights List test", function() {
//
//    expect(1); //Ensure we will perform one assertion
//
//    Ember.run(function() {
//
//
//        visit("/weights");
//
//        andThen(function() {
//            equal(find("ul.weights li:last").text(), "Daylexxx is 170 on Thu Jul 24 2014 14:02:56 GMT-0600 (MDT)");
//            console.log('test passed');
//
//        });
//
//    });
//
//});

//test('async test', function() {
//    expect(1);
//    var fakeModel = 'foo',
//        fooModelPromise = App.Adapter.getData('foo');
//
//    Ember.run(function () {
//        fooModelPromise.then(function (result) {
//            ok(fakeModel === result);
//        });
//    });
//});

module('Unit: Something');

test('computedFoo correctly concats foo', function() {

    var someThing = App.SomeThing.create();
    someThing.set('foo', 'baz');
    equal(someThing.get('computedFoo'), 'computed baz');

});