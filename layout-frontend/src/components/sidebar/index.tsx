import { IconDefinition, faBars, faClone, faDesktop, faUniversalAccess, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';

import Link from 'next/link';

interface sidebarMenus {
    title: string,
    href: string,
    faIcon: IconDefinition
}

export default function Sidebar() {
    const [sidebarMenus, setSidebarMenus] = useState<sidebarMenus[]>([
        {
            title: "Black Page",
            href: "/blank",
            faIcon: faClone
        },
        {
            title: "Dashboard V1",
            href: '/Dashboard',
            faIcon: faDesktop
        }
    ]);

    const [displayFull, setDisplayFull] = useState('16rem');
    const [sidebarStatus, setSidebarStatus] = useState<string>('');

    useEffect(() => {
        const sidebarStatus: string | null = localStorage.getItem('sidebarStatus');
        console.log("displayFull => ", displayFull)
        if (sidebarStatus !== null) {
            
            setDisplayFull(JSON.parse(sidebarStatus) === true ? '16rem' : '3.5rem');
        }
    }, [sidebarStatus])

    setInterval(() => {
        const localStorageSidebar = localStorage.getItem("sidebarStatus");
        if(localStorageSidebar)
            setSidebarStatus(localStorageSidebar); 
    }, 200);

    return (
        <aside
            id='default-sidebar'
            className='fixed top-0 left-0 z-40 h-screen pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 '
            aria-label='Sidebar'
            style={{ width: displayFull }}
        >
            <div className='h-full px-3 py-4 overflow-y-auto bg-gray-800 overflow-hidden'>
                <div className='space-y-2 font-medium border-b-4 border-gray-500 border-bottom'>
                    <Link href="/profiles"
                        className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                        <FontAwesomeIcon icon={faUser} className='text-white' />
                        <span className='ml-3 pl-2 text-white'>Username</span>
                    </Link>
                </div>
                <ul className='space-y-2 font-medium my-2 overflow-hidden'>
                    {sidebarMenus.map((menu) => {
                        return (
                            <li key={menu.title} className='text-lg'>
                                <Link href={menu.href}
                                    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                >
                                    <FontAwesomeIcon icon={menu.faIcon} className='text-white' />
                                    <span className='ml-3 text-white'>{menu.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>

    )
}