export const setEmailUserInLocalStorage = (emailUser) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('email-user', emailUser);
    }
};

export const getEmailUserFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('email-user');
    }
    return null;
};

export const removeEmailUserFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('email-user')
    }
};

export const setNameUserInLocalStorage = (nameUser) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('name-user', nameUser);
    }
};

export const getNameUserFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('name-user');
    }
    return null;
};

export const removeNameUserFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('name-user')
    }
};

export const setTokenUserInLocalStorage = (tokenUser) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('token-user',tokenUser);
    }
};

export const getTokenUserFromLocalStorage = () => {
    if (typeof window !=='undefined') {
        return localStorage.getItem('token-user');
    }
    return null;
};

export const removeTokenUserFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('token-user');
    }
};