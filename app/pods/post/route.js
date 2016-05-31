import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        const blog = this.get('blog');
        return blog.getSinglePost(params.post_id);
    },

    blog: Ember.inject.service('blog')
});
