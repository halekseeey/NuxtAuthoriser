import { defineComponent, h, ref } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
    onConfirm: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div
        v-show={props.show}
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        style="z-index: 1000;"
      >
        <div class="bg-white p-4 rounded">
          <h2 class="text-lg font-bold">Are you sure?</h2>
          <p class="mb-4">
            You have unsaved changes. Do you really want to leave?
          </p>
          <div class="flex justify-end space-x-2">
            <button class="btn btn-secondary" onClick={props.onClose}>
              Cancel
            </button>
            <button class="btn btn-primary" onClick={props.onConfirm}>
              OK
            </button>
          </div>
        </div>
      </div>
    );
  },
});
