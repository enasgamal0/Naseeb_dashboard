<template>
  <div class="crud_form_wrapper">
    <!-- Start:: Title -->
    <div class="form_title_wrapper">
      <h4>{{ $t("BUTTONS.add_notification") }}</h4>
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
        <div class="row align-items-center">
          <div class="col-12">
            <div class="row">
              <!-- Start:: Title Ar Input -->
              <base-input
                col="6"
                type="text"
                :placeholder="$t('PLACEHOLDERS.titleAr')"
                v-model.trim="data.titleAr"
                required
              />
              <!-- End:: Title Ar Input -->

              <!-- Start:: Title En Input -->
              <base-input
                col="6"
                type="text"
                :placeholder="$t('PLACEHOLDERS.titleEn')"
                v-model.trim="data.titleEn"
                required
              />
              <!-- End:: Title En Input -->

              <!-- Start:: Content Ar Input -->
              <base-input
                col="6"
                rows="7"
                type="textarea"
                :placeholder="$t('PLACEHOLDERS.contentAr')"
                v-model.trim="data.contentAr"
                required
              />
              <!-- End:: Content Ar Input -->

              <!-- Start:: Content En Input -->
              <base-input
                col="6"
                rows="7"
                type="textarea"
                :placeholder="$t('PLACEHOLDERS.contentEn')"
                v-model.trim="data.contentEn"
                required
              />
              <!-- Start:: Receiver Type Input -->
              <base-select-input
                col="12"
                :optionsList="roles"
                :placeholder="$t('TABLES.Notifications.receiverType')"
                v-model="data.role"
                required
                @input="getMethods"
              />
              <!-- End:: Receiver Type Input -->
              <base-select-input
                v-if="
                  data.role && data.role.value == 'clients' && clients.length
                "
                class="col-12"
                :optionsList="clients.map(client => ({
                  id: client.user.id,
                  name: client.user.name
                }))"
                :placeholder="$t('TITLES.clients')"
                v-model="data.clients"
                required
                multiple
                :focus="false"
              />
            </div>
          </div>

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
    <!-- END:: Single Step Form Content -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CreateNotification",

  computed: {
    roles() {
      return [
        {
          id: 1,
          name: this.$t("TITLES.clients"),
          value: "clients",
        },
        {
          id: 2,
          name: this.$t("STATUS.all"),
          value: "all",
        },
      ];
    },
  },

  data() {
    return {
      // Start:: Loader Control Data
      isWaitingRequest: false,
      // End:: Loader Control Data

      // Start:: Data Collection To Send
      data: {
        clients: null,
        providers: null,
        titleAr: null,
        titleEn: null,
        contentAr: null,
        contentEn: null,
        role: { id: 2, name: this.$t("STATUS.all"), value: "all" },
      },
      clients: [],
      providers: [],
      stores: [],
      // End:: Data Collection To Send
    };
  },

  methods: {
    // Start:: validate Form Inputs
    validateFormInputs() {
      this.isWaitingRequest = true;
      if (!this.data.titleAr) {
        this.isWaitingRequest = false;
        this.$message.error(this.$t("VALIDATION.nameAr"));
        return;
      } else if (!this.data.titleEn) {
        this.isWaitingRequest = false;
        this.$message.error(this.$t("VALIDATION.nameEn"));
        return;
      } else if (!this.data.contentAr) {
        this.isWaitingRequest = false;
        this.$message.error(this.$t("VALIDATION.contentAr"));
        return;
      } else if (!this.data.contentEn) {
        this.isWaitingRequest = false;
        this.$message.error(this.$t("VALIDATION.contentEn"));
        return;
      } else {
        this.submitForm();
        return;
      }
    },
    // End:: validate Form Inputs
    // Start:: Submit Form
    async submitForm() {
      const REQUEST_DATA = new FormData();
      // Start:: Append Request Data

      // if (this.data.role.value == "all") {
      //   REQUEST_DATA.append(`types_notify[]`, "all");
      // } else if (this.data.role.value == "clients") {
      //   this.data.clients.forEach((element, index) => {
      //     REQUEST_DATA.append(`types_notify[]`, "client");
      //     REQUEST_DATA.append(`users[${index}]`, element.id);
      //   });
      // }
      REQUEST_DATA.append("title[ar]", this.data.titleAr);
      REQUEST_DATA.append("title[en]", this.data.titleEn);
      REQUEST_DATA.append("body[ar]", this.data.contentAr);
      REQUEST_DATA.append("body[en]", this.data.contentEn);
      if (this.data.clients){
        this.data.clients?.map((ele) => {
          REQUEST_DATA.append(`users[]`, ele.id);
        });
      }
      else{
        REQUEST_DATA.append("to_type", "all");
      }
      // Start:: Append Request Data

      try {
        await this.$axios({
          method: "POST",
          url: `notification/store`,
          data: REQUEST_DATA,
        });
        this.isWaitingRequest = false;
        this.$message.success(this.$t("MESSAGES.sentSuccessfully"));
        this.$router.push({ path: "/all-notifications/all" });
      } catch (error) {
        this.isWaitingRequest = false;
        this.$message.error(error.response.data.message);
      }
    },
    // End:: Submit Form

    async getClients() {
      this.loading = true;
      try {
        let res = await this.$axios({
          method: "GET",
          url: "clients?page=0&limit=0",
        });
        this.loading = false;
        this.clients = res.data.data.data;
        console.log(this.clients)
      } catch (error) {
        this.loading = false;
        console.log(error.response.data.message);
      }
    },

    getMethods() {
      this.data.clients = null;

      if (this.data.role.value == "clients") {
        // this.data.users = [];
        this.getClients();
      }
    },

    // End:: Set Table Rows
  },

  created() {
    this.getClients();
  },
};
</script>
