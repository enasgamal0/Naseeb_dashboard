<template>
  <div class="crud_form_wrapper">
    <!-- Start:: Title -->
    <div class="form_title_wrapper">
      <h4>{{ $t("PLACEHOLDERS.view_region_data") }}</h4>
    </div>
    <div class="col-12 text-end">
      <v-btn @click="$router.go(-1)" style="color: #3fa9f5">
        <i class="fas fa-backward"></i>
      </v-btn>
    </div>
    <!-- End:: Title -->

    <!-- Start:: Single Step Form Content -->
    <div class="single_step_form_content_wrapper">
      <form @submit.prevent="validateFormInputs">
        <div class="row">
          <!-- Start:: Name Input -->
          <base-input
            col="6"
            type="text"
            :placeholder="$t('PLACEHOLDERS.nameAr')"
            v-model.trim="data.name_ar"
            disabled
          />
          <base-input
            col="6"
            type="text"
            :placeholder="$t('PLACEHOLDERS.nameEn')"
            v-model.trim="data.name_en"
            disabled
          />
          <!-- End:: Name Input -->
          <base-input
            col="6"
            type="text"
            :placeholder="$t('PLACEHOLDERS.created_at')"
            v-model.trim="data.created_at"
            disabled
          />
          <base-input
            col="6"
            type="text"
            :placeholder="$t('PLACEHOLDERS.count_finish_order')"
            v-model.trim="data.count_order_finish"
            disabled
          />
          <!-- Start:: map -->
          <MapRegionSelector
            ref="map_point"
            :initialPoints="regionPoints"
            @saveRegion="handleSaveRegion"
            :fromPage="'show'"
          />
          <!-- End:: map -->

          <!-- Start:: Deactivate Switch Input -->
          <div class="input_wrapper switch_wrapper my-5 col-6">
            <v-switch
              color="green"
              :label="
                data.active
                  ? $t('PLACEHOLDERS.active')
                  : $t('PLACEHOLDERS.notActive')
              "
              v-model="data.active"
              hide-details
              disabled
            ></v-switch>
          </div>
          <!-- End:: Deactivate Switch Input -->
        </div>
      </form>
    </div>
    <!-- END:: Single Step Form Content -->
  </div>
</template>

<script>
import moment from "moment";
import MapRegionSelector from "../../../components/MapRegionSelector.vue";
export default {
  name: "CreateCity",
  components: { MapRegionSelector },

  data() {
    return {
      // Start:: Loader Control Data
      isWaitingRequest: false,
      // End:: Loader Control Data

      file: null,
      fileType: "",

      // Start:: Data Collection To Send
      data: {
        name_ar: null,
        name_en: null,
        created_at: null,
        count_order_finish: null,
        area_id: null,
        active: true,
      },
      // End:: Data Collection To Send
      areas: [],
      arabicRegex: /^[\u0600-\u06FF\s]+$/,
      EnRegex: /[\u0600-\u06FF]/,

      regionPoints: [],
      coordinates: [],
    };
  },

  methods: {
    disabledDate(current) {
      return current && current < moment().startOf("day");
    },

    onCopy(event) {
      event.preventDefault();
    },
    onPaste(event) {
      event.preventDefault();
    },

    validateInput() {
      // Remove non-Arabic characters from the input
      this.data.nameAr = this.data.nameAr.replace(/[^\u0600-\u06FF\s]/g, "");
    },
    removeArabicCharacters() {
      this.data.nameEn = this.data.nameEn.replace(this.EnRegex, "");
    },

    handleFileSelected({ file, fileType }) {
      this.file = file; // Store the selected file in your data
      this.fileType = fileType; // Store the selected file in your data
    },
    handleFileRemoved() {
      this.file = null; // Reset the file when it's removed
      this.fileType = "";
    },

    // Start:: validate Form Inputs
    validateFormInputs() {
      this.isWaitingRequest = true;

      this.submitForm();
    },
    // End:: validate Form Inputs

    handleSaveRegion(coordinates) {
      // Handle the saved region coordinates from the child component

      this.coordinates = coordinates;
    },
    // start show data
    async showCity() {
      try {
        let res = await this.$axios({
          method: "GET",
          url: `areas/${this.$route.params?.id}`,
        });
        this.data.name_ar = res.data.data.Area.name_ar;
        this.data.name_en = res.data.data.Area.name_en;
        this.data.created_at = res.data.data.Area.created_at;
        this.data.count_order_finish = res.data.data.Area.count_order_finish;
        this.data.active = res.data.data.Area.is_active;

        // Convert points to an array of objects with numeric values

        this.regionPoints = res.data.data.Area.location.map((point) => ({
          lat: parseFloat(point.lat),
          lng: parseFloat(point.lng),
        }));

        console.log("this.regionPoints", this.regionPoints);
      } catch (error) {
        this.loading = false;
        console.log(error?.response?.data?.message);
      }
    },
    // end show data
  },

  created() {
    this.showCity();
  },
};
</script>
