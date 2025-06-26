"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

const ProviderLogin = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Button
        variant={"outline"}
        onClick={() => signIn("google", { redirect: false, callbackUrl: "/" })}
        className="border-2 border-indigo-600"
      >
        <p className="gap-3 flex items-center">
          Login with Google <FcGoogle />
        </p>
      </Button>
      <Button
        variant={"outline"}
        onClick={() => signIn("github", { redirect: false, callbackUrl: "/" })}
        className="border-2 border-indigo-600"
      >
        <p className="gap-3 flex items-center">
          Login with Github <FaGithub />
        </p>
      </Button>
    </div>
  );
};

export default ProviderLogin;
