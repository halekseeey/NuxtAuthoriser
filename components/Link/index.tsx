import { PropType, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    path: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
    },
    onClick: {
      type: Function as PropType<(event: Event) => void>,
      required: false,
    },
  },
  setup(props) {
    const router = useRouter();

    const handleClick = () => {
      router.push(props.path);
    };

    return () => (
      <a
        class="text-input-bg font-montserrat "
        href={props.href}
        onClick={props.onClick ? props.onClick : handleClick}
      >
        {props.text}
      </a>
    );
  },
});
