import Ember from 'ember';

const blogPosts = [
    {id: 1, date: 20162905, title: "my first blog entry", text: "this is the first text of a new blog entry"},
    {id: 2, date: 20162906, title: "my second blog entry", text: "this is the first text of another blog entry"}
];

export default Ember.Service.extend({
    getAllPosts(){
        return blogPosts;
    },
    getSinglePost(id){
        
        const posts     = this.getAllPosts();
        var   postId    = parseInt(id);
        
        return posts.findBy('id', postId);
    }
});
