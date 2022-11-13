<template>
  <div class="mt-3">
    <div class="container text-center">
      <div class="d-flex justify-content-center text-danger">Vitrin</div>
      <div>
        <router-link :to="{ name: 'carListing', params: { data: carDetails.data }}" class="d-flex justify-content-end">
          Tüm Vitrini Gör
        </router-link>
        <cards :car-details="carDetails.data"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import cards from '../components/cards.vue';

export default {
  name: 'carShowcase',
  components: { cards },
  data() {
    return {
      carDetails: [],
      baseUrl: 'http://sandbox.arabamd.com/api/v1/listing?price=0&sort=1&sortDirection=0&take=50',
    };
  },
  mounted() {
    this.getCars();
  },
  methods: {
    async getCars() {
      try {
        this.carDetails = await axios.get(this.baseUrl);
      } catch (error) {
        //
      }
    },
  },
};
</script>
