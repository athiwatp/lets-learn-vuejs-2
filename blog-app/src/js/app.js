// This turns off the following errors in the JS console.
// [Vue warn]: Error when evaluating expression "weatherData.main.temp": TypeError: Cannot read property 'temp' of undefined
Vue.config.warnExpressionErrors = false

 const postsApiURI = 'http://localhost:3000/src/api/posts.json';
 const categoriesApiURI = 'http://localhost:3000/src/api/categories.json';
 const singlePostApiURI = 'http://localhost:3000/src/api/posts/';


var App = Vue.extend({});

// postList Component
var postList = Vue.extend({
  template: '#post-list-template',

  data: function() {
    return {
      posts: '',
      categories: '',
      nameFilter: '',
      categoryFilter: '',
      showFilter: false,
      filterBtnOpen: true,
      filterBtnClose: false,
      post: '',
      show: false
    }
  },

  ready: function() {
    this.$http.get(postsApiURI).then(function(response) {
      this.$set('posts', response.json())
    })
    this.$http.get(categoriesApiURI).then(function(response) {
      this.$set('categories', response.json())
    })
  },

  methods: {
    getThePost: function(id) {
      var posts = this.posts;

      this.$set('show', true);

      function filterPosts(el) {
        return el.id == id;
      }

      this.$set('post', posts.filter(filterPosts));
    },

    closePost: function() {
      this.$set('show', false);
    },

    openFilter: function() {
      this.$set('showFilter', true);
      this.$set('filterBtnOpen', false);
      this.$set('filterBtnClose', true);
    },
    closeFilter: function() {
      this.$set('showFilter', false);
      this.$set('filterBtnOpen', true);
      this.$set('filterBtnClose', false);
    }
  }
});

//singlePost Component
var singlePost = Vue.extend({
  template: '#single-post-template',

  data: function() {
    return {
      post: ''
    }
  },

  route:{
    data: function(){
      this.$http.get(singlePostApiURI + this.$route.params.postID + '.json').then(function(response){
        this.$set('post', response.json());
      })
    }
  }
});


// Router & Routes
var router = new VueRouter();

router.map({
  '/': {
    component: postList
  },

'post/:postID':{
    name:'post',
    component: singlePost
  }
});

router.start(App, '#app');
