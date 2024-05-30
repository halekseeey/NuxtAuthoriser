import { defineComponent } from "vue";

export default defineComponent({
  props: {
    disabled: Boolean,
    text: String,
  },
  setup(props, { emit }) {
    const handleClick = () => {
      if (!props.disabled) {
        emit("click");
      }
    };

    return () => (
      <button
        onClick={handleClick}
        disabled={props.disabled}
        class={`w-input h-input rounded-[10px] bg-input-bg text-button text-white font-inter font-[700] ${
          props.disabled ? "bg-gray-400 cursor-not-allowed" : ""
        }`}
      >
        {props.text}
      </button>
    );
  },
});
