import React from "react"

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="bg-gradient-to-r from-cyan-500 from-10% via-sky-500 via-30% to-indigo-500 to-70% h-screen overflow-hidden flex justify-center items-center">
        <div className="bg-white rounded w-3/5 h-3/4 inline-flex">
          <div className="bg-indigo-500 w-1/2 h-full flex justify-center items-center">
            <h1 className="text-3xl font-mono text-center">Welcome to <br/>
              <span className="text-5xl text-red-600 font-extrabold">THE SYSTEM</span>
            </h1>
          </div>
          <div className="bg-black w-1/2 h-full flex justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    )
}