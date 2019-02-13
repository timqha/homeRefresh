
import { observable, computed, action } from 'mobx';

class AuthStore {
  @observable email = "email";

  @action setEmail(email) {
    this.email = email;
  }

  @action clearStore() {
    this.email = "";
  }
}

const authStore = new AuthStore();

export default authStore;