import Api from "@/utils/Api";
import ApiForm from "@/utils/ApiForm"


export const createPaket = async (body) => {
    return await ApiForm.post(`/paket`, body);
}

export const getPaket = async () => {
    return await Api.get(`/paket`);
}