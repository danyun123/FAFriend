import { defineStore } from "pinia/dist/pinia";

const useHomeState = defineStore("home",{
	state: () => ({
		count: 100
	}),
	actions: {

	}
})

export default useHomeState;