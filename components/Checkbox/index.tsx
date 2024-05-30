// Checkbox.tsx
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    checked: Boolean,
    onUpdateChecked: Function,
  },
  setup(props, { emit, slots }) {
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      emit("update:checked", target.checked);
    };

    return () => (
      <div class="flex items-start">
        <input
          type="checkbox"
          class="h-[20px] w-[20px] border-input-bg border-2 rounded focus:ring-indigo-500"
          checked={props.checked}
          onChange={handleChange}
        />
        <label
          for="remember_me"
          class="ml-[10px] font-montserrat font-[400] text-form-notification color-form-notification"
        >
          {slots.default && slots.default()}
        </label>
      </div>
    );
  },
});
