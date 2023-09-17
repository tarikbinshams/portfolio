import { getAxios } from "@config/axios-config";

class AppointmentApi {
  async getAllAppointments({ ...params }) {
    try {
      const response: any = await getAxios({
        url:
          `/appointment?` +
          (params.limit ? `&limit=${params.limit}` : "") +
          (params.page ? `&page=${params.page}` : "") +
          (params.category ? `&category=${params.category}` : "") +
          (params.sortBy ? `&sortBy=${params.sortBy}` : "") +
          (params.search ? `&search=${params.search}` : "") +
          (params.status ? `&status=${params.status}` : "") +
          (params.active ? `&active=${params.active}` : "") +
          (params.filters ? `&${params.filters}` : "") +
          (params.sort ? `&sort_by=${params.sort}` : ""),
        method: "get",
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async getAppointmentById({ ...params }) {
    try {
      const response: any = await getAxios({
        url: `/appointment/${params.id}`,
        method: "GET",
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async createAppointment({ ...params }) {
    console.log(params);
    const response: any = await getAxios({
      url: `/appointment`,
      data: params,
      method: "POST",
    });
    console.log(response);
    if (response) return response;
    else return false;
  }

  async updateOneAppointment(params: FormData) {
    const response: any = await getAxios({
      url: `/appointment/${params.get("id")}`,
      data: params,
      method: "PATCH",
    });
    console.log(response);
    if (response) return response;
    else return false;
  }

  async updateAppointmentStatus({ ...params }) {
    // const data = {
    //   updatedStatus: params,
    // };
    const response: any = await getAxios({
      url: `/appointment/${params.id}/status`,
      data: params,
      method: "PATCH",
    });
    console.log(response);
    if (response) return response;
    else return false;
  }


  async createSubscription({ ...params }) {
    console.log(params);
    const response: any = await getAxios({
      url: `/appointment/subscribe`,
      data: params,
      method: "POST",
    });
    if (response) return response;
    else return false;
  }

  async getSubscriptions({ ...params }) {
    const response: any = await getAxios({
      url: `/appointment/subscribe?` +
        (params.search ? `&search=${params.search}` : "") +
        (params.sort ? `&sort_by=${params.sort}` : "")
      ,
      method: "GET",
    });
    if (response) return response;
    else return false;
  }

}

const AppointmentApiInstance = new AppointmentApi();
export { AppointmentApiInstance, AppointmentApi };
