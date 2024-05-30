import { computed, defineComponent, ref, onMounted } from "vue";
import CustomInput from "../Input";
import CustomButton from "../Button";
import CustomLink from "../Link";
import { useUserStore } from "~/store/userStore";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const otpLength = 6;
    const otp = ref(new Array(otpLength).fill(""));

    const allOtpFilled = computed(() => {
      return otp.value.every((digit) => digit !== "");
    });

    const handleSubmit = async () => {
      const otpCode = otp.value.join("");
      try {
        const response = await $fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userStore.email,
            password: userStore.password,
          }),
        });

        router.push("/success");
      } catch (error) {
        alert("Login failed");
        console.error("Error:", error);
      }
    };

    const focusNextInput = (event: Event, index: number) => {
      const input = event.target as HTMLInputElement;
      if (input.value.length === 1 && index < otpLength - 1) {
        const nextInput = document.getElementById(
          `otp-input-${index + 1}`
        ) as HTMLInputElement;
        nextInput?.focus();
      }
    };

    const focusPreviousInput = (event: KeyboardEvent, index: number) => {
      if (event.key === "Backspace" && index > 0 && otp.value[index] === "") {
        const prevInput = document.getElementById(
          `otp-input-${index - 1}`
        ) as HTMLInputElement;
        prevInput?.focus();
      }
    };

    onMounted(() => {
      if (!userStore.email) {
        router.push("/signup");
      }
    });

    const onChangeEmailClick = () => {
      userStore.setEmail("");
      router.push("/signup");
    };

    return () => (
      <form
        class="w-[477px] flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1 class="text-left w-full font-montserrat text-form-title font-bold">
          Enter OTP
        </h1>
        <p class="w-full mt-[10px] text-left font-[400] font-montserrat text-form-otp-description color-form-otp-description">
          Sent otp on
          <span>&nbsp;</span>
          <CustomLink
            href={`mailto:${userStore.email}`}
            text={userStore.email}
          ></CustomLink>
        </p>
        <CustomLink
          text="Change email"
          class="font-[700] text-text text-left w-full"
          onClick={onChangeEmailClick}
        ></CustomLink>
        <div class="flex justify-between mt-[25px] w-full ml-[-3px] mr-[-3px]">
          {otp.value.map((_, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              placeholder="-"
              type="text"
              class="w-inputDigit h-inputDigit text-center border-2 rounded-[10px] border-opacity-50 border-input-bg bg-opacity-10 bg-input-bg "
              maxlength="1"
              value={otp.value[index]}
              onInput={(e: Event) => {
                const input = e.target as HTMLInputElement;
                otp.value[index] = input.value;
                focusNextInput(e, index);
              }}
              onKeydown={(e: KeyboardEvent) => focusPreviousInput(e, index)}
            />
          ))}
        </div>
        <CustomButton
          class="mt-[24px]"
          text="SUBMIT"
          type="submit"
          disabled={!allOtpFilled.value}
        ></CustomButton>
      </form>
    );
  },
});
