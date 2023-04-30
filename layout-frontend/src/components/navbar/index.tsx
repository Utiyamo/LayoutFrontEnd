import { faUniversalAccess, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { UserInfoType } from "@/common/types";

export default function Navbar(){

    const [showUserInfo, setShowUserInfo] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);

    const btnShowMenu = () => {
        if(!userInfo){
            const guestUserInfo : UserInfoType = {
                username: `Guest Username`,
                email: "user@guest.com",
                roles: ["guest"]
            }

            setUserInfo(guestUserInfo);
        }
        
        setShowUserInfo(!showUserInfo);
        console.log(showUserInfo);
        
    }

    const btnSideBar = () => {
        try{
            const sidebarStatus = localStorage.getItem("sidebarStatus");
            console.log(sidebarStatus);
            if(sidebarStatus)
                localStorage.setItem("sidebarStatus", JSON.parse(sidebarStatus) === true ? "false" : "true");
            else
                localStorage.setItem("sidebarStatus", "true");
            
        }
        catch (err){
            console.log(err);
        }
    }

    return(
        <nav className="fixed top-0 z-50 w-full bg-gray-800 borde-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            onClick={btnSideBar}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <Link href='/main' className="flex ml-2 md:mr-24">
                            <FontAwesomeIcon icon={faUniversalAccess} className='text-white self-center text-2xl mx-2'/>
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Layout FrontEnd</span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="ml-3">
                            <div>
                                <button type='button'
                                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    aria-expanded='false'
                                    onClick={btnShowMenu}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                            </div>
                            {showUserInfo == true &&
                                    <div className='absolute right-5 z-150 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
                                    id="dropdown-user"
                                >
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                                            {userInfo?.username}
                                        </p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            {userInfo?.email}
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <Link href="/profiles/settings"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                role="menuitem"
                                            >
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/logout"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                role="menuitem"
                                            >
                                                Sign Out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}