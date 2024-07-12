import { createPaket, getPaket } from "@/services/PaketService";
import { Success } from "@/utils/AlertNotification";
import HandleNotifError from "@/utils/HandleNotifError";
import { useMutation, useQuery } from "@tanstack/react-query"

export const useCreatePaket = () => {

    return useMutation({
        mutationFn: (body) => {
            return createPaket(body);
        },
        mutationKey: ['createPaket'],
        onSuccess: (e) => {
            Success("Berhasil Create Paket")
        },
        onError: (error) => {
            HandleNotifError(error);
        },
    });
};

export const useGetPaket = () => {
    let {data, isError, error, isLoading: isLoadingPaket} = useQuery({
        queryKey: ['getPaket'],
        queryFn: () => {
            return getPaket()
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
    const paketData = data?.data?.paketPerjalanan ?? []
    // if (data && data.data[0]) {
    //     data = data.data[0]
    // } else {
    //     data = null
    // } 
    return [paketData, isLoadingPaket]
}

