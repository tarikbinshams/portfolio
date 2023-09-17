import { EmployeeApiInstance } from "../api/EmployeeApi";

class EmployeeService {
  async getAllEmployee({ ...params }) {
    const results = await EmployeeApiInstance.getAllEmployers(params);
    return results;
  }

  async getEmployeeById({ ...params }) {
    return await EmployeeApiInstance.getEmployeeById(params);
  }

  async createNewEmployee(params: FormData) {
    const results = await EmployeeApiInstance.createOne(params);
    return results;
  }

  async updateEmployee(params: FormData) {
    return await EmployeeApiInstance.updateOne(params);
  }

  async updateEmployeeStatus({ ...params }) {
    return await EmployeeApiInstance.updateEmployeeStatus(params);
  }

  async deleteEmployeeById(id: number) {
    return await EmployeeApiInstance.deleteEmployeeById(id);
  }
}

const EmployeeServiceInstance = new EmployeeService();
export { EmployeeService, EmployeeServiceInstance };
