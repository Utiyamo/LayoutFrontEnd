import { useEffect, useState } from "react"
import Link from 'next/link';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import { loginService } from "@/services";
import { baseResult } from "@/common/types";

import { toastNative } from "@/components";

interface userLoginType {
    username: string | any,
    password: string | any
}

export default function Login() {
    const [userLogin, setUserLogin] = useState<userLoginType>();
    const [errorMessage, setErrorMessage] = useState<string | null>('');
    const router = useRouter();

    useEffect(() => {
        setUserLogin({
            username: '',
            password: ''
        });

    }, []);

    useEffect(() => {
        setTimeout(() => {
            setErrorMessage('');
        }, 5000);
    }, [errorMessage]);

    const handleUserLogin = (e: { target: HTMLInputElement }) => {
        let userLoginUpdatable: userLoginType | undefined = userLogin;
        const key = e.target.name as keyof userLoginType;
        if (userLoginUpdatable) {
            userLoginUpdatable[key] = e.target.value;

            setUserLogin(userLoginUpdatable);
        }
    }

    const btnLogin = () => {
        const result : baseResult = loginService().login(userLogin?.username, userLogin?.password);
        if(result.isValid)
            router.push("/main");
        else{
            setErrorMessage(result.message);
        }
    }

    return (
        <>
            <div className="container mx-auto px-4 flex min-h-sreen flex-col justify-center items-center h-screen">
                <div className="bg-zinc-500 w-5/12 text-center rounded py-4">
                    <form>
                        <div className="my-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="usernameInput" >Username</label>
                            <div className="flex justify-center w-full">
                                <div className="bg-white rounded-full w-6/12 text-black border">
                                    <FontAwesomeIcon icon={faUser} className="text-black" />
                                    <input
                                        type="text"
                                        className="rounded-full outline-0 w-10/12 py-2 px-3 text-black"
                                        name="username"
                                        onChange={handleUserLogin} />
                                
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="passwordInput">Password</label>
                            <div className="flex justify-center w-full">
                                <div className="bg-white rounded-full w-6/12 text-black border">
                                    <FontAwesomeIcon icon={faLock} className="text-black" />
                                    <input
                                    type="password"
                                    className="rounded-full outline-0 w-10/12 py-2 px-3 text-black"
                                    name="password"
                                    onChange={handleUserLogin} />
                                
                                </div>
                            </div>
                        </div>
                        {errorMessage != null && errorMessage.length > 0 &&
                            <div className="my-4 flex justify-center">
                                <div className="rounded bg-red-300 w-6/12">
                                    <h5 className="text-red-800 font-bold">{errorMessage}</h5>
                                </div>
                            </div>
                        }
                        <div className="my-4 flex w-full py-2 flex justify-center">
                            <div className="mx-2 w-3/12">
                                <button type="button"
                                    onClick={btnLogin}
                                    className="bg-blue-600 hover:bg-blue-400 hover:text-black text-white font-bold rounded-full focus:outline-none focus:shadow-outline w-full"
                                >Login</button>
                            </div>
                            <div className="mx-2 w-3/12">
                                <Link href="/login/changePassword">
                                    <button type="button"
                                        className="bg-red-600 hover:bg-red-400 hover:text-black text-white font-bold rounded-full focus:outline-none focus:shadow-outline w-full"
                                    >Forgot password</button>
                                </Link>
                            </div>
                            <div className="mx-2 w-3/12">
                                <Link href="/login/signin">
                                    <button type='button'
                                        className="bg-yellow-600 hover:bg-yellow-400 hover:text-black text-black font-bold rounded-full focus:outline-none focus:shadow-outline w-full"
                                    >Sign In</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}