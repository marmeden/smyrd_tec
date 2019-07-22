<template>
  <div class="feed__wrapper">
    <div class="feed">
      <div v-for="post in postfetched" :key="post.id">
        <post
          :post="post"
          @updatedLike="onUpdatedLikeFromFeed">
        </post>
      </div>
    </div>
  </div>
</template>

<script>
import Post from './Post'
export default {
  name: 'feed',
  props: [
    'postfetched'
  ],
  components: {
    'post': Post
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onUpdatedLikeFromFeed (id) {
      this.$emit('onUpdatedLikeHandler', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
