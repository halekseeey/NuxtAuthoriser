import { PropType, h, defineComponent } from "vue";
import styles from "./style.module.css";

export default defineComponent({
  props: {
    imageName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    formComponent: {
      type: Object as PropType<typeof defineComponent>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div class="flex min-h-screen">
        <div class="flex-1 flex items-center justify-center">
          {h(props.formComponent)}
        </div>
        <div class={`flex-1 ${styles.rightBlock}`}>
          <div>
            <img src="/Ellipse2.svg" alt="Ellipse" class={styles.ellipse} />
            <img
              src="/Ellipse1.svg"
              alt="Ellipse"
              class={styles.ellipseInner}
            />
            <img src={props.imageName} class={styles.picture} />
          </div>
          <div class={styles.label}>
            <p class={styles.title}>{props.title}</p>
            <p class={styles.description}>{props.description}</p>
          </div>
        </div>
      </div>
    );
  },
});
