import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function UserTag() {
    const { isSignedIn, user } = useUser();
    return (
        <>
            {isSignedIn &&
                <div className="p-2 bg-neutral-100 rounded-lg flex justify-between items-center">
                    <div className="mr-2">
                        <p className="text-lg text-neutral-800 bg-neutral-200 p-1 rounded-t-sm border-b-1 border-neutral-50">{user.fullName}</p>
                        <p className="text-xs text-neutral-500 bg-neutral-200 p-1 rounded-b-sm overflow-clip">{user.primaryEmailAddress?.emailAddress}</p>
                    </div>
                    <UserButton />
                </div>
            }
        </>

    )
}