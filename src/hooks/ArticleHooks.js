import { createArticle, getArticle } from "@/services/ArticleService";
import { Success } from "@/utils/AlertNotification";
import HandleNotifError from "@/utils/HandleNotifError"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useCreateArticle = () => {

    return useMutation({
        mutationFn: (body) => {
            return createArticle(body);
        },
        mutationKey: ["createArticle"],
        onSuccess: (e) => {
            Success("Berhasil Create Article")
        },
        onError: (error) => {
            HandleNotifError(error);
        },
    });
};

export const useGetArticle = () => {
    let {data, isError, error, isLoading: isLoadingArticle} = useQuery({
        queryKey: ['getArticle'],
        queryFn: () => {
            return getArticle()
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        retryOnMount: false,
        retry: false,
        retryDelay: false,
        refetchIntervalInBackground: false,
    })
    if(isError) {
        HandleNotifError(error)
    }
    if (data && data.data[0]) {
        data = data.data[0]
    } else {
        data = null
    } 
    return [data, isLoadingArticle]
}