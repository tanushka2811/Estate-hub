import { api } from "../../lib/api";
import { type  InvestResponse, type InvestPayload } from "./types.invest";

export const investApi = {
    create(payload: InvestPayload) {
        return api<InvestResponse>("/lead/", {
            method: "POST",
            body: JSON.stringify(payload),
        });
    }
}