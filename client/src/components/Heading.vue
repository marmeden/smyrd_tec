<template>
  <header class="heading">
    <div class="heading__cntnt">
      <img src="../assets/img/samy-logo.png" alt="" class="heading__logo">
      <div class="heading__search">
        <div class="search__content">
          <simple-line-icons
          icon="magnifier"
          no-svg>
          </simple-line-icons>
          <input type="text" placeholder="Are you looking for something?" v-on:keyup="monitorSearch" v-model="searching">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'heading',
  data () {
    return {
      searching: ''
    }
  },
  methods: {
    monitorSearch: function () {
      this.$emit('onSearching', this.searching)
    }
  }
}
</script>
