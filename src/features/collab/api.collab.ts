import { api } from "../../lib/api";
import { type  CollabResponse, type CollabPayload } from "./types.collab";

export const collabApi = {
    create(payload: CollabPayload) {
        return api<CollabResponse>("/land/", {
            method: "POST",
            body: JSON.stringify(payload),
        });
    }
}