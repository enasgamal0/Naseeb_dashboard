<template>
  <div class="crud_form_wrapper">
    <!-- Start:: Title -->
    <div class="form_title_wrapper">
      <h4>{{ $t("BUTTONS.view_notification_details") }}</h4>
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
        <div class="row justify-content-center">
          <!-- Start:: Receiver Type Input -->
          <base-input
            col="12"
            type="text"
            :placeholder="$t('PLACEHOLDERS.address')"
            v-model.trim="data.title"
            disabled
          />
          <base-input
            col="12"
            type="text"
            :placeholder="$t('PLACEHOLDERS.contents')"
            v-model.trim="data.body"
            disabled
          />
          <!-- <base-input
            col="12"
            type="text"
            :placeholder="$t('PLACEHOLDERS.receiverType')"
            v-model.trim="data.users"
            disabled
          /> -->
          <base-select-input
            v-if="data.users && data.users?.length > 0"
            col="12"
            :optionsList="data.users"
            multiple
            :placeholder="$t('PLACEHOLDERS.receivers')"
            v-model.trim="data.users"
            disabled
          />
          <base-input
            v-else-if="data.users && data.users?.length == 0"
            col="12"
            type="text"
            :placeholder="$t('PLACEHOLDERS.receivers')"
            v-model="all"
            disabled
          />
          <base-input
            col="12"
            type="text"
            :placeholder="$t('TABLES.Notifications.date')"
            v-model.trim="data.created_at"
            disabled
          />
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
    // Start:: Vuex Getters
    ...mapGetters({
      allClientsData: "ApiGetsModule/allClientsData",
      allDriversData: "ApiGetsModule/allDriversData",
    }),
    // End:: Vuex Getters

    receiverTypes() {
      return [
        {
          id: 1,
          name: this.$t("PLACEHOLDERS.clients"),
          value: "clients",
        },
        {
          id: 2,
          name: this.$t("PLACEHOLDERS.drivers"),
          value: "drivers",
        },
        {
          id: 3,
          name: this.$t("PLACEHOLDERS.both"),
          value: "both",
        },
      ];
    },
  },

  data() {
    return {
      // Start:: Loader Control Data
      isWaitingRequest: false,
      // End:: Loader Control Data
      all: "",
      // Start:: Data Collection To Send
      // data: {
      //   receiverType: {
      //     id: 1,
      //     name: this.$t("PLACEHOLDERS.clients"),
      //     value: "clients",
      //   },

      // },

      data: {
        sender_type: null,
        title: null,
        body: null,
        created_at: null,
        content: null,
        users: [],
      },
      // End:: Data Collection To Send
    };
  },

  methods: {
    // Start:: Vuex Actions
    ...mapActions({
      getClients: "ApiGetsModule/getClients",
      getDrivers: "ApiGetsModule/getDrivers",
    }),
    // End:: Vuex Actions

    // get notification with id
    async getNotificationData() {
      try {
        let res = await this.$axios({
          method: "POST",
          url: `notification/show`,
          data: { notification_id: `${this.$route.params.id}` },
        });
        console.log(res.data.data)
        this.data.created_at = res.data.data.notification.created_at;
        // this.data.sender_type = res.data.Notification.data.notifiable_type_translated;
        this.data.title = res.data.data.notification.title;
        this.data.body = res.data.data.notification.body;
        this.data.users = res.data.data.notification.users;
        this.all = this.$t('STATUS.all');
      } catch (error) {
        this.loading = false;
        console.log(error.response.data.message);
      }
    },
  },

  created() {
    // Start:: Fire Methods
    this.getNotificationData();
    // End:: Fire Methods
  },
};
</script>
