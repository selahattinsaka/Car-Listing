<template>
  <div class="mt-3">
    <div class="container text-center">
      <div class="d-flex justify-content-center text-danger">Vitrin</div>
      <div>
        <router-link
          :to="{ name: 'carListing', params: { data: carDetails.data }}"
          class="d-flex justify-content-end">
          Tüm Vitrini Gör
        </router-link>
        <cards :car-details="carListing"/>
      </div>
    </div>
  </div>
</template>

<script>
import cards from '../components/cards.vue';

export default {
  name: 'carShowcase',
  components: { cards },
  data() {
    return {
      carDetails: [],
    };
  },
  computed: {
    carListing() {
      return this.$store.state.carListing;
    },
  },

};
</script>
