import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        const blog = this.get('blog');
        return blog.getAllPosts();
    },

    blog: Ember.inject.service('blog')
});
