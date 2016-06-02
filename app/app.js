import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import DS from 'ember-data';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

//TODO: FIX THIS FOR EMBER 2.x!
/*App.ApplicationSerializer = DS.LSSerializer.extend();
App.ApplicationAdapter    = DS.LSAdapter.extend({
    namespace: 'ember-blog'
});*/

loadInitializers(App, config.modulePrefix);

export default App;
