<template>
  <div v-if="!isLoading">
    <CountrySelect :countries="countries" @get-country="getCountryData"/>
    <button @click="clearCountry"
            class="bg-dirty-blue text-white p-3 rounded focus:outline-none hover:bg-bright-blue">Reset country
    </button>
    <LocationHeader :date="date" :location="location"/>
    <LocationBody :statistics="statistics"/>
  </div>
  <div class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img :src="preloader" alt="preloader" class="w-25 mx-auto">
  </div>
</template>

<script>
import LocationHeader from "@/components/LocationHeader";
import LocationBody from "@/components/LocationBody";
import CountrySelect from "@/components/CountrySelect";

export default {
  name: 'Home',
  components: {CountrySelect, LocationBody, LocationHeader},
  data() {
    return {
      isLoading: true,
      location: 'Global',
      date: '',
      statistics: {},
      countries: [],
      preloader: require('../assets/Circle-Preloaders.svg')
    }
  },
  methods: {
    async getCovidData() {
      const response = await fetch('https://api.covid19api.com/summary')
      return await response.json()
    },
    getCountryData(country) {
      this.statistics = country
      this.location = country.Country
    },
    async clearCountry() {
      this.isLoading = true
      let data = await this.getCovidData()
      this.location = 'Global'
      this.statistics = data.Global
      this.isLoading = false
    }
  },
  async created() {
    const data = await this.getCovidData()
    this.date = data.Date
    this.statistics = data.Global
    this.countries = data.Countries
    this.isLoading = false
  }
}
</script>