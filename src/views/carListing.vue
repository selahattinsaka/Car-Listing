<template>
  <div class="p-3">
    <div class="row">
      <div class="col-3">
        <div class="car-listing-height">
          <form>
            <div class="p-3">
              <div class="mb-3">
                <label for="vehicleYear" class="form-label">Aracın Yılı</label>
                <input id="vehicleYear" v-model="vehicleYear" type="number" class="form-control">
              </div>
              <div class="mb-3">
                <label for="city" class="form-label">İl</label>
                <input id="city" v-model="city" type="text" class="form-control">
              </div>
              <div class="mb-3">
                <label for="categoryId" class="form-label">Kategori Id</label>
                <input id="categoryId" v-model="categoryId" type="text" class="form-control">
              </div>
            </div>
            <div class="d-flex justify-content-end mx-2">
              <button type="submit" class="btn btn-primary">Filtrele</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-9 car-details">
        <table class="table table-striped is-bordered table-bordered">
          <thead class="table-header-size">
            <tr class="border-bottom-none">
              <th scope="col" class="ps-3 pointer">Aracın Fotoğrafı</th>
              <th scope="col" class="text-center pointer down-arrow-after">Model</th>
              <th scope="col" class="text-center pointer down-arrow-after" >İlan Başlığı</th>
              <th scope="col" class="text-center pointer down-arrow-after" >Yıl</th>
              <th scope="col" class="text-center pointer down-arrow-after" >Fiyat</th>
              <th scope="col" class="text-center pointer down-arrow-after" >Tarih</th>
              <th scope="col" class="text-center pointer down-arrow-after" >İl / İlçe</th>
            </tr>
          </thead>
          <tbody class="mb-5">
            <tr v-for="el in $route.params.data" :key="el.id" class="cursor-pointer" @click="$router.push({ name: 'carDetails', params: { id: el.id } })">
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
export default {
  name: 'carDetails',
  data() {
    return {
      photoSize: '160x120',
    };
  },

};
</script>

<style>

</style>
