<template>
  <div>
    <div class="container text-center">
      <div class="row">
        <div class="col-6 col-md-4 car-listing-height">Filtreleme Kısmı</div>
        <div class="col-md-8">
          <cards/>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      />
    </div>
  </div>
</template>

<script>
import cards from '../components/cards.vue';

export default {
  name: 'carListing',
  components: { cards },
  data() {
    return {
    };
  },
};
</script>
