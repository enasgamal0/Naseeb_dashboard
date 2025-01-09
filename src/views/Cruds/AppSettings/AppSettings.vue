<template>
  <div class="crud_form_wrapper app_settings_class">
    <!-- Start:: Single Step Form Content -->
    <div class="table_title_wrapper">
      <div class="title_text_wrapper">
        <h5 style="color: #3fa9f5">{{ $t("SIDENAV.settings.general") }}</h5>
      </div>
      <div class="col-12 text-end">
        <v-btn @click="$router.go(-1)" style="color: #3fa9f5">
          <i class="fas fa-backward"></i>
        </v-btn>
      </div>
    </div>
    <div class="single_step_form_content_wrapper">
      <form @submit.prevent="validateFormInputs">
        <div class="row">
          <!-- Start:: Hours Inputs -->
          <base-input
            type="number"
            col="12"
            :placeholder="`${$t(
              'SIDENAV.GeneralSetting.subscription_price'
            )}`"
            v-model.trim="data.subscription_fee"
          />
          <base-input
            type="number"
            col="12"
            :placeholder="`${$t(
              'SIDENAV.GeneralSetting.trial_period'
            )}`"
            v-model.trim="data.Trial_period_duration"
          />
          <!-- End:: Hours Input -->

          <!-- Start:: Submit Button Wrapper -->
          <div class="btn_wrapper">
            <base-button
              class="mt-2"
              styleType="primary_btn"
              :btnText="$t('BUTTONS.save')"
              :isLoading="isWaitingRequest"
              :disabled="isWaitingRequest"
            />
          </div>
          <!-- End:: Submit Button Wrapper -->
        </div>
      </form>
    </div>
    <!-- End:: Single Step Form Content -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppSetting",

  data() {
    return {
      // Start:: Loader Control Data
      isWaitingRequest: false,
      // End:: Loader Control Data

      // Start:: Data
      data: {
        subscription_fee: null,
        Trial_period_duration: null,
      },
      // End:: Data
    };
  },

  computed: {
    // Start:: Vuex Getters
    ...mapGetters({
      getAuthenticatedUserData: "AuthenticationModule/getAuthenticatedUserData",
    }),
    // End:: Vuex Getters
    cancel_options() {
      return [
        {
          id: 1,
          name: this.$t("PLACEHOLDERS.yes"),
          value: "1",
        },
        {
          id: 0,
          name: this.$t("PLACEHOLDERS.no"),
          value: "0",
        },
      ];
    },
  },

  methods: {
    // Start:: Get Data To Edit
    async getDataToEdit() {
      try {
        let res = await this.$axios({
          method: "GET",
          url: `settings?key=dashboard-settings`,
        });
        // console.log("DATA =>", res.data.data);
        const settings = res.data.data.data[0].value;
        this.data.subscription_fee =
          settings.subscription_fee;
        this.data.Trial_period_duration =
          settings.Trial_period_duration;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    // End:: Get Data To Edit

    // Start:: Submit Form
    async submitForm() {
      this.isWaitingRequest = true;

      const REQUEST_DATA = new FormData();
      // Start:: Append Request Data
      REQUEST_DATA.append("key", "dashboard-settings");
      REQUEST_DATA.append(
        "value[subscription_fee]",
        this.data.subscription_fee
      );
      REQUEST_DATA.append(
        "value[Trial_period_duration]",
        this.data.Trial_period_duration
      );

      // Start:: Append Request Data

      try {
        await this.$axios({
          method: "POST",
          url: `settings`,
          data: REQUEST_DATA,
        });
        this.isWaitingRequest = false;
        this.$message.success(this.$t("MESSAGES.savedSuccessfully"));
        this.getDataToEdit();
      } catch (error) {
        this.isWaitingRequest = false;
        this.$message.error(error.response.data.message);
      }
    },
    // End:: Submit Form

    // Start:: validate Form Inputs
    validateFormInputs() {
      // this.isWaitingRequest = true;
      // if (!this.data.Tax || this.data.Tax === "null") {
      //   this.isWaitingRequest = false;
      //   this.$message.error(this.$t("VALIDATION.tax"));
      //   return;
      // }
      // if (
      //   !this.data.different_time_duration ||
      //   this.data.different_time_duration === "null"
      // ) {
      //   this.isWaitingRequest = false;
      //   this.$message.error(this.$t("VALIDATION.different_time_duration"));
      //   return;
      // } else {
      //   this.submitForm();
      //   return;
      // }
      this.submitForm();
    },
    // End:: validate Form Inputs
  },

  created() {
    // Start:: Fire Methods
    this.getDataToEdit();
    // End:: Fire Methods
  },
};
</script>

<style>
.app_settings_class form .input_wrapper.top_label .form-label {
  font-size: 14px !important;
  top: -10px !important;
}
@media (max-width: 1080px) {
  .app_settings_class form .input_wrapper.top_label .form-label {
    font-size: 13px !important;
    top: -10px !important;
  }
  .app_settings_class form .input_wrapper.top_label input,
  .app_settings_class
    form
    .input_wrapper.top_label.select_wrapper
    .multiselect
    .multiselect__tags {
    padding: 30px 12px !important;
  }
}
</style>

<style lang="scss" scoped>
.all_action {
  display: flex;
  gap: 15px;
}

.add_another {
  border: none;
  padding: 8px;
  width: 40px;
  height: 40px;
  border: 1px solid var(--light_gray_clr);
  border-radius: 50%;
  font-size: 18px;
  color: var(--light_gray_clr);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: auto;

  .fa-trash {
    color: #ff2159;
    cursor: pointer;
  }
}
</style>
