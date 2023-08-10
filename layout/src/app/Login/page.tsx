'use client'

import { useRouter } from 'next/navigation';
import Link from "next/link";
import React, { useState } from "react";

interface userLoginType{
    username: string,
    password: string
}

export default function Login(){

    const router = useRouter();

    const [user, setUser] = useState<userLoginType>({
        username: '',
        password: ''
    });

    const handleUser = (e : React.ChangeEvent<HTMLInputElement>) => {
        var userObj = user;
        if(e.currentTarget.name == "username")
            userObj.username = e.currentTarget.value;
        else
            userObj.password = e.currentTarget.value;

        setUser(userObj);
    }

    const signIn = () => {
        console.log(user);
        router.push("/Dashboard");
    }

    return(
        <form autoComplete="off" className="w-3/4 h-auto">
            <div className="w-full h-auto block my-3">
                <label className="text-xl text-zinc-400 w-full">Username</label><br/>
                <input type="text" name="username" className="bg-sky-500 text-zinc-800 text-lg border-2 border-sky-500 rounded w-3/4" onChange={handleUser}/>
            </div>
            <div className="w-full h-auto block my-3">
                <label className="text-xl text-zinc-400 w-full">Password</label><br/>
                <input type="password" name="password" className="bg-sky-500 text-zinc-800 text-lg border-2 border-sky-500 rounded w-3/4" onChange={handleUser}/>
            </div>
            <div className="w-full h-auto flex justify-start my-5 items-center">
                <Link href="/Login/forgetPassword" className="underline underline-offset-4 text-red-600 text-sm mr-5">Forget your Password?</Link>
                <button 
                    type="button" 
                    className="rounded-full bg-sky-500 text-zinc-800 text-lg w-fit px-5 transition duration-150 ease-in-out hover:bg-sky-800 hover:text-zinc-100"
                    onClick={signIn}>Sign In</button>
            </div>
        </form>
    )
}