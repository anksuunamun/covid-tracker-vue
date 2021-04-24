<template>
  <div>
    <label>
      <select @change="onChange()"
              v-model="selected"
              class="form-select mb-3 block border rounded">
        <option value="0">Select country</option>
        <option v-for="country in countries" v-bind:key="country.ID" :value="country.ID">{{ country.Country }}</option>
      </select>
    </label>
  </div>
</template>


<script>
export default {
  name: 'CountrySelect',
  props: ['countries'],
  data() {
    return {selected: 0}
  },
  methods: {
    onChange() {

    }
  }
}
</script>