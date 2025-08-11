"use client";

import { Button } from "@workspace/ui/components/button"
import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api"
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { FcGoogle } from "react-icons/fc";
import UserTag from "@/components/UserTag/UserTag";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  const { isSignedIn, user } = useUser();
  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello World From the Web</h1>
            <UserTag />
            <p className="text-lg text-center">
              {JSON.stringify(users)}
            </p>
            <Button onClick={() => addUser()}>Add</Button>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello World From the Web</h1>
            <p className="text-lg text-center">
              You are not authenticated
              <SignInButton>
                <Button className="flex justify-between px-12" variant="outline">
                  <FcGoogle />
                  Authenticate
                </Button>
              </SignInButton>
            </p>
          </div>
        </div>
      </Unauthenticated>
    </>
  )
}
