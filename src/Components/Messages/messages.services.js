import { post } from "../utils/http";

export const messagesServices = {
    getClassMessages: (body) => post("/api/classMessages", body),
}