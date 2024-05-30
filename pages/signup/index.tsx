import { defineComponent, ref } from "vue";
import SignUpForm from "~/components/SignUpForm";
import PageTemplate from "~/components/PageTemplate";

export default defineComponent({
  setup() {
    return () => (
      <PageTemplate
        imageName="SignUp.svg"
        title="Join Us!"
        description="Just go through the boring process of creating an account."
        formComponent={SignUpForm}
      ></PageTemplate>
    );
  },
});
