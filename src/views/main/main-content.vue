<template>
  <main class="smp-content">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </main>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  components: {

  },
  methods: {

  }
}
</script>
