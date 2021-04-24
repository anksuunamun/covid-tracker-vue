<template>
  <div>
    <h2 class="font-bold text-dirty-blue text-2xl">{{ location }}</h2>
    <div class="text-dirty-blue">
      {{ timestamp }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'LocationHeader',
  props: ['location', 'dated'],
  computed: {
    timestamp: function () {
      return moment(this.date).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>