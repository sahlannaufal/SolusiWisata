import Swal from "sweetalert2"


export const notFound = (message) => {
    return Swal.fire({
        title: 'Error!',
        text: `${message || "Not Found"}`,
        icon: "error",
        timer: 1000,
    });
};

export const badRequest = (message) => {
    return Swal.fire({
        title: "Error!",
        text: `${message || "Bad Request"}`,
        icon: "error",
        timer: 5000,
    });
};

export const mustLogin = (message) => {
    return Swal.fire({
        title: "Error!",
        text: `${message || "Must Login"}`,
        icon: "error",
        timer: 5000,
    });
};

export const Forbidden = (message) => {
    return Swal.fire({
        title: "Error!",
        text: `${message || "Forbidden"}`,
        icon: "error",
        timer: 1000,
    });
};

export const Success = (message) => {
    return Swal.fire({
        title: "Success",
        icon: "success",
        text: `${message || "Berhasil"}`,
        timer: 500,
    });
};