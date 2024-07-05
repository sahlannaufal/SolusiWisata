import Api from "@/utils/Api";
import ApiForm from "@/utils/ApiForm";

export const createArticle = async (body) => {
    return await ApiForm.post(`/articles`, body);
}

export const getArticle = async () => {
    return await Api.get(`/articles`);
}