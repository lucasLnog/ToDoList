<template>
  <div>
    <div
      class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
    >
      <q-dialog
        v-model="isOpen"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card class="register-dialog">
          <q-card-section>
            <div
              class="col-12 text-weight-medium q-mt-md"
              v-html="'Nome da seção'"
            />
            <div class="row justify-center align-center q-mb-lg">
              <q-input
                v-model="section.name"
                label="Nome"
                type="text"
                required
                outlined
                dense
                style="width: 800px"
                @keyup.enter="saveSection"
              />
            </div>
            <div class="row justify-center align-center q-mb-lg">
              <q-card-actions>
                <q-btn
                  v-close-popup
                  label="Cancelar"
                  color="neutral-primary-medium"
                  size="md"
                  no-caps
                  unelevated
                  borderless
                  outline
                  class="cancel-button"
                  @click="closeDialog"
                >
                </q-btn>
                <q-btn
                  label="Salvar"
                  color="blue-9"
                  size="md"
                  no-caps
                  class="save-button"
                  @click="saveSection"
                >
                </q-btn>
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { v4 as uuid4 } from "uuid";

export default {
  props: {
    _isOpen: {
      type: Boolean,
      require: true
    }
  },
  watch: {
    _isOpen: {
      immediate: true,
      handler: function (open) {
        this.isOpen = open;
      },
    },
  },
  data: function () {
    return {
      section: {
        id: null,
        name: '',
        uuid: '',
        children: [],
        isEditing: false,
        isAdding: false,
      },
      isOpen: false,
    };
  },
  methods: {
    closeDialog: function () {
      this.$emit("close-dialog");
      this.section = {
        id: null,
        name: '',
        uuid: '',
        children: [],
        isEditing: false,
        isAdding: false,
      };
    },
    saveSection: function () {
      this.section.uuid = uuid4();
      this.$emit("save-section", this.section);
      this.section = {
        id: null,
        name: '',
        uuid: '',
        children: [],
        isEditing: false,
        isAdding: false,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.register-dialog {
  width: 600px;
  max-width: 80vw;
}

.save-button {
  color: black;
  font-size: 18px;
  height: 40px;
  width: 125px;
  margin: 0 15px;
  border-radius: 8px;
}

.cancel-button {
  background: white;
  color: gray;
  font-size: 18px;
  height: 40px;
  width: 125px;
  margin: 0 15px;
  border-radius: 8px;
}
</style>
