import { useRouter } from "next/navigation";
import { badRequest, mustLogin, notFound } from "./AlertNotification";


const HandleNotifError = (error) => {
    if (error.status === 400) {
        badRequest(error.message)
    }
    if (error.status === 403) {
        badRequest(error.message)
    }
    if (error.status === 404) {
        notFound(error.message)
    }
    const router = useRouter();
    if (error.status === 401) {
        mustLogin(error.message)
        return router.push('/auth/login');
    }
};

export default HandleNotifError;