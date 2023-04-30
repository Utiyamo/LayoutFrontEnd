import { Navbar, Sidebar } from "@/components"
import { useEffect, useState } from "react";

export default function Main() {
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

    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="p-4 sm:ml-64 mt-14" style={{marginLeft: displayFull}}>
                <div className="p-4">

                </div>
            </div>
        </div>
    )
}