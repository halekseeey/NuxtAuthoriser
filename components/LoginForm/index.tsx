import { computed, defineComponent, ref } from "vue";
import CustomInput from "../Input";
import CustomButton from "../Button";
import CustomLink from "../Link";
import { useUserStore } from "~/store/userStore";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const email = ref(userStore.email);
    const password = ref("");

    const handleSubmit = async () => {
      try {
        const response = await $fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email.value,
            password: password.value,
          }),
        });

        if (response) {
          alert("Login successful");
          userStore.setEmail(email.value);
          router.push("/success");
        }
      } catch (error) {
        alert("Login failed");
        console.error("Error:", error);
      }
    };

    const allFieldsFilled = computed(() => {
      return email.value !== "" && password.value !== "";
    });

    return () => (
      <form
        class=" w-[477px] flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1 class="text-left w-full font-montserrat text-form-title font-bold ">
          Login to your Account
        </h1>
        <span class="flex items-center w-full mt-[25px] mb-[25px]">
          <img
            src="Line.svg"
            alt=""
            class="w-auto h-auto color-form-description"
          />
          <p class="w-full text-center font-montserrat text-form-description color-form-description">
            with email
          </p>
          <img
            src="Line.svg"
            alt=""
            class="w-auto h-auto color-form-description"
          />
        </span>
        <div class="space-y-[10px]">
          <CustomInput
            modelValue={email.value}
            placeholder="Email"
            type="Email"
            icon="/Email.svg"
            onUpdate:modelValue={(value: string) => (email.value = value)}
          />
          <CustomInput
            modelValue={password.value}
            placeholder="Password"
            type="password"
            icon="/Security.svg"
            onUpdate:modelValue={(value: string) => (password.value = value)}
          />
        </div>

        <CustomButton
          class="mt-[25px] mb-[20px]"
          disabled={!allFieldsFilled.value}
          text="LOG IN"
        ></CustomButton>
        <div class="flex flex-row">
          <p class="font-montserrat font-[500] text-form-notification color-form-notification">
            Don't have an account?
          </p>

          <span>&nbsp;</span>
          <CustomLink
            text="Create an account"
            path="/signup"
            class="font-[700] text-text"
          ></CustomLink>
        </div>
      </form>
    );
  },
});
