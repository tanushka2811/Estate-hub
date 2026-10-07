import { api } from "../../lib/api";
import { type  ContactResponse, type ContactPayload } from "./types.contact";

export const contactApi = {
    create(payload: ContactPayload) {
        return api<ContactResponse>("/contact/", {
            method: "POST",
            body: JSON.stringify(payload),
        });
    }
}