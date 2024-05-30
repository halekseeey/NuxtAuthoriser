import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "~/store/userStore";
import PageTemplate from "~/components/PageTemplate";
import OtpForm from "~/components/OtpForm";

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    onMounted(() => {
      if (!userStore.isVerification) {
        router.push("/");
      }
    });

    return () => (
      <PageTemplate
        imageName="Otp.svg"
        title="It's just OTP verification."
        description="You are one step away from recovering your password."
        formComponent={OtpForm}
      ></PageTemplate>
    );
  },
});
