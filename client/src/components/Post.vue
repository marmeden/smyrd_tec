<template>
  <div class="feed__post" @mouseover="hovered = true" @mouseleave="hovered = false">
    <article class="post__item" :class="{'liked': post.liked, 'hovered': hovered}">
        <div class="img__cntnt">
          <img :src="post.main_attachment.small" :alt="post.title" :title="post.title">
        </div>
        <div class="item__badge">
          <div class="badge__cntnt">
            <span class="price">{{post.price}}</span>
            <span class="currency">€</span>
          </div>
        </div>
        <div class="item__meta">
          <div class="item__meta__general">
            <h2 class="meta__title">{{post.title}}</h2>
            <p class="meta__author">By <a>{{post.author}}</a></p>
          </div>
          <div class="item__meta__inter">
            <a href="" class="inter__action action--like" v-on:click.prevent="updateLikePost">
              <p>{{post.likes_count | numSmyrize}}</p>
              <span>
                <simple-line-icons
                  icon="like"
                  size="small"
                  no-svg>
                </simple-line-icons>
              </span>
            </a>
            <a href="" class="inter__action action--rt">
              <p>002</p>
              <span>
                <simple-line-icons
                  icon="share"
                  size="small"
                  no-svg>
                </simple-line-icons>
              </span>
            </a>
          </div>
        </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
  data () {
    return {
      hovered: false
    }
  },
  filters: {
    numSmyrize: function (val) {
      return val.toString().padStart(3, '0')
    }
  },
  methods: {
    updateLikePost: function () {
      this.$emit('updatedLike', this.post.id)
    }
  }
}
</script>
