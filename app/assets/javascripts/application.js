// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./zweights
//= require bootstrap
//= require ember-qunit

// for more details see: http://emberjs.com/guides/application/
App = Ember.Application.create({
    LOG_TRANSITIONS: true
});


//= require_tree .

App.SomeThing = Ember.Object.extend({
    foo: 'bar',
    computedFoo: function(){
        return 'computed ' + this.get('foo');
    }.property('foo')
});

/*-------------------- TESTS ------------------------*/

//emq.globalize();

//App.rootElement ="#ember-testing";
//App.setupForTesting();
//App.injectTestHelpers();
//
//module("Integration Tests", {
//    teardown: function() {
//        App.reset();
//    }
//});
//
//
//test("Get Weights List test", function() {
//
//    expect(1); //Ensure we will perform one assertion
//
//    visit("/weights");
//
//    // Wait for asynchronous helpers above to complete
//    andThen(function() {
//        equal(find("ul.weights li:last").text(), "Dayle is 170 on Thu Jul 24 2014 14:02:56 GMT-0600 (MDT)");
//    });
//
//});