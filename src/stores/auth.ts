
import { observable, action } from "mobx";

import { IAuthStore } from "../types";

class AuthStore implements IAuthStore {
  @observable email = "email";

  @action setEmail(email: string) {
    this.email = email;
  }

  @action clearStore() {
    this.email = "";
  }
}

const authStore = new AuthStore();

export default authStore;