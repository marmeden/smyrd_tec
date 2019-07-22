<template>
  <div class="home smy__view">
    <heading
    @onSearching="updateFilter"></heading>
    <feed
    v-if="jsonready"
    :postfetched="filteredPosts"
    @onUpdatedLikeHandler="updateLike"></feed>
  </div>
</template>

<script>
import Heading from './Heading'
import Feed from './Feed'

export default {
  name: 'Home',
  components: {
    'heading': Heading,
    'feed': Feed
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search: '',
      postfetched: [],
      jsonready: false
    }
  },

  computed: {
    filteredPosts: function () {
      return this.postfetched.filter((mypost) => {
        return mypost.title.toLowerCase().includes(this.search.toLowerCase()) || mypost.author.toLowerCase().includes(this.search.toLowerCase()) || mypost.price.toString().includes(this.search.toLowerCase())
      })
    },
    myURL: function () {
      var environment = ''
      if (process.env.NODE_ENV === 'development') {
        environment = 'http://localhost:8081/'
      } else {
        environment = 'https://marmedensmy.herokuapp.com/'
      }

      return environment
    }
  },

  mounted () {
    fetch(this.myURL + '/test')
      .then((response) => response.json())
      .then(result => {
        this.postfetched = result
        this.jsonready = true
      })
  },

  methods: {
    updateLike: function (val) {
      let myPost = this.postfetched.find(post => post.id === val)
      myPost.liked = !myPost.liked;

      (myPost.liked === true) ? myPost.likes_count++ : myPost.likes_count--
    },

    updateFilter: function (val) {
      this.search = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
