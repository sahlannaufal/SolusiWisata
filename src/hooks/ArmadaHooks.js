import { createArmada, getArmada } from "@/services/ArmadaService";
import HandleNotifError from "@/utils/HandleNotifError";
import { useMutation, useQuery } from "@tanstack/react-query"

export const useCreateArmada = () => {

    return useMutation({
        mutationFn: (body) => {
            return createArmada(body);
        },
        mutationKey: ["createArmada"],
        onSuccess: (e) => {
            Success("Berhasil Create Armada")
        },
        onError: (error) => {
            HandleNotifError(error);
        },
    });
};

export const useGetArmada = () => {
    let {data, isError, error, isLoading: isLoadingArmada} = useQuery ({
        queryKey: ['getArmada'],
        queryFn: () => {
            return getArmada()
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
    const armadaData = data?.data?.rental ?? [];
    // if (data && data.data[0]) {
    //     data = data.data[0]
    // } else {
    //     data = null
    // } 
    return [armadaData, isLoadingArmada]
}