<template>
  <div class="crud_form_wrapper single_show_content_wrapper">
    <!-- Start:: Title -->
    <div class="form_title_wrapper">
      <h4>{{ $t("TITLES.showClient", { name: data.name }) }}</h4>
    </div>
    <div class="col-12 text-end">
      <v-btn @click="$router.go(-1)" style="color: #3fa9f5">
        <i class="fas fa-backward"></i>
      </v-btn>
    </div>
    <!-- End:: Title -->

    <!-- Start:: Single Step Form Content -->
    <div class="single_step_form_content_wrapper">
      <!-- ==== Start:: Status Badges ==== -->
      <div class="badges_wrapper justify-content-between">
        <div class="wrapper">
          <v-chip color="amber darken-2" text-color="white">
            {{ $t("TITLES.numberOfVisits", { number: data.numberOfVisits }) }}
          </v-chip>
          <v-chip color="amber darken-2" text-color="white">
            {{ $t("TITLES.lastVisit", { date: data.lastVisit }) }}
          </v-chip>
        </div>

        <v-chip :color="data.active ? 'green' : 'red'" text-color="white">
          {{ data.active ? $t("STATUS.active") : $t("STATUS.notActive") }}
        </v-chip>
      </div>
      <!-- ==== End:: Status Badges ==== -->

      <!-- ==== Start:: Client Main Data ==== -->
      <form>
        <div class="row">
          <!-- Start:: Image -->
          <div class="preview-container text-center my-3">
            <img
              v-if="data.image"
              col="12"
              :src="data.image"
              :alt="$t('PLACEHOLDERS.personalImage')"
            />
          </div>
          <!-- End:: Image -->

          <div class="mt-5">
            <label style="color: #3fa9f5; font-size: 16px;">{{ $t("PLACEHOLDERS.user_photos") }}</label>
            <TheSlider :sliderData="data.images" />
          </div>

          <!-- Start:: Ar Name Input -->
          <base-input
            col="12"
            type="text"
            :placeholder="$t('PLACEHOLDERS.user_name')"
            v-model.trim="data.name"
            disabled
            class="disabled_input"
          />
          <!-- End:: Ar Name Input -->

          <!-- Start:: Input -->
          <base-input
            col="12"
            type="text"
            :placeholder="$t('PLACEHOLDERS.bio')"
            v-model.trim="data.bio"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->

          <!-- Start:: Input -->
          <base-input
            col="12"
            type="text"
            :placeholder="$t('PLACEHOLDERS.partner_preferences')"
            v-model.trim="data.about_partner"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->

          <!-- Start:: Second Phone Input -->
          <!-- <base-input col="4" type="tel" :placeholder="$t('PLACEHOLDERS.secondPhone')" v-model.trim="data.secondPhone"
            disabled class="disabled_input" /> -->
          <!-- End:: Second Phone Input -->

          <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.country')"
            v-model.trim="data.country.name"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->

          <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('TABLES.Clients.age')"
            v-model.trim="data.age"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->

          <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.account_type')"
            v-model.trim="data.account_type"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->

          <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.height')"
            v-model.trim="data.height"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
          <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.weight')"
            v-model.trim="data.weight"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
          <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.skin_color')"
            v-model.trim="data.skin_color"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
          <!-- Start:: Input -->
          <base-input
            col="12"
            type="text"
            :placeholder="$t('PLACEHOLDERS.status')"
            v-model.trim="data.trans_status"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
          <!-- Start:: Input -->
          <base-input
            col="6"
            type="text"
            :placeholder="$t('PLACEHOLDERS.education_level')"
            v-model.trim="data.education_level"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
          <!-- Start:: Input -->
          <base-input
            col="6"
            type="text"
            :placeholder="$t('PLACEHOLDERS.profession')"
            v-model.trim="data.profession"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
          <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.marital_status')"
            v-model.trim="data.trans_marital_status"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
          <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.desire_for_children')"
            v-model.trim="data.desire_for_children"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
          <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.readiness_for_marriage')"
            v-model.trim="data.trans_readiness_for_marriage"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
          <base-select-input
            col="12"
            :optionsList="data.languages"
            :placeholder="$t('PLACEHOLDERS.languages')"
            :multiple="true"
            v-model="data.languages"
            disabled
          />
          <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.religious_sect')"
            v-model.trim="data.religious_sect"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
           <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.religious_commitment_level')"
            v-model.trim="data.religious_commitment_level"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
           <!-- Start:: Input -->
          <base-input
            col="4"
            type="text"
            :placeholder="$t('PLACEHOLDERS.prayer_habits')"
            v-model.trim="data.prayer_habits"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
           <!-- Start:: Input -->
          <base-input
            col="6"
            type="text"
            :placeholder="$t('PLACEHOLDERS.smoking')"
            v-model.trim="data.smoking"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
           <!-- Start:: Input -->
          <base-input
            col="6"
            type="text"
            :placeholder="$t('PLACEHOLDERS.drinking_alcohol')"
            v-model.trim="data.drinking_alcohol"
            disabled
            class="disabled_input"
          />
          <!-- End:: Input -->
          <base-select-input
            col="12"
            :optionsList="data.hobbies"
            :placeholder="$t('PLACEHOLDERS.hobbies')"
            :multiple="true"
            v-model="data.hobbies"
            disabled
          />
          <base-select-input
            col="12"
            :optionsList="data.personal_traits"
            :placeholder="$t('PLACEHOLDERS.personal_traits')"
            :multiple="true"
            v-model="data.personal_traits"
            disabled
          />
        </div>
      </form>
      <!-- ==== End:: Client Main Data ==== -->
    </div>
    <!-- End:: Single Step Form Content -->
  </div>
</template>

<script>
import TheSlider from "../../../../src/components/structure/TheSlider.vue";

export default {
  name: "SingleClient",

  components: {
    TheSlider,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      // Start:: Loading Data
      isWaitingRequest: false,
      // End:: Loading Data

      // Start:: Table Data
      addressesTableHeaders: [
        { text: this.$t("TABLES.Addresses.serialNumber") },
        { text: this.$t("TABLES.Addresses.address") },
        { text: this.$t("TABLES.Addresses.longitude") },
        { text: this.$t("TABLES.Addresses.latitude") },
        { text: this.$t("TABLES.Addresses.type") },
        { text: this.$t("TABLES.Addresses.isDefault") },
      ],
      // End:: Table Data

      // Start:: Data
      data: {
        image: null,
        name: null,
        phone: null,
        secondPhone: null,
        email: null,
        joiningDate: null,
        currentPackage: null,
        addresses: [],
        active: false,
        numberOfVisits: null,
        lastVisit: null,
      },
      // End:: Data
    };
  },

  methods: {
    // Start:: Get Data To Show
    async getDataToShow() {
      try {
        let res = await this.$axios({
          method: "GET",
          url: `clients/${this.$route.params.id}`,
        });
        // console.log("DATA =>", res.data.data);
        this.data.image = res.data.data.Client.avatar;
        this.data.images = res.data.data.Client.images;
        this.data.name = res.data.data.Client.user_name;
        this.data.bio = res.data.data.Client.user_bio;
        this.data.about_partner = res.data.data.Client.about_partner;
        this.data.country = res.data.data.Client.country;
        this.data.age = res.data.data.Client.age;
        this.data.account_type = res.data.data.Client.trans_account_type;
        this.data.height = res.data.data.Client.height;
        this.data.weight = res.data.data.Client.weight;
        this.data.skin_color = res.data.data.Client.skin_color;
        this.data.trans_status = res.data.data.Client.trans_status;
        this.data.education_level = res.data.data.Client.education_profession.education_level.name;
        this.data.profession = res.data.data.Client.education_profession.profession.name;
        this.data.trans_marital_status = res.data.data.Client.family_maritalStatus.trans_marital_status;
        this.data.desire_for_children = res.data.data.Client.family_maritalStatus.desire_for_children;
        this.data.trans_readiness_for_marriage = res.data.data.Client.family_maritalStatus.trans_readiness_for_marriage;
        this.data.languages = res.data.data.Client.spoken_languages;
        this.data.religious_sect = res.data.data.Client.religious_beliefs.religious_sect.name;
        this.data.religious_commitment_level = res.data.data.Client.religious_beliefs.trans_commitment_level;
        this.data.prayer_habits = res.data.data.Client.religious_beliefs.trans_praying;
        this.data.smoking = res.data.data.Client.lifestyle_choices.smoking;
        this.data.drinking_alcohol = res.data.data.Client.lifestyle_choices.drinking_alcohol;
        this.data.hobbies = res.data.data.Client.hobbies;
        this.data.personal_traits = res.data.data.Client.personal_traits;
        this.data.active = res.data.data.Client.is_active;
        // this.data.secondPhone = res.data.data.User.second_phone;
        this.data.numberOfVisits = res.data.data.Client.login_count;
        // back must return date as 2024-05-13
        this.data.lastVisit = res.data.data.Client.last_login;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    // End:: Get Data To Show
  },

  created() {
    // Start:: Fire Methods
    this.getDataToShow();
    // End:: Fire Methods
  },
};
</script>
