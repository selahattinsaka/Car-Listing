<template>
  <div class="d-flex flex-wrap car">
    <div v-for="el in carDetails" :key="el.id" class="card cards" @click="$router.push({ name: 'carListing'})">
      <img :src="el.photo.replace('{0}', photoSize)" class="card-img-top">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <span class="card-title">{{el.location.cityName}}</span>
          </div>
          <div class="col">
            <div class="card-text justify-content-end">{{el.properties[2].value}}</div>
          </div>
        </div>
        <div class="row">
          <p>{{el.modelName}}</p>
        </div>
        <div class="row">
          <div class="position-absolute bottom-0 end-0">
            <span class="text-danger">{{el.priceFormatted}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards',
  props: {
    carDetails: {
      type: Array,
      default: () => [],
    },
    photoSize: {
      type: String,
      default: '160x120',
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style>

</style>
