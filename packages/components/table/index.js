import zTable from "./index.vue";
zTable.install = (app) => {
  app.component(zTable.name, zTable);
};
export default zTable;
