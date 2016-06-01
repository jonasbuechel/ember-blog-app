import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        const blog = this.get('blog');
        return this.get('blogService').getAllPosts();
    },

    blogService: Ember.inject.service('blog')
});
