import * as Yup from "yup";
export default Yup.object().shape({
    email: Yup.string().required("Required").email("Must be a valid email"),
    password: Yup.string()
    .required("Required")
    .min(6,"Minimal 6 characters")
    .nonNullable("Must be a valid password"),
});