"use client"
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UpdateCartContext } from "./_context/UpdateCartContext";

const outfit = Outfit({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const params=usePathname();
  const [updateCart,setUpdateCart]=useState(false);
  const showHeader=params=='/sign-in'||params=='/create-account'?false:true;
  return (
    <html lang="en">
      <body className={outfit.className}>
        <UpdateCartContext.Provider value={{updateCart,setUpdateCart}}>
      {showHeader&&<Header/>}
        {children}
        <Toaster />
        </UpdateCartContext.Provider>
        </body>
    </html>
  );
}
