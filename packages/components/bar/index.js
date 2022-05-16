import zBar from "./index.vue";
zBar.install = (app) => {
  app.component(zBar.name, zBar);
};
export default zBar;