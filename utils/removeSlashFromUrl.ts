import config from "@config/app-config";

export const removeDoubleSlashFromUrl = (url: string) => {
    const link: any = config.BACKEND_API_BASE_URL + url;
    //replace double / with single / after http://
    return link?.replace(/([^:]\/)\/+/g, "$1");
}

export const getFrontendUrl = (url: string) => {
    const link: any = config.FRONTEND_API_BASE_URL + url;
    //replace double / with single / after http://
    return link?.replace(/([^:]\/)\/+/g, "$1");
}

