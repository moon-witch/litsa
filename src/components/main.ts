import type { App } from 'vue';
import { HelloWorld, BasicButton } from "@/components";

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
    app.component('MyButton', BasicButton);
  }
};

export { HelloWorld, BasicButton };