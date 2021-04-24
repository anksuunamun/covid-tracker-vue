<template>
  <div>
    <div class="flex flex-row justify-between mt-6 text-white">
      <div class="flex flex-col justify-between bg-bright-pink shadow-md p-10 text-center rounded mb-4">
        <h3 class="text-3xl text-white mb-4 font-bold">Cases</h3>
        <div class="text-2xl justify-between">
          <span class="text-yellow font-bold">New:</span>
          {{ addCommas(statistics.NewConfirmed) }}
        </div>
        <div class="text-2xl justify-between">
          <span class="text-yellow font-bold">Total:</span>
          {{ addCommas(statistics.TotalConfirmed) }}
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between mt-6 text-white">
      <div class="flex flex-col justify-between bg-bright-pink shadow-md p-10 text-center rounded mb-4">
        <h3 class="text-3xl text-white mb-4 font-bold">Deaths</h3>
        <div class="text-2xl justify-between">
          <span class="text-yellow font-bold">New:</span>
          {{ addCommas(statistics.NewDeaths) }}
        </div>
        <div class="text-2xl justify-between">
          <span class="text-yellow font-bold">Total:</span>
          {{ addCommas(statistics.TotalDeaths) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationBody',
  props: ['statistics'],
  methods: {
    addCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>