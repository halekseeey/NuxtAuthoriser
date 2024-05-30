import { defineComponent, ref } from "vue";
import LoginForm from "~/components/LoginForm";
import New from "~/components/new";
import PageTemplate from "~/components/PageTemplate";

export default defineComponent({
  setup() {
    return () => <p>вы успешно залогированы</p>;
  },
});
