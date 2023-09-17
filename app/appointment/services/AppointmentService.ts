import { AppointmentApiInstance } from "../api/AppointmentApi";


class AppointmentService {
    async getAppointments({ ...params }) {
        const results = await AppointmentApiInstance.getAllAppointments(params);
        return results;
    }

    async getAppointmentById({ ...params }) {
        return await AppointmentApiInstance.getAppointmentById(params);
    }

    async createNewAppointment({ ...params }) {
        const results = await AppointmentApiInstance.createAppointment(params);
        return results;

    }

    async updateAppointment(params: FormData) {
        return await AppointmentApiInstance.updateOneAppointment(params);
    }

    async updateAppointmentStatus({ ...params }) {
        return await AppointmentApiInstance.updateAppointmentStatus(params);
    }

    async subscribe({ ...params }) {
        return await AppointmentApiInstance.createSubscription(params);
    }

    async allSubscription({...params}) {
        return await AppointmentApiInstance.getSubscriptions(params);
    }

}

const AppointmentServiceInstance = new AppointmentService()
export { AppointmentService, AppointmentServiceInstance };
