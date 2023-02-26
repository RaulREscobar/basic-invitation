import { defineStore } from 'pinia';

const userParse = JSON.parse(localStorage.getItem("user"));

export const useAuthStore = defineStore('AuthStore', {
    state: () => {
        return {
            userLogget: userParse === null ? false : true,
            uidUserLogget: userParse === null ? false : userParse.uidUserLogget,
            invitadosFamilia: userParse === null ? false : userParse.invitadosFamilia,
            familia: userParse === null ? false : userParse.familia,
            uidFamilia: userParse === null ? false : userParse.uidFamilia,
            loadingDrink: false,
            loadingConfirm: false,
            loadingLogin: false,
            overlayConfirm: false,
            overlayDrink: false,
            errorLogin: false,
            loading: true,
        }
    }
})