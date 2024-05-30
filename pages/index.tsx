import { defineComponent, ref } from "vue";
import LoginForm from "~/components/LoginForm";
import New from "~/components/new";
import PageTemplate from "~/components/PageTemplate";

export default defineComponent({
  setup() {
    return () => (
      <PageTemplate
        imageName="Login.svg"
        title="Connect with any device."
        description="Everything you need is an internet connection."
        formComponent={LoginForm}
      ></PageTemplate>
    );
  },
});
