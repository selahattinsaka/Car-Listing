<template>
  <div class="p-3">
    <div class="row">
      <div class="col-3 car-filter-height" style="background-color: #e6eaee;">
        <div class="p-3">
          <div class="mb-3">
            <label for="vehicleYear" class="form-label">Aracın Yılı</label>
            <input id="vehicleYear" v-model="vehicleYear" type="number" class="form-control">
          </div>
          <div class="mb-3">
            <label for="categoryId" class="form-label">Tarih</label>
            <input id="categoryId" v-model="date" type="number" class="form-control">
          </div>
          <div class="mb-3">
            <label for="categoryId" class="form-label">Listelenecek Araç Sayısı</label>
            <input id="categoryId" v-model="vehicleTotalCount" type="number" class="form-control">
          </div>
        </div>
        <div class="d-flex justify-content-end mx-2">
          <button type="button" class="btn btn-primary" @click="filter">Filtrele</button>
          <button type="button" class="btn btn-danger mx-3" @click="filterFlag = false">Filtreyi Temizle</button>
        </div>
      </div>
      <div class="col-9 car-listing-height">
        <table class="table table-striped is-bordered table-bordered">
          <thead class="table-header-size">
            <tr class="border-bottom-none">
              <th scope="col" class="ps-3 pointer">Aracın Fotoğrafı</th>
              <th scope="col" class="text-center">Model</th>
              <th scope="col" class="text-center" >İlan Başlığı</th>
              <th scope="col" class="text-center" >Yıl</th>
              <th scope="col" class="text-center cursor-pointer down-arrow-after" @click="sort('price')">Fiyat</th>
              <th scope="col" class="text-center" >Tarih</th>
              <th scope="col" class="text-center" >İl / İlçe</th>
            </tr>
          </thead>
          <tbody class="mb-5">
            <tr
              v-for="el in carListing"
              :key="el.id" class="cursor-pointer"
              @click="$router.push({ name: 'carDetails', params: { id: el.id } })">
              <td>
                <img :src="el.photo.replace('{0}', photoSize)" height="100" width="100" class="card-img-top">
              </td>
              <td>{{el.modelName}}</td>
              <td>{{el.title}}</td>
              <td>{{el.properties[2].value}}</td>
              <td>{{el.priceFormatted}}</td>
              <td>{{el.dateFormatted}}</td>
              <td>{{el.location.cityName}} / {{el.location.townName}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'carDetails',
  data() {
    return {
      photoSize: '160x120',
      vehicleYear: undefined,
      price: undefined,
      date: undefined,
      vehicleTotalCount: undefined,
      filterFlag: false,
      filteredCarList: [],
    };
  },
  computed: {
    carListing() {
      return this.filterFlag ? this.filteredCarList.data : this.$store.state.carListing;
    },
  },
  methods: {
    async filter() {
      // const url = `http://sandbox.arabamd.com/api/v1/listing?year=${this.vehicleYear ? this.vehicle : 1}&price=${this.price ? this.price : 1}&date=${this.date ? this.date : 1}&take=${this.vehicleTotalCount ? this.vehicleTotalCount : 10}&ascending=1&descending=0`;
      const url = 'http://sandbox.arabamd.com/api/v1/listing?price=0&sort=1&sortDirection=0&take=5';
      this.filterFlag = true;
      this.filteredCarList = await axios(url);
    },
    sort(payload) {
      this.carListing.sort((a, b) => (this[payload] ? b[payload] - a[payload] : a[payload] - b[payload]));
      this[payload] = !this[payload];
    },
  },

};
</script>

<style>

</style>
