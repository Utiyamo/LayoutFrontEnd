import { useEffect, useState } from "react"

interface userChangePassword {
    username: string,
    email: string
}

export default function ChangePassword() {
    const [userChange, setUserChange] = useState<userChangePassword>();

    useEffect(() => {
        setUserChange({
            username: '',
            email: ''
        });


    }, []);

    const handleUserChange = (e: { target: HTMLInputElement }) => {
        let userChangeUpdatable: userChangePassword | undefined = userChange;
        const key = e.target.name as keyof userChangePassword;
        if (userChangeUpdatable) {
            userChangeUpdatable[key] = e.target.value;

            setUserChange(userChangeUpdatable);
        }
    }

    const btnChange = () => {

    }

    return (
        <div className="container mx-auto px-4 flex min-h-sreen flex-col justify-center items-center h-screen">
            <div className="bg-zinc-500 w-5/12 text-center rounded py-4">
                <form>
                    <div className="my-4 ">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="usernameInput" >Username</label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded-full w-6/12 py-2 px-3 text-black"
                            name="username"
                            onChange={handleUserChange} />
                    </div>
                    <div className="my-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="passwordInput">Email</label>
                        <input
                            type="email"
                            className="shadow appearance-none border rounded-full w-6/12 py-2 px-3 text-black"
                            name="email"
                            onChange={handleUserChange} />
                    </div>
                    <div className="my-4 flex w-full py-2 flex justify-center">
                        <div className="mx-2 w-4/12">
                            <button type="button"
                                onClick={btnChange}
                                className="bg-blue-600 hover:bg-blue-400 hover:text-black text-white font-bold rounded-full focus:outline-none focus:shadow-outline w-full"
                            >Request change</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}