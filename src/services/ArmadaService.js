import Api from "@/utils/Api";
import ApiForm from "@/utils/ApiForm"


export const createArmada = async (body) => {
    return await ApiForm.post(`/rental`, body);
}

export const getArmada = async () => {
    return await Api.get(`/rental`);
}