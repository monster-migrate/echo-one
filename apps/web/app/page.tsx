"use client";

import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add";
import { subtract } from "@workspace/math/subtract";
import { Input } from "@workspace/ui/components/input";
import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api"
import { stringify } from "querystring";
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World From the Web</h1>
        <p className="text-lg text-center">
          {JSON.stringify(users)}
        </p>
        <Button onClick={() => addUser()}>Add</Button>
      </div>
    </div>
  )
}
