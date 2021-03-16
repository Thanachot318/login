<template>
  <div class="about">
    <b-container>
      <b-card
        border-variant="info"
        header="Login"
        header-bg-variant="info"
        header-text-variant="white"
        align="center"
      >
        <b-button @click="login" variant="primary">Login by Google</b-button>
        <b-button @click="logout" variant="danger" v-b-modal.modal-1
          >Logout</b-button
        >
        <b-modal id="modal-1" title="Logout">
          <p class="my-4">Success !!!</p>
        </b-modal>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase/app";
export const auth = firebase.auth();
export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          const token = credential.accessToken;
          console.log(token);
          const user = result.user;
          console.log("User = " + user);
          this.$router.replace("/success");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign-out successful");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>