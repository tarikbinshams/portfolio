import { axiosInstance, getAxios } from '@config/axios-config';
import { refreshToken } from "@helpers/authHelper";

class AuthApi {
    async login({ ...params }) {
        const response: any = await getAxios({
            url: `/auth/login`,
            data: JSON.stringify({
                email: params.email,
                password: params.password,
            }),
            method: "POST",
        });
        console.log(response);
        if (response) return response;
        else return false;
    }

    async changePassword({ ...params }) {
        const data = {
            email: params.email,
            password: params.password,
            new_password: params.new_password,
        }
        const response = await getAxios({
            url: `/user/change-password`,
            method: 'PATCH',
            data: data,
        });
        if (response) {
            return response;
        } else {
            return false;
        }
    }

    async getNewToken({ ...params }) {
        const data = { refresh_token: refreshToken() }
        try {
            const response = await getAxios({
                url: process.env.FRONTEND_API_LOCAL_URL + `/api/auth/refresh-token`,
                method: 'post',
                data: data,
            });
            if (response) {
                localStorage.setItem("logged_in_info", JSON.stringify(response.data.data));
                return response;
            }
        } catch (err: any) {
            console.log(err);
            return false;
        }
    }

    async forgotPassword({ ...params }) {
        console.log(params)
        const data = {
            email: params.email
        }
        const response = await getAxios({
            url: `/auth/forgot-password`,
            method: 'POST',
            data: data
        });
        console.log(response);
        if (response) {
            return response;
        } else {
            return false;
        }
    }

    async setNewPassword({ ...params }) {
        console.log(params)
        const data = {
            email: params.email,
            token: params.token,
            password: params.password
        }
        console.log(data)
        const response = await getAxios({
            url: `/auth/reset-password`,
            method: 'POST',
            data: data
        });
        console.log(response);
        if (response) {
            return response;
        } else {
            return false;
        }
    }
}

const AuthApiInstance = new AuthApi();
export { AuthApiInstance, AuthApi };