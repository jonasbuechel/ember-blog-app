import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('blog');
    this.route('post', { path: 'blog/post/:post_id' });
});

export default Router;
