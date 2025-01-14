<template>
  <div class="crud_form_wrapper single_show_content_wrapper">
    <!-- Start:: Title -->
    <div class="form_title_wrapper">
      <h4>{{ $t("TITLES.showChat") }}</h4>
    </div>
    <div class="col-12 text-end">
      <v-btn @click="$router.go(-1)" style="color: #3fa9f5">
        <i class="fas fa-backward"></i>
      </v-btn>
    </div>
    <!-- End:: Title -->
    <div class="single_step_form_content_wrapper">
      <div
        v-if="data.messages && data.messages.length > 0"
        class="chat-messages"
      >
        <div
          v-for="(message, index) in data.messages"
          :key="message.id"
          class="message-item"
          :class="
            message.from_id == data.sender_id ? 'sender-item' : 'receiver-item'
          "
        >
          <div class="message-header">
            <span
              :class="
                message.from_id == data.sender_id
                  ? 'sender-name'
                  : 'receiver-name'
              "
              >{{
                message.from_id == data.sender_id
                  ? data.sender_name
                  : data.receiver_name
              }}</span
            >
            <span class="message-timestamp">{{ message.created_at }}</span>
            <button
              @click="selectBlockedUser(message.from_id)"
              style="font-size: 20px; opacity: 30%;"
              :style="!message.is_blocked ? 'opacity: 30%' : 'opacity: 100%'"
              class="text-danger mx-2"
              :disabled="!message.is_blocked"
              :title="!message.is_blocked ? $t('BUTTONS.already_blocked') : ''"
              >
              <i class="fa fa-ban"></i>
            </button>
          </div>
          <div class="message-content">
            <p>{{ message.message_text }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <h4 class="text-center mt-5 text-danger">{{ $t("TABLES.noData") }}</h4>
      </div>
    </div>
    <!-- Start:: Block Modal -->
    <v-dialog v-model="dialogBlock">
      <v-card>
        <v-card-title class="text-h5 justify-center" v-if="userToBlock">
          {{
            $t("TITLES.BlockConfirmingMessage")
          }}
        </v-card-title>
        <v-card-actions>
          <v-btn class="modal_confirm_btn" @click="confirmBlockUser">{{
            $t("BUTTONS.ok")
          }}</v-btn>

          <v-btn class="modal_cancel_btn" @click="dialogBlock = false">{{
            $t("BUTTONS.cancel")
          }}</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End:: Block Modal -->
  </div>
</template>
<script>
export default {
  name: "SingleChat",

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
      dialogBlock: false,
      userToBlock: null,
      // Start:: Data
      data: {
        sender_id: null,
        sender_name: null,
        receiver_name: null,
        messages: [],
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
          url: `chats/${this.id}`,
        });
        this.data.sender_id = res.data.data.Chat.sender_id;
        this.data.sender_name = res.data.data.Chat.sender_name;
        this.data.receiver_name = res.data.data.Chat.receiver_name;
        this.data.messages = res.data.data.Chat.messages;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    selectBlockedUser(item) {
      this.dialogBlock = true;
      this.userToBlock = item;
    },
    async confirmBlockUser() {
      try {
        await this.$axios({
          method: "POST",
          url: `clients/status/${this.userToBlock}`,
        });
        this.dialogBlock = false;
        this.getDataToShow();
        this.$message.success(this.$t("MESSAGES.blockedSuccessfully"));
      } catch (error) {
        this.dialogBlock = false;
        this.$message.error(error.response.data.message);
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
<style scoped>
.chat-messages {
  margin: 20px;
  /* max-height: 700px;
  overflow-y: auto; */
}

.message-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
}

.sender-name {
  font-weight: 600;
  color: #007bff;
}
.receiver-name {
  font-weight: 600;
  color: rgb(101, 173, 101);
}
.message-timestamp {
  color: #aaa;
  font-size: 12px;
}

.message-content {
  padding: 10px;
  border-radius: 6px;
  margin-top: 5px;
  border: 1px solid #ddd;
}

.sender-item {
  width: 55%;
}
.sender-item .message-content {
  background-color: #deecfc;
}
.receiver-item {
  width: 55%;
  margin-inline-start: 45%;
}
.receiver-item .message-content {
  background-color: rgb(225, 234, 225);
}
.receiver-item .message-header {
  flex-direction: row-reverse !important;
}
</style>
