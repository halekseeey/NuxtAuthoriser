import { computed, defineComponent, ref } from "vue";
import CustomInput from "../Input";
import CustomButton from "../Button";
import CustomLink from "../Link";
import CustomCheckbox from "../Checkbox";
import ConfirmationModal from "../ConfirmationModal";
import { useRouter } from "vue-router";
import { useUserStore } from "~/store/userStore";

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const email = ref(userStore.email);
    const password = ref("");
    const confirmPassword = ref("");
    const name = ref(userStore.userName);
    const checkboxChecked = ref(false);
    const showModal = ref(false);
    const router = useRouter();

    const isClear = (): boolean => {
      return (
        email.value === "" &&
        password.value === "" &&
        confirmPassword.value === "" &&
        name.value === "" &&
        !checkboxChecked.value
      );
    };

    const allFieldsFilled = computed(() => {
      return (
        email.value !== "" &&
        password.value !== "" &&
        confirmPassword.value !== "" &&
        name.value !== "" &&
        checkboxChecked.value
      );
    });

    const onConfirmClick = () => {
      userStore.setEmail("");
      userStore.setUserName("");
      userStore.setPassword("");
      router.push("/");
    };

    const checkData = () => {
      if (!isClear()) {
        showModal.value = true;
      } else {
        router.push("/");
      }
    };

    const handleSubmit = () => {
      if (password.value !== confirmPassword.value) {
        alert(`Пароли не совпадают`);
        return;
      }

      userStore.setEmail(email.value);
      userStore.setUserName(name.value);
      userStore.setPassword(password.value);
      userStore.changeVerification();
      router.push("/otp");
    };

    return () => (
      <>
        <form
          class=" w-[477px] flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h1 class="text-left w-full font-montserrat text-form-title font-bold ">
            Create your Account
          </h1>

          <p class="w-full mt-[10px] mb-[20px] text-left font-[400] font-montserrat text-form-description color-form-description">
            Unlock all Features!
          </p>

          <div class="space-y-[10px]">
            <CustomInput
              modelValue={name.value}
              placeholder="Username"
              type="Text"
              icon="/Person.svg"
              onUpdate:modelValue={(value: string) => (name.value = value)}
            />
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
            <CustomInput
              modelValue={confirmPassword.value}
              placeholder="Confirm Password"
              type="password"
              icon="/Security.svg"
              onUpdate:modelValue={(value: string) =>
                (confirmPassword.value = value)
              }
            />
          </div>
          <CustomCheckbox
            v-model:checked={checkboxChecked.value}
            class="w-input mt-[14px]"
          >
            I agree to the
            <span>&nbsp;</span>
            <CustomLink
              class="font-[500] text-form-notification"
              text="terms and conditions"
              path=""
            ></CustomLink>
          </CustomCheckbox>

          <CustomButton
            class="mt-[29px] mb-[20px]"
            disabled={!allFieldsFilled.value}
            text="SIGN UP"
          ></CustomButton>
          <div class="flex flex-row">
            <p class="font-montserrat font-[500] text-form-notification color-form-notification">
              You have account?
            </p>
            <span>&nbsp;</span>
            <CustomLink
              class="font-[700] text-form-notification"
              text="Login now"
              path=""
              onClick={checkData}
            ></CustomLink>
          </div>
        </form>

        <ConfirmationModal
          show={showModal.value}
          onClose={() => (showModal.value = false)}
          onConfirm={onConfirmClick}
        />
      </>
    );
  },
});
