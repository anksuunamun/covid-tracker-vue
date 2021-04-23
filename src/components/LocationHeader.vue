<template>
  <div>
    <h2>{{ location }}</h2>
    <div>
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