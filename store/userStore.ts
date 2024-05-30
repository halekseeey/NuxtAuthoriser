import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    email: "",
    isVerification: false,
    userName: "",
    password: "",
  }),
  actions: {
    setEmail(newEmail: string) {
      this.email = newEmail;
    },
    setPassword(newPassword: string) {
      this.password = newPassword;
    },
    setUserName(newUserNAme: string) {
      this.userName = newUserNAme;
    },
    changeVerification() {
      this.isVerification = !this.isVerification;
    },
  },
});
