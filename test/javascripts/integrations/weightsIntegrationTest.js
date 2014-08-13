/**
 * Created by zimmerd on 8/1/14.
 */


App.setupForTesting();
App.injectTestHelpers();

module('Integration: Transitions', {
    setup: function() {
        console.log('setting up');
        Ember.run(App, App.advanceReadiness);
    },
    teardown: function() {
        console.log('tearing down');
        App.reset();
    }
});

test("Check HTML is returned", function() {

//    visit("/weights");

    expect(1);

//    var promise = visit("/weights");

    var promise = new Ember.RSVP.Promise(function(resolve) {
//        Ember.run(this, resolve(visit("/weights")), function() {
//            visit("/weights");
//        });
        Ember.run(function() {
            visit("/weights");
        }, resolve, 'hello');
    });


    Ember.run(function() {

        promise.then(function(result){

            alert(result);
            ok(true, "Assert passed");
        });

    });


//   var promise = new Ember.RSVP.Promise(function(resolve) {

//       Ember.run(this, resolve, visit('/'));

//       Ember.run(this, function() {
//           visit("/")
//       });

//    });

//    var promise = visit('/weights');

//    Ember.run(function() {
//
//        promise.then(function(result) {
//            console.log('in promise.then for 2nd Ember.run ');
////            ok(exists(result), "HTML Found");
//            alert(result);
//
//
//        })
//    });

//    Ember.RSVP.Promise(function(resolve){
//        visit('/', function(result){
//            resolve(result.response);
//        });
//    });
//});

//    andThen(function() {
//        ok(true, 'Yay!');
//    });

//    expect(1);

//    visit("/").then(function() {
//        ok(exists("*"), "Found HTML!");
//    });

//
//    var p;
//
//    Ember.run(function() {
//            console.log('in Ember.run for visit(/)');
//            p = visit("/");
//        });
//
//    Ember.run(function() {
//
//        p.then(function(result) {
//            console.log('in promise.then for 2nd Ember.run ');
////            ok(exists(result), "HTML Found");
//            alert(result);
//
//        });
//    });


});