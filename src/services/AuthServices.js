import Api from "@/utils/Api";

export const loginService = async (body) => {
    const response = await Api.post('/login', body)
    return response
}
