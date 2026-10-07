import type { CareerResponse, CareerPayload } from "./types.career";
import { api } from "../../lib/api"

export const careerApi = {
  create: async (payload: CareerPayload) => {
    const formData = new FormData();

    formData.append("fullName", payload.fullName);
    formData.append("email", payload.email);
    formData.append("phone", payload.phoneNumber);

    if (payload.portfolio) {
      formData.append("portfolio", payload.portfolio);
    }

    formData.append("resume", payload.resume);

    return api<CareerResponse>("/career/", {
      method: "POST",
      body: formData,
    });
  },
};