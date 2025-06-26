"use client";

import { Session } from "next-auth";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { LogIn } from "lucide-react";

const UserButton = ({ user }: Session) => {
  return (
    <div>
      {user?.email}{" "}
      {user?.email ? (
        <Button
          onClick={() => signOut()}
          variant={"destructive"}
          className="active:scale-95 transition-transform duration-200"
        >
          Logout
        </Button>
      ) : (
        <Button
          className="active:scale-95 transition-transform duration-200"
          asChild
        >
          <Link href={"/auth/login"} className="space-x-1">
            <LogIn size={50} /> <span>Login</span>
          </Link>
        </Button>
      )}
    </div>
  );
};

export default UserButton;
