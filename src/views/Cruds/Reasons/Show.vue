<template>
  <div class="crud_form_wrapper">
    <!-- Start:: Title -->
    <div class="form_title_wrapper">
      <h4>{{ $t("TITLES.showReason") }}</h4>
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
            :placeholder="$t('TABLES.Reasons.nameAr')"
            v-model.trim="data.name"
            disabled
          />
          <base-input
            col="6"
            type="text"
            :placeholder="$t('TABLES.Reasons.nameEn')"
            v-model.trim="data.nameEn"
            disabled
          />
          <!-- End:: Name Input -->
          <!-- Start:: Deactivate Switch Input -->
          <div class="input_wrapper switch_wrapper my-5 col-4">
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ShowReason",

  data() {
    return {
      // Start:: Loader Control Data
      isWaitingRequest: false,
      // End:: Loader Control Data

      // Start:: Data Collection To Send
      data: {
        name: null,
        nameEn: null,
        count_uses: null,
        created_at: null,
        active: null,
      },
      // End:: Data Collection To Send
    };
  },

  computed: {
    ...mapGetters({
      getAppLocale: "AppLangModule/getAppLocale",
    }),
  },

  methods: {
    // start show data
    async showReason() {
      try {
        let res = await this.$axios({
          method: "GET",
          url: `ban-reasons/${this.$route.params.id}`,
        });
        this.data.name = res.data.data.BanReason.name_ar;
        this.data.nameEn = res.data.data.BanReason.name_en;
        this.data.active = res.data.data.BanReason.is_active;
      } catch (error) {
        this.loading = false;
        console.log(error.response.data.message);
      }
    },
    // end show data
  },

  created() {
    // Start:: Fire Methods
    this.showReason();
    // End:: Fire Methods
  },
};
</script>
