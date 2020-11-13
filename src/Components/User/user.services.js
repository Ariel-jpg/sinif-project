import { patch } from "../utils/http";

export const userServices = {
    joinClass: (body) => patch("/api/user/student/joinClass", body)
}