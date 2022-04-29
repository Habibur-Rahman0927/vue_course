import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);
app.component(BaseCard);
app.component(BaseButton);
app.use(router);
app.use(store);
app.mount("#app");
