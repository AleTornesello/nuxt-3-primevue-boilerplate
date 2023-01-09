import { defineStore } from "pinia";

export interface TestStoreStructure {
  data: string;
}

export const useTestStore = defineStore("testStore", {
  state: (): TestStoreStructure => ({
    data: "Store data test",
  }),
  getters: {
    getData: (state) => state.data,
  },
  actions: {
    updateData(data: string) {
      this.data = data;
    },
  },
});
