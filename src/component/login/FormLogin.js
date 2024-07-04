import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useLogin } from "@/hooks/AuthHooks";
import LoginSchema from "@/validate/LoginSchema";

function FormLogin() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { mutate: loginMutate, isPending } = useLogin()
    const handleSubmit = (value) => {
        loginMutate(value)
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    };

    
    return (
        <>
            <Formik
            initialValues={{ email: "", password: ""}}
            validationSchema={LoginSchema}
            onSubmit={(value) => handleSubmit(value)}
            >
                <Form className="flex  flex-col max-w-md gap-4 w-full flex-grow">
                    <Field
                    name="email"
                    as={TextInput}
                    id="email1"
                    type="email"
                    placeholder="Email"
                    required
                    />
                    <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                    />
                    <Field 
                    name="password"
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                    required
                    className="w-full"
                    rightIcon={passwordVisible ? FaEyeSlash : FaEye}
                    onClick={togglePasswordVisibility}
                    as={TextInput}
                    />
                    <ErrorMessage 
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                    /> 
                    <Button
                    type="submit"
                    disable={isPending}
                    className="bg-slate-600 text-white w-full mx-auto"
                    >
                        Log In
                    </Button>
                </Form>
            </Formik>
        </>
    )
}
export default FormLogin;