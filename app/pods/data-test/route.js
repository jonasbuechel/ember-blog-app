import Ember from 'ember';

export default Ember.Route.extend({
    actions : {
        simpleTest: function(){
            console.log('i am a simple test function');
        },
        runDemo: function(){
            var store = this.store;
            var newBlogPost = store.createRecord('post',{
                title: 'new blog post',
                date: '20160602',
                text: 'this is a generated post :)'
            });
            
            newBlogPost.save().then(function(){
                console.log('record saved');
            });
        }
        
        
    }
});
