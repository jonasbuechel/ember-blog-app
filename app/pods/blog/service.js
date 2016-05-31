import Ember from 'ember';

export default Ember.Service.extend({
    getAllPosts(){
        return [
            {id: 1, date: 20162905, title: "my first blog entry", text: "this is the first text of a new blog entry"},
            {id: 2, date: 20162906, title: "my second blog entry", text: "this is the first text of another blog entry"}
        ];
    },
    getSinglePost(id){
        
        const posts = this.getAllPosts();
        var   id    = parseInt(id);
        
        return posts.findBy('id', id);
    }
});
