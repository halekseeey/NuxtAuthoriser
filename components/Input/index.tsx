import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<"text" | "email" | "password">,
      default: "text",
    },
    icon: {
      type: String,
      required: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const isPasswordVisible = ref(false);
    const updateValue = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    };

    const togglePasswordVisibility = () => {
      isPasswordVisible.value = !isPasswordVisible.value;
    };

    return () => (
      <div class="relative bg-input-bg w-input h-input bg-opacity-10 border-2 rounded-[10px] border-opacity-50 border-input-bg hover:border-opacity-1 ">
        {props.icon && (
          <span class="absolute inset-y-0 left-0 pl-[10px] flex items-center pointer-events-none">
            <img src={props.icon} alt="icon" class="h-icon w-icon text-icon" />
          </span>
        )}
        <input
          type={
            props.type === "password" && isPasswordVisible.value
              ? "text"
              : props.type
          }
          value={props.modelValue}
          onInput={updateValue}
          placeholder={props.placeholder}
          class={`w-full h-full p-10 bg-inherit pl-50 pr-50 font-inter text-form-text color-black`}
        />
        {props.type === "password" && (
          <span
            class="absolute inset-y-0 right-0 pr-[17px] flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <img
              src="/Visibility.svg"
              alt="toggle visibility"
              class="h-icon w-icon text-icon"
            />
          </span>
        )}
      </div>
    );
  },
});
