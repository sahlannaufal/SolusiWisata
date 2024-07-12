import handleNotifError from "@/utils/HandleNotifError";
import { useMutation } from "@tanstack/react-query";
import { setEmailUserInLocalStorage, setNameUserInLocalStorage, setTokenUserInLocalStorage } from "@/utils/TokenManager";
import { useRouter } from "next/navigation";
import { loginService } from "@/services/AuthServices";

export const useLogin = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: (body) => {
            return loginService(body)
        },
        mutationKey: ["login"],
        onError: (error) => {
            handleNotifError(error)
        },
        onSuccess:(result) => {
            const data = result.data
            setNameUserInLocalStorage(data.user.name)
            setEmailUserInLocalStorage(data.user.email)
            setTokenUserInLocalStorage(data.token.token)
            router.push('/')
        }
    })
}