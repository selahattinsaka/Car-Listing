<template>
  <div class="p-3">
    <div class="row row-cols-2 row-cols-lg-7 g-2 g-lg-3">
      <div class="col-sm-6 col-6 col-md-3 car-filter-height" style="background-color: #e6eaee;">
        <div class="p-3">
          <div class="mb-3">
            <label for="vehicleYear" class="form-label">Aracın Yılı</label>
            <input id="vehicleYear" v-model="vehicleYear" type="number" class="form-control">
          </div>
          <div class="mb-3">
            <label for="categoryId" class="form-label">Fiyat</label>
            <input id="categoryId" v-model="price" type="number" class="form-control">
          </div>
          <div class="mb-3">
            <label for="categoryId" class="form-label">Listelenecek Araç Sayısı</label>
            <input id="categoryId" v-model="vehicleTotalCount" type="number" class="form-control">
          </div>
        </div>
        <div class="d-flex justify-content-end mx-2">
          <button :disabled="!checkMandatoryFields" type="button" class="btn btn-primary" @click="filter">Filtrele</button>
          <button type="button" class="btn btn-danger mx-3" @click="clearFilter">Filtreyi Temizle</button>
        </div>
      </div>
      <div class="col-sm-6 col-md-9 car-listing-height">
        <table class="table is-bordered table-bordered">
          <thead class="table-header-size">
            <tr class="border-bottom-none">
              <th scope="col" class="ps-3 cursor">Aracın Fotoğrafı</th>
              <th scope="col" class="text-center">Model</th>
              <th scope="col" class="text-center" >İlan Başlığı</th>
              <th scope="col" class="text-center" >Yıl</th>
              <th scope="col" class="text-center cursor down-arrow-after" @click="sort('price')">Fiyat</th>
              <th scope="col" class="text-center" >Tarih</th>
              <th scope="col" class="text-center" >İl / İlçe</th>
            </tr>
          </thead>
          <tbody class="mb-5">
            <tr
              v-for="el in carListing"
              :key="el.id" class="cursor row-color"
              @click="$router.push({ name: 'carDetails', params: { id: el.id } })">
              <td>
                <img :src="el.photo.replace('{0}', photoSize)" height="100" width="100" class="card-img-top">
              </td>
              <td>{{el.modelName}}</td>
              <td>{{el.title}}</td>
              <td>{{el.properties[2].value}}</td>
              <td>{{el.priceFormatted}}</td>
              <td>{{el.priceFormatted}}</td>
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
      vehicleTotalCount: undefined,
      filterFlag: false,
      filteredCarList: [],
    };
  },
  computed: {
    carListing() {
      return this.filterFlag ? this.filteredCarList.data : this.$store.state.carListing;
    },
    checkMandatoryFields() {
      if (!this.vehicleTotalCount) return false;
      return true;
    },
  },
  methods: {
    async filter() { // year, date ve price değerlerini servise tam olarak nasıl göndereceğimi anlamadığım için ne gönderirsem göndereyim aynı değerleri dönüyor.
      const url = `http://sandbox.arabamd.com/api/v1/listing?year=${this.vehicleYear ? this.vehicleYear : 1}&price=${this.price ? this.price : 1}&take=${this.vehicleTotalCount}`;
      this.filterFlag = true;
      this.filteredCarList = await axios(url);
    },
    sort(payload) {
      this.carListing.sort((a, b) => (this[payload] ? b[payload] - a[payload] : a[payload] - b[payload]));
      this[payload] = !this[payload];
    },
    clearFilter() {
      this.filterFlag = false;
      this.vehicleTotalCount = undefined;
      this.vehicleYear = undefined;
      this.price = undefined;
    },
  },

};
</script>

<style>

</style>
