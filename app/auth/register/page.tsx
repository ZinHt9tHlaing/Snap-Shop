import AuthForm from "@/components/auth/auth-form";
import React from "react";

const RegisterPage = () => {
  return (
    <AuthForm
      formTitle="Register new account"
      footerLabel="Already have an account?"
      footerHref="/auth/login"
      showProvider
    >
      <h2>Register Form</h2>
    </AuthForm>
  );
};

export default RegisterPage;
