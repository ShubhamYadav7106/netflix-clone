import * as Yup from "yup";

export const YupValidate=Yup.object({
    email:Yup.string().email().required("Enter your email"),
    password:Yup.string().min(8).max(8).required("Please enter your password")
});
