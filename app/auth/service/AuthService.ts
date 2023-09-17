import { login, logout } from "@helpers/authHelper";
import { AuthApiInstance } from "../api/AuthApi";


class AuthService {
    async login({ ...params }) {
        const result = await AuthApiInstance.login({ ...params });
        if (result) {
            login(result);
            return true;
        } else {
            return false;
        }
    }

    async logout() {
        logout();
    }

    async forgotPassword({ ...params }) {
        const result = await AuthApiInstance.forgotPassword({ ...params });
    }

    async setNewPassword({ ...params }) {
        const result = await AuthApiInstance.setNewPassword({ ...params });
    }


    async changePassword({ ...params }) {
        return await AuthApiInstance.changePassword(params);
    }

}

const AuthServiceInstance = new AuthService()
export { AuthServiceInstance, AuthService }
