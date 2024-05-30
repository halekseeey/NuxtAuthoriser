import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const message = ref("Welcome to Nuxt 3 with TypeScript and TSX!");
    const counter = ref(0);

    const incrementCounter = () => {
      counter.value++;
    };

    return () => (
      <div>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </div>
    );
  },
});
