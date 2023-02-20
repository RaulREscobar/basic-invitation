import { defineStore } from 'pinia'

export const useAuthStore = defineStore('AuthStore', {
    state: () => {
        return {
            userLogget: false,
            uidUserLogget: null,
            invitadosFamilia: [],
            familia: null,
            uidFamilia: "",
            loadingDrink: false,
            loadingConfirm: false,
            loadingLogin: false,
            overlayConfirm: false,
            overlayDrink: false,
        }
    }
})