<template>
  <div class="side_nav_wrapper" :class="{ active: navIsActive }">
    <!-- Start:: Toggle Btn -->
    <button class="close_btn" @click="$emit('fireToggleNavDrawerEmit')">
      <i class="fal fa-times"></i>
    </button>
    <!-- End:: Toggle Btn -->

    <!-- Start:: Logo -->
    <div class="logo_wrapper" v-if="getAppTheme == 'light_theme'">
      <router-link class="logo" to="/home">
        <img
          src="@/assets/media/logo/logo_dark.png"
          alt="Logo"
          width="170"
          height="125"
        />
      </router-link>
    </div>

    <div class="logo_wrapper" v-else>
      <router-link class="logo" to="/home">
        <img
          src="@/assets/media/logo/logo_light.png"
          alt="Logo"
          width="170"
          height="125"
        />
      </router-link>
    </div>
    <!-- End:: Logo -->

    <!-- Start:: Side Nav Links -->
    <div class="side_nav_links_wrapper">
      <!-- Start:: Home Route -->
      <div class="home_route" @click="$emit('fireToggleNavDrawerEmit')">
        <router-link to="/home">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/home.svg"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("SIDENAV.dashboard") }}
          </span>
        </router-link>
      </div>
      <!-- End:: Home Route -->

      <!-- Start::  Roles and Admins Routes-->
      <div class="side_routes_wrapper">
        <a-menu
          style="width: 100%"
          mode="vertical"
          :open-keys="openKeys"
          @openChange="onOpenChange"
          v-if="
            $can('roles index', 'roles') ||
            $can('permissions index', 'permissions') ||
            $can('admins index', 'admins')
          "
        >
          <a-sub-menu
            v-for="item in sideNavbarList_Admins"
            :key="item.key"
            :data-type="!item.children ? 'single_route' : ''"
          >
            <template v-if="item.children">
              <span slot="title">
                <img :src="item.icon" alt="icon" width="35" height="35" />
                <span> {{ item.title }} </span>
              </span>

              <a-menu-item
                v-for="childItem in item.children"
                :key="childItem.key"
              >
                <button
                  v-if="childItem.hasPermission"
                  class="text-start w-100"
                  @click="$emit('fireToggleNavDrawerEmit')"
                >
                  <router-link :to="childItem.route">
                    <i class="fad fa-circle"></i>
                    {{ childItem.title }}
                  </router-link>
                </button>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </a-menu>
      </div>
      <!-- End::  Roles and Admins Routes -->

      <!-- Start:: Admins Route -->
      <!-- <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('admins index', 'admins')"
      >
        <router-link to="/admins/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/admins.svg"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("PLACEHOLDERS.adminsManeg") }}
          </span>
        </router-link>
      </div> -->
      <!-- End:: Admins Route -->
      <!-- Start:: Admins Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('additions index', 'additions')"
      >
        <router-link to="/ResidentialAdd/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/subtrain.png"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("PLACEHOLDERS.ResidentialAdd") }}
          </span>
        </router-link>
      </div>
      <!-- End:: Admins Route -->
      <!-- Start:: Capacities Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('capacities index', 'capacities')"
      >
        <router-link to="/Capacities/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/orders.png"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("PLACEHOLDERS.Capacities") }}
          </span>
        </router-link>
      </div>
      <!-- End:: Admins Route -->

      <!-- Start:: users Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('clients index', 'clients')"
      >
        <router-link to="/Clients/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/clients.svg"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("SIDENAV.Clients.title") }}
          </span>
        </router-link>
      </div>
      <!-- End:: users Route -->
      <!-- Start:: chats Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('chats index', 'chats')"
      >
        <router-link to="/chats/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/messages.svg"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("PLACEHOLDERS.manage_chats") }}
          </span>
        </router-link>
      </div>
      <!-- End:: chats Route -->
      <!-- Start:: orders Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
      >
        <router-link to="/financialreports/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/report.png"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("PLACEHOLDERS.FinancialReports") }}
          </span>
        </router-link>
      </div>
      <!-- End:: orders Route -->
      <!-- Start:: reasons Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('banreasons index', 'banreasons')"
      >
        <router-link to="/reasons/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/block.png"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("PLACEHOLDERS.reasons") }}
          </span>
        </router-link>
      </div>
      <!-- End:: reasons Route -->

      <!-- Start:: Words Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('offensivewords index', 'offensivewords')"
      >
        <router-link to="/Words/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/cancel.png"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("PLACEHOLDERS.words") }}
          </span>
        </router-link>
      </div>
      <!-- End:: Words Route -->

      <!-- Start:: personal Route -->
      <div class="side_routes_wrapper">
        <a-menu
          style="width: 100%"
          mode="vertical"
          :open-keys="openKeys"
          @openChange="onOpenChange"
          v-if="
            $can('areas index', 'areas') ||
            $can('cities index', 'cities')
          "
        >
          <a-sub-menu
            v-for="item in sideNavbarList_Personal"
            :key="item.key"
            :data-type="!item.children ? 'single_route' : ''"
            style="border: none;"
          >
            <template v-if="item.children">
              <span slot="title">
                <img :src="item.icon" alt="icon" width="35" height="35" />
                <span> {{ item.title }} </span>
              </span>

              <a-menu-item
                v-for="childItem in item.children"
                :key="childItem.key"
              >
                <button
                  v-if="childItem.hasPermission"
                  class="text-start w-100"
                  @click="$emit('fireToggleNavDrawerEmit')"
                >
                  <router-link :to="childItem.route">
                    <i class="fad fa-circle"></i>
                    {{ childItem.title }}
                  </router-link>
                </button>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </a-menu>
      </div>

      <!-- Start:: managements Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('management index', 'management')"
      >
        <router-link to="/managements/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/pm.png"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("PLACEHOLDERS.manage_departments_and_managers") }}
          </span>
        </router-link>
      </div>
      <!-- End:: managements Route -->
      <!-- Start:: complaints Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('complaints index', 'complaints')"
      >
        <router-link to="/Complaints/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/office.svg"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("PLACEHOLDERS.complaints_management") }}
          </span>
        </router-link>
      </div>
      <!-- End:: complaints Route -->

      <!-- Start:: notifications Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('notifications index', 'notifications')"
      >
        <router-link to="/all-notifications/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/notifications.svg"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("SIDENAV.notifications.title") }}
          </span>
        </router-link>
      </div>
      <!-- End:: notifications Route -->

      <!-- Start:: faqs Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('faqs index', 'faqs')"
      >
        <router-link to="/questions/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/service_type.svg"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("SIDENAV.questions.title") }}
          </span>
        </router-link>
      </div>
      <!-- End:: faqs Route -->

      <!-- Start:: app settings Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('settings edit', 'settings')"
      >
        <router-link to="/app_settings">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/settings.svg"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("SIDENAV.settings.general_app") }}
          </span>
        </router-link>
      </div>
      <!-- End:: app settings Route -->

      <!-- Start:: Side Nav Routes -->
      <div class="side_routes_wrapper">
        <a-menu
          style="width: 100%"
          mode="vertical"
          :open-keys="openKeys"
          @openChange="onOpenChange"
          v-if="$can('settings create', 'settings')"
        >
          <a-sub-menu
            v-for="item in sideNavbarList"
            :key="item.key"
            :data-type="!item.children ? 'single_route' : ''"
            style="border: none;"
          >
            <template v-if="item.children">
              <span slot="title">
                <img :src="item.icon" alt="icon" width="35" height="35" />
                <span> {{ item.title }} </span>
              </span>

              <a-menu-item
                v-for="childItem in item.children"
                :key="childItem.key"
              >
                <button
                  class="text-start w-100"
                  @click="$emit('fireToggleNavDrawerEmit')"
                  v-if="childItem.hasPermission"
                >
                  <router-link :to="childItem.route">
                    <i class="fad fa-circle"></i>
                    {{ childItem.title }}
                  </router-link>
                </button>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </a-menu>
      </div>
      <!-- End:: Side Nav Routes -->

      <!-- Start:: contacts Route -->
      <div
        class="home_route"
        @click="$emit('fireToggleNavDrawerEmit')"
        v-if="$can('contacts index', 'contacts')"
      >
        <router-link to="/contact-messages/all">
          <span class="route_icon">
            <img
              src="@/assets/media/icons/ui_icons/messages.svg"
              alt="icon"
              width="40"
              height="40"
            />
          </span>
          <span class="route_text">
            {{ $t("SIDENAV.ContactMessages.title") }}
          </span>
        </router-link>
      </div>
      <!-- End:: contacts Route -->

      <div class="side_routes_wrapper">
        <a-menu style="width: 100%" mode="inline">
          <!-- Start:: Logout Tab -->
          <a-sub-menu
            key="logout"
            @titleClick="logoutConfirmationModalIsOpen = true"
          >
            <!-- ========= Start:: Main Tab -->
            <span slot="title" class="logout_btn">
              <img
                src="../../assets/media/icons/ui_icons/logout.svg"
                alt="icon"
                width="35"
                height="35"
              />
              <span>
                {{ $t("SIDENAV.Logout.title") }}
              </span>
            </span>
            <!-- ========= End:: Main Tab -->
          </a-sub-menu>
          <!-- End:: Logout Tab -->
        </a-menu>
      </div>
      <!-- End:: Side Nav Routes -->

      <!-- Start:: Logout Confirmation Modal -->
      <v-dialog v-model="logoutConfirmationModalIsOpen">
        <v-card>
          <v-card-title class="text-h5 justify-center">
            {{ $t("TITLES.logoutConfirmingMessage") }}
          </v-card-title>
          <v-card-actions>
            <v-btn class="modal_confirm_btn" @click="logout">{{
              $t("BUTTONS.logout")
            }}</v-btn>

            <v-btn
              class="modal_cancel_btn"
              @click="logoutConfirmationModalIsOpen = false"
              >{{ $t("BUTTONS.cancel") }}</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- End:: Logout Confirmation Modal -->
    </div>
  </div>
  <!-- End:: Side Nav Links -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SideNav",

  emits: ["fireToggleNavDrawerEmit"],

  props: {
    navIsActive: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    // Start:: Vuex Get Authenticated User Data
    ...mapGetters({
      getAppTheme: "AppThemeModule/getAppTheme",
      getAuthenticatedUserData: "AuthenticationModule/getAuthenticatedUserData",
    }),
    // End:: Vuex Get Authenticated User Data

    // Start:: Extract Side Nav Keys
    extractSideNavItemsKeys() {
      let extractedKeys = [];
      this.sideNavbarList_Admins.forEach((element) => {
        extractedKeys.push(element["key"]);
      });
      this.sideNavbarList_Personal.forEach((element) => {
        extractedKeys.push(element["key"]);
      });
      this.sideNavbarList.forEach((element) => {
        extractedKeys.push(element["key"]);
      });
      return extractedKeys;
    },

    // End:: Extract Side Nav Keys
  },

  data() {
    return {
      // Start:: Controle Open Tabs Data
      openKeys: [],
      // openSetting: [],
      // End:: Controle Open Tabs Data

      // Start:: Side Navbar List
      sideNavbarList_Admins: [
        {
          key: "dashboard",
          title: this.$t("SIDENAV.control_admins"),
          icon: require("@/assets/media/icons/ui_icons/panel.png"),
          hasPermission: this.$can("roles index", "roles"),
          children: [
            {
              key: "roles",
              title: this.$t("SIDENAV.Roles.title"),
              route: "/roles/all",
              hasPermission:
                this.$can("roles index", "roles") ||
                this.$can("permissions index", "permissions"),
            },
            {
              key: "admins",
              title: this.$t("SIDENAV.Admins.title"),
              route: "/admins/all",
              hasPermission: this.$can("admins index", "admins"),
            },
          ],
        },
      ],

      sideNavbarList_Personal: [
        {
          key: "personal",
          title: this.$t("PLACEHOLDERS.personal_attributes"),
          icon: require("@/assets/media/icons/ui_icons/users.svg"),
          hasPermission:
            this.$can("personaltraits index", "personaltraits") ||
            this.$can("hobbies index", "hobbies") ||
            this.$can("countries index", "countries") ||
            this.$can("nationalities index", "nationalities") ||
            this.$can("religioussects index", "religioussects") ||
            this.$can("spokenlanguages index", "spokenlanguages") ||
            this.$can("professions index", "professions") ||
            this.$can("educationlevels index", "educationlevels"),
          children: [
            {
              key: "personaltraits",
              title: this.$t("PLACEHOLDERS.personaltraits"),
              route: "/personaltraits/all",
              hasPermission: this.$can("personaltraits index", "personaltraits"),
            },
            {
              key: "hobbies",
              title: this.$t("PLACEHOLDERS.hobbies"),
              route: "/hobbies/all",
              hasPermission: this.$can("hobbies index", "hobbies"),
            },
            {
              key: "countries",
              title: this.$t("PLACEHOLDERS.countries"),
              route: "/countries/all",
              hasPermission: this.$can("countries index", "countries"),
            },
            {
              key: "cities",
              title: this.$t("PLACEHOLDERS.cities"),
              route: "/cities/all",
              hasPermission: this.$can("cities index", "cities"),
            },
            {
              key: "nationalities",
              title: this.$t("PLACEHOLDERS.nationalities"),
              route: "/nationalities/all",
              hasPermission: this.$can("nationalities index", "nationalities"),
            },
            {
              key: "religioussects",
              title: this.$t("PLACEHOLDERS.religioussects"),
              route: "/religioussects/all",
              hasPermission: this.$can("religioussects index", "religioussects"),
            },
            {
              key: "spokenlanguages",
              title: this.$t("PLACEHOLDERS.spokenlanguages"),
              route: "/spokenlanguages/all",
              hasPermission: this.$can("spokenlanguages index", "spokenlanguages"),
            },
            {
              key: "professions",
              title: this.$t("PLACEHOLDERS.professions"),
              route: "/professions/all",
              hasPermission: this.$can("professions index", "professions"),
            },
            {
              key: "educationlevels",
              title: this.$t("PLACEHOLDERS.educationlevels"),
              route: "/educationlevels/all",
              hasPermission: this.$can("educationlevels index", "educationlevels"),
            },
          ],
        },
      ],

      sideNavbarList_users: [
        {
          key: "users_control",
          title: this.$t("PLACEHOLDERS.manage_users"),
          icon: require("@/assets/media/icons/ui_icons/clients.svg"),
          hasPermission: this.$can("users index", "users"),
          children: [
            {
              key: "users",
              title: this.$t("PLACEHOLDERS.manage_all_users"),
              route: "/clients/all",
              hasPermission: this.$can("users index", "users"),
            },
          ],
        },
      ],

      sideNavbarList: [
        {
          key: "appContent",
          title: this.$t("SIDENAV.AppContent.title"),
          icon: require("@/assets/media/icons/ui_icons/book_mark.svg"),
          children: [
            // {
            //   key: "contact-messages",
            //   title: this.$t("SIDENAV.ContactMessages.title"),
            //   route: "/contact-messages/all",
            //   hasPermission: this.$can("contacts index", "contacts"),
            // },
            {
              key: "contact",
              title: this.$t("PLACEHOLDERS.contact_admins"),
              route: "/contact_settings",
              hasPermission: this.$can("settings create", "settings"),
            },
            {
              key: "AboutUs",
              title: this.$t("TITLES.aboutUs"),
              route: "/app-content/about-us",
              hasPermission: this.$can("settings create", "settings"),
            },
            {
              key: "termsAndConditions",
              title: this.$t("SIDENAV.AppContent.termsAndConditions"),
              route: "/app-content/terms",
              hasPermission: this.$can("settings create", "settings"),
            },
            {
              key: "privacyPolicy",
              title: this.$t("SIDENAV.AppContent.privacyPolicy"),
              route: "/app-content/policy",
              hasPermission: this.$can("settings create", "settings"),
            },
            {
              key: "delete-account",
              title: this.$t("PLACEHOLDERS.how_to_delete_account"),
              route: "/app-content/delete-account",
              hasPermission: this.$can("settings create", "settings"),
            },
          ],
        },
      ],
      // Start:: Modal Controlling Data
      logoutConfirmationModalIsOpen: false,
      // End:: Modal Controlling Data
    };
  },

  methods: {
    // Start:: Vuex Auth Actions
    ...mapActions({
      logout: "AuthenticationModule/logout",
    }),
    // End:: Vuex Auth Actions
    handleClick() {
      this.open = !this.open;
    },
    closeMenu() {
      this.open = false;
    },

    handleClickOrder() {
      this.openOrder = !this.openOrder;
    },
    closeMenuOrder() {
      this.openOrder = false;
    },
    handleClickcities() {
      this.openCities = !this.openCities;
    },
    closeMenuCities() {
      this.openCities = false;
    },
    // Start:: Controle Open Tabs
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.extractSideNavItemsKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    // End:: Controle Open Tabs
  },

  created() {},
};
</script>
