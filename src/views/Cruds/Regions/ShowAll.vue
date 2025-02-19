<template>
  <div class="show_all_content_wrapper">
    <!-- Start:: Main Section -->
    <main>
      <!--  =========== Start:: Filter Form =========== -->
      <div
        class="filter_content_wrapper"
        :class="{ active: filterFormIsActive }"
      >
        <button
          class="filter_toggler"
          @click="filterFormIsActive = !filterFormIsActive"
        >
          <i class="fal fa-times"></i>
        </button>
        <div class="filter_title_wrapper">
          <h5>{{ $t("TITLES.searchBy") }}</h5>
        </div>

        <div class="filter_form_wrapper">
          <form @submit.prevent="submitFilterForm">
            <div class="row justify-content-center align-items-center w-100">
              <!-- Start:: Name Input -->
              <base-input
                col="4"
                type="text"
                :placeholder="$t('PLACEHOLDERS.name')"
                v-model.trim="filterOptions.name"
              />
              <!-- End:: Name Input -->

              <!-- Start:: Status Input -->
              <base-select-input
                col="4"
                :optionsList="activeStatuses"
                :placeholder="$t('PLACEHOLDERS.status')"
                v-model="filterOptions.is_active"
              />
              <!-- End:: Status Input -->

              <base-picker-input
                col="4"
                type="date"
                :placeholder="$t('PLACEHOLDERS.startDate')"
                v-model.trim="filterOptions.from_date"
              />
              <!-- End:: Start Date Input -->

              <!-- Start:: End Date Input -->
              <base-picker-input
                col="4"
                type="date"
                :placeholder="$t('PLACEHOLDERS.endDate')"
                v-model.trim="filterOptions.to_date"
              />
            </div>

            <div class="btns_wrapper">
              <button class="submit_btn" :disabled="isWaitingRequest">
                <i class="fal fa-search"></i>
              </button>
              <button
                class="reset_btn"
                type="button"
                :disabled="isWaitingRequest"
                @click="resetFilter"
              >
                <i class="fal fa-redo"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <!--  =========== End:: Filter Form =========== -->

      <!--  =========== Start:: Table Title =========== -->
      <div class="table_title_wrapper">
        <div class="title_text_wrapper">
          <h5>{{ $t("PLACEHOLDERS.manage_regions") }}</h5>
          <button
            v-if="!filterFormIsActive"
            class="filter_toggler"
            @click.stop="filterFormIsActive = !filterFormIsActive"
          >
            <i class="fal fa-search"></i>
          </button>
        </div>

        <div class="title_route_wrapper" v-if="$can('areas create', 'areas')">
          <router-link to="/areas/create">
            {{ $t("PLACEHOLDERS.add_new_region") }}
          </router-link>
        </div>
      </div>
      <!--  =========== End:: Table Title =========== -->

      <!--  =========== Start:: Data Table =========== -->
      <v-data-table
        class="thumb"
        :loading="loading"
        :loading-text="$t('TABLES.loadingData')"
        :search="searchValue"
        :headers="tableHeaders"
        :items="tableRows"
        item-class="ltr"
        :items-per-page="paginations.items_per_page"
        hide-default-footer
      >
        <!-- Start:: No Data State -->
        <template v-slot:no-data>
          {{ $t("TABLES.noData") }}
        </template>
        <!-- Start:: No Data State -->

        <!-- Start:: Activation -->
        <template v-slot:[`item.is_active`]="{ item }">
          <!-- v-if="permissions.activate" -->
          <div
            class="activation"
            dir="ltr"
            style="z-index: 1"
            v-if="$can('areas activate', 'areas')"
          >
            <v-switch
              class="mt-2"
              color="success"
              v-model="item.is_active"
              hide-details
              @change="changeActivationStatus(item)"
            ></v-switch>
          </div>
        </template>
        <!-- End:: Activation -->

        <!-- Start:: Actions -->
        <template v-slot:[`item.actiosn`]="{ item }">
          <div class="actions">
            <a-tooltip placement="bottom" v-if="$can('areas delete', 'areas')">
              <template slot="title">
                <span>{{ $t("BUTTONS.delete") }}</span>
              </template>
              <button class="btn_delete" @click="selectDeleteItem(item)">
                <i class="fal fa-trash-alt"></i>
              </button>
            </a-tooltip>
            <a-tooltip placement="bottom" v-if="$can('areas edit', 'areas')">
              <template slot="title">
                <span>{{ $t("BUTTONS.edit") }}</span>
              </template>

              <button class="btn_edit" @click="editItem(item)">
                <i class="fal fa-edit"></i>
              </button>
            </a-tooltip>
            <a-tooltip placement="bottom" v-if="$can('areas show', 'areas')">
              <template slot="title">
                <span>{{ $t("BUTTONS.show") }}</span>
              </template>
              <button class="btn_show" @click="showItem(item)">
                <i class="fal fa-eye"></i>
              </button>
            </a-tooltip>
            <a-tooltip
              placement="bottom"
              v-if="
                $can('areas edit', 'areas') || $can('areas create', 'areas')
              "
            >
              <template slot="title">
                <span>{{ $t("BUTTONS.working_hours") }}</span>
              </template>
              <button class="btn_show" @click="selectShowItemHours(item)">
                <i class="fal fa-clock"></i>
              </button>
            </a-tooltip>

            <template v-else>
              <i
                class="fal fa-lock-alt fs-5 blue-grey--text text--darken-1"
              ></i>
            </template>
          </div>
        </template>
        <!-- End:: Actions -->

        <!-- ======================== Start:: Dialogs ======================== -->
        <template v-slot:top>
          <!-- Start:: Image Modal -->
          <image-modal
            v-if="dialogImage"
            :modalIsOpen="dialogImage"
            :modalImage="selectedItemImage"
            @toggleModal="dialogImage = !dialogImage"
          />
          <!-- End:: Image Modal -->

          <!-- Start:: Description Modal -->

          <description-modal
            v-if="dialogDescription"
            :modalIsOpen="dialogDescription"
            :modalDesc="selectedDescriptionTextToShow"
            @toggleModal="dialogDescription = !dialogDescription"
          />
          <!-- End:: Description Modal -->

          <!-- Start:: Delete Modal -->
          <v-dialog v-model="dialogDelete">
            <v-card>
              <v-card-title class="text-h5 justify-center" v-if="itemToDelete">
                {{
                  $t("TITLES.DeleteConfirmingMessage", {
                    name: itemToDelete.name,
                  })
                }}
              </v-card-title>
              <v-card-actions>
                <v-btn class="modal_confirm_btn" @click="confirmDeleteItem">{{
                  $t("BUTTONS.ok")
                }}</v-btn>

                <v-btn class="modal_cancel_btn" @click="dialogDelete = false">{{
                  $t("BUTTONS.cancel")
                }}</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- End:: Delete Modal -->

          <!-- Start:: Working Hours Modal -->
          <v-dialog v-model="dialogWorkingHours">
            <v-card>
              <div class="w-100">
                <button
                  class="filter_toggler"
                  @click="dialogWorkingHours = false"
                >
                  <h6><i class="fal fa-times text-danger"></i></h6>
                </button>
              </div>
              <v-card-title class="text-h5 justify-center">
                {{
                  $t("TITLES.WorkingHoursMessage", {
                    name: workingHoursItem?.name,
                  })
                }}
              </v-card-title>
              <div class="w-100">
                <div v-for="day in days" :key="day.id" class="d-flex">
                  <label class="mt-5" style="width: 90px">{{
                    day?.name
                  }}</label>
                  <base-select-input-working-hours
                    col="6"
                    :optionsList="hours"
                    :multiple="true"
                    v-model="selectedHours[day.id]"
                  />
                  <v-card-actions>
                    <v-btn
                      class="btn modal_btn modal_btn_save mx-3"
                      @click="saveWorkingHours(day.id)"
                    >
                      {{ $t("BUTTONS.save") }}
                    </v-btn>
                    <v-btn
                      v-if="day.id != 1"
                      class="btn modal_btn"
                      @click="copyWorkingHours(day.id, day.id - 1)"
                    >
                      {{ $t("BUTTONS.copy_prev") }}
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </v-dialog>
          <!-- End:: Working Hours Modal -->
        </template>
        <!-- ======================== End:: Dialogs ======================== -->
      </v-data-table>
      <!--  =========== End:: Data Table =========== -->
    </main>
    <!-- End:: Main Section -->

    <!-- Start:: Pagination -->
    <template>
      <div class="pagination_container text-center mt-3 mb-0">
        <v-pagination
          class="py-0"
          square
          v-model="paginations.current_page"
          :length="paginations.last_page"
          :total-visible="6"
          @input="updateRouterQueryParam($event)"
          :prev-icon="
            getAppLocale == 'ar' ? 'fal fa-angle-right' : 'fal fa-angle-left'
          "
          :next-icon="
            getAppLocale == 'ar' ? 'fal fa-angle-left' : 'fal fa-angle-right'
          "
        />
      </div>
    </template>
    <!-- End:: Pagination -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AllCities",

  computed: {
    ...mapGetters({
      getAppLocale: "AppLangModule/getAppLocale",
    }),

    activeStatuses() {
      return [
        {
          id: 1,
          name: this.$t("STATUS.active"),
          value: 1,
        },
        {
          id: 2,
          name: this.$t("STATUS.notActive"),
          value: 0,
        },
      ];
    },
  },

  data() {
    return {
      // Start:: Loading Data
      loading: false,
      isWaitingRequest: false,
      // End:: Loading Data

      // Start:: Filter Data
      filterFormIsActive: false,
      filterOptions: {
        name: null,
        area_id: null,
        is_active: null,
        from_date: null,
        to_date: null,
      },
      // End:: Filter Data

      // Start:: Table Data
      searchValue: "",
      tableHeaders: [
        {
          text: this.$t("TABLES.Admins.serialNumber"),
          value: "id",
          align: "center",
          sortable: false,
        },
        {
          text: this.$t("PLACEHOLDERS.name"),
          value: "name",
          sortable: false,
          align: "center",
        },
        {
          text: this.$t("PLACEHOLDERS.status"),
          value: "is_active",
          sortable: false,
          align: "center",
        },
        {
          text: this.$t("PLACEHOLDERS.created_at"),
          value: "created_at",
          sortable: false,
          align: "center",
        },
        {
          text: this.$t("TABLES.Admins.actions"),
          value: "actiosn",
          sortable: false,
          align: "center",
        },
      ],
      tableRows: [],
      areas: [],
      // End:: Table Data

      // Start:: Dialogs Control Data
      dialogImage: false,
      selectedItemImage: null,
      dialogDescription: false,
      selectedDescriptionTextToShow: "",
      dialogDelete: false,
      itemToDelete: null,
      workingHoursItem: null,
      dialogWorkingHours: false,
      itemToShow: null,
      // End:: Dialogs Control Data

      // Start:: Pagination Data
      paginations: {
        current_page: 1,
        last_page: 1,
        items_per_page: 6,
      },
      // End:: Pagination Data

      regions: [],
      cites: [],
      selectedHours: [],
      days: [],
      hours: [],
    };
  },

  watch: {
    // Start:: Page Query Param Watcher To Get Page Data Based On It's Change
    ["$route.query.page"]() {
      this.paginations.current_page = +this.$route.query.page;
      this.setTableRows();
    },
    // End:: Page Query Param Watcher To Get Page Data Based On It's Change
  },

  methods: {
    async getAreas() {
      try {
        let res = await this.$axios({
          method: "GET",
          url: `areas`,
        });
        this.areas = res.data.data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async getDays() {
      try {
        let res = await this.$axios({
          method: "GET",
          url: `days/allDay`,
        });
        this.days = res.data.data.days;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async getHours() {
      try {
        let res = await this.$axios({
          method: "GET",
          url: `area/allTimesAvilable`,
        });
        this.hours = res.data.times.map((time, index) => ({
          id: index + 1,
          name: time,
        }));
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    // Start:: Handel Filter
    async submitFilterForm() {
      if (this.$route.query.page !== "1") {
        await this.$router.push({ path: "/areas/all", query: { page: 1 } });
      }
      this.setTableRows();
    },
    async resetFilter() {
      this.filterOptions.name = null;
      this.filterOptions.area_id = null;
      this.filterOptions.is_active = null;
      this.filterOptions.from_date = null;
      this.filterOptions.to_date = null;

      if (this.$route.query.page !== "1") {
        await this.$router.push({ path: "/areas/all", query: { page: 1 } });
      }
      this.setTableRows();
    },
    // End:: Handel Filter

    // Start:: Set Table Rows
    updateRouterQueryParam(pagenationValue) {
      this.$router.push({
        query: {
          ...this.$route.query,
          page: pagenationValue,
        },
      });

      // Scroll To Screen's Top After Get Cities
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    async setTableRows() {
      this.loading = true;
      try {
        let res = await this.$axios({
          method: "GET",
          url: "areas",
          params: {
            page: this.paginations.current_page,
            name: this.filterOptions.name,
            is_active: this.filterOptions.is_active?.value,
            "created_at[0]": this.filterOptions.from_date,
            "created_at[1]": this.filterOptions.to_date,
          },
        });
        this.loading = false;
        this.tableRows = res.data.data;
        // console.log(res.data.data.items?.id.city.name);
        this.paginations.last_page = res.data.meta.last_page;
        this.paginations.items_per_page = res.data.meta.per_page;
      } catch (error) {
        this.loading = false;
        console.log(error.response.data.message);
      }
    },
    // End:: Set Table Rows
    showReplayModal(replay) {
      this.dialogDescription = true;
      this.selectedDescriptionTextToShow = replay;
    },

    // Start:: Control Modals
    showImageModal(image) {
      this.dialogImage = true;
      this.selectedItemImage = image;
    },
    // End:: Control Modals
    // Start:: Change Activation Status
    async changeActivationStatus(item) {
      const REQUEST_DATA = new FormData();
      // Start:: Append Request Data
      // REQUEST_DATA.append("_method", "PUT");
      try {
        await this.$axios({
          method: "POST",
          url: `areas/activate/${item.id}`,
          data: REQUEST_DATA,
        });
        this.setTableRows();
        this.$message.success(this.$t("MESSAGES.changeActivation"));
      } catch (error) {
        this.$message.error(error.response.data.message);
      }
    },
    // End:: Change Activation Status

    // ==================== Start:: Crud ====================
    // ===== Start:: End
    editItem(item) {
      this.$router.push({ path: `/areas/edit/${item.id}` });
    },
    showItem(item) {
      this.$router.push({ path: `/areas/show/${item.id}` });
    },
    // ===== End:: End

    // ===== Start:: Delete
    selectDeleteItem(item) {
      this.dialogDelete = true;
      this.itemToDelete = item;
    },

    selectShowItemHours(item) {
      this.dialogWorkingHours = true;
      this.workingHoursItem = item;
      this.initializeSelectedHours(item);
    },

    initializeSelectedHours(item) {
      if (item && item.days && this.hours) {
        this.selectedHours = [];

        item.days.forEach((day) => {
          const dayId = day.id;
          console.log("this.selectedHours[dayId]0", this.selectedHours[dayId]);
          if (day.time && day.time.length > 0) {
            console.log(
              "this.selectedHours[dayId]2",
              this.selectedHours[dayId]
            );
            this.selectedHours[dayId] = [];
            day.time.forEach((time) => {
              // Find the corresponding time index from the this.hours list
              const matchedTime = this.hours.find(
                (availableTime) => availableTime.name == time
              );
              if (matchedTime) {
                this.selectedHours[dayId].push({
                  id: matchedTime.id,
                  name: matchedTime.name,
                });
              }
            });
          }
        });
      }
    },
    copyWorkingHours(item_id, prevItem_id) {
      this.selectedHours[item_id] = this.selectedHours[prevItem_id];
      this.saveWorkingHours(item_id);
    },
    async confirmDeleteItem() {
      try {
        await this.$axios({
          method: "DELETE",
          url: `areas/${this.itemToDelete.id}`,
        });
        this.dialogDelete = false;
        this.setTableRows();
        this.$message.success(this.$t("MESSAGES.deletedSuccessfully"));
      } catch (error) {
        this.dialogDelete = false;
        this.$message.error(error.response.data.message);
      }
    },
    // ===== End:: Delete
    async saveWorkingHours(dayId) {
      const formData = new FormData();
      // if (!this.workingHoursItem) return;

      const timesForDay = this.selectedHours[dayId];
      // if (timesForDay && timesForDay.length > 0) {
      formData.append("area_id", this.workingHoursItem.id);
      formData.append("day_id", dayId);

      timesForDay.forEach((time, index) => {
        formData.append(`time[${index}]`, time.name);
      });

      try {
        await this.$axios({
          method: "POST",
          url: `area/storeTmes`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        this.dialogWorkingHours = false;
        this.setTableRows();
        this.$message.success(this.$t("MESSAGES.savedSuccessfully"));
      } catch (error) {
        this.dialogWorkingHours = false;
        this.$message.error(error.response.data.message);
      }
      // }
    },

    // ==================== End:: Crud ====================
  },
  created() {
    // Start:: Fire Methods
    window.addEventListener("click", () => {
      this.filterFormIsActive = false;
    });
    if (this.$route.query.page) {
      this.paginations.current_page = +this.$route.query.page;
    }
    this.getDays();
    this.getHours();
    this.setTableRows();
    // End:: Fire Methods
  },
};
</script>
<style>
.modal_btn {
  font-size: 12px !important;
  padding: 0 8px !important;
  color: #3fa9f5 !important;
}
.modal_btn_save {
  border-color: #3fa9f5 !important;
}
</style>
