<template>
  <div class="container mt-5">
    <div class="row row-cols-2 row-cols-lg-7 g-2 g-lg-3">
      <div class="col-sm-6 col-6 col-md-7 border">
        <h4>{{carDetails.title}}</h4>
        <div class="mt-3 row">
          <div class="col">
            <b-carousel
              :interval="0"
              controls
              label-next="İleri"
              label-prev="Geri"
              style="text-shadow: 1px 1px 2px #333;"
            >
              <b-carousel-slide
                v-for="el in carDetails.photos"
                :key="el.id"
                :img-src="el.replace('{0}', '1920x1080')"/>
            </b-carousel>
          </div>
          <div class="mt-2" v-html="carDetails.text"></div>
        </div>
      </div>
      <div class="col-sm-6 col-md-5 p-4 border">
        <h4 class="text-danger">Araç Bilgisi</h4>
        <div class="row mb-2">
          <div class="col"><b>İlan Tarihi:</b></div>
          <div class="col">{{carDetails.dateFormatted}}</div>
        </div>
        <div class="row mb-2">
          <div class="col"><b>Model:</b></div>
          <div class="col">{{carDetails.modelName}}</div>
        </div>
        <div class="row mb-2">
          <div class="col"><b>Konum:</b></div>
          <div class="col">{{carDetails.location.cityName}} / {{carDetails.location.townName}}</div>
        </div>
        <div class="row mb-2">
          <div class="col"><b>Renk:</b></div>
          <div class="col">{{carDetails.properties[1].value}}</div>
        </div>
        <div class="row mb-2">
          <div class="col"><b>Km:</b></div>
          <div class="col">{{carDetails.properties[0].value}}</div>
        </div>
        <div class="row mb-2">
          <div class="col"><b>Yıl:</b></div>
          <div class="col">{{carDetails.properties[2].value}}</div>
        </div>
        <div class="row mb-2">
          <div class="col"><b>Vites:</b></div>
          <div class="col">{{carDetails.properties[3].value}}</div>
        </div>
        <div class="row mb-2">
          <div class="col"><b>Yakıt:</b></div>
          <div class="col">{{carDetails.properties[4].value}}</div>
        </div>
        <div class="row mb-2">
          <div class="col"><b>Kategori:</b></div>
          <div class="col">{{carDetails.category.name}}</div>
        </div>
        <div class="row mb-2">
          <div class="col"><b>Fiyat</b></div>
          <div class="col">{{carDetails.priceFormatted}}</div>
        </div>
        <hr>
        <h4 class="text-danger">Satıcı Bilgileri</h4>
        <div class="row mb-2">
          <div class="col"><b>İsim</b></div>
          <div class="col">{{carDetails.userInfo.nameSurname}}</div>
        </div>
        <div class="row mb-2">
          <div class="col"><b>Telefon</b></div>
          <div class="col">{{carDetails.userInfo.phoneFormatted}}</div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      carDetails: [],
    };
  },
  mounted() {
    this.getCarDetails();
  },
  methods: {
    async getCarDetails() {
      const url = `http://sandbox.arabamd.com/api/v1/detail?id=${this.$route.params.id}`;
      const response = await axios(url);
      this.carDetails = response.data;
    },
  },
};
</script>
