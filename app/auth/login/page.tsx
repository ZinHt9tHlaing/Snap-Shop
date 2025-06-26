import AuthForm from "@/components/auth/auth-form";
import React from "react";

const LoginPage = () => {
  return (
    <AuthForm
      formTitle="Login to your account"
      showProvider={true}
      footerLabel="Don't have an account?"
      footerHref="/auth/register"
    >
      <h2>Login Form</h2>
    </AuthForm>
  );
};

export default LoginPage;
