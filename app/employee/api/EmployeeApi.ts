import { getAxios } from "@config/axios-config";

class EmployeeApi {
  async getAllEmployers({ ...params }) {
    try {
      const response: any = await getAxios({
        url:
          `/employers?` +
          (params.limit ? `&limit=${params.limit}` : "") +
          (params.page ? `&page=${params.page}` : "") +
          (params.category ? `&category=${params.category}` : "") +
          (params.sortBy ? `&sortBy=${params.sortBy}` : "") +
          (params.search ? `&search=${params.search}` : "") +
          (params.active ? `&active=${params.active}` : "") +
          (params.filters ? `&${params.filters}` : ""),
        method: "get",
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async getEmployeeById({ ...params }) {
    try {
      const response: any = await getAxios({
        url: `/employers/${params.id}`,
        method: "GET",
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async createOne(params: FormData) {
    const response: any = await getAxios({
      url: `/employers`,
      data: params,
      method: "POST",
    });
    console.log(response);
    if (response) return response;
    else return false;
  }

  async updateOne(params: FormData) {
    const response: any = await getAxios({
      url: `/employers/${params.get("id")}`,
      data: params,
      method: "PATCH",
    });
    console.log(response);
    if (response) return response;
    else return false;
  }

  async updateEmployeeStatus({ ...params }) {
    const data = {
      is_active: params.is_active,
    };
    const response: any = await getAxios({
      url: `/employers/${params.id}/status`,
      data: data,
      method: "PATCH",
    });
    console.log(response);
    if (response) return response;
    else return false;
  }

  async deleteEmployeeById(id: number) {
    // const data = {
    //     is_active: params.is_active,
    // }
    const response: any = await getAxios({
      url: `/employers/${id}/`,
      method: "DELETE",
    });
    console.log(response);
    if (response) return response;
    else return false;
  }
}

const EmployeeApiInstance = new EmployeeApi();
export { EmployeeApiInstance, EmployeeApi };
