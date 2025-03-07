import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from './components/Header/Header'

const inter=Inter({
  variable:"--font-inter",
  subsets:["latin"],
  display:"swap"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="shortcut icon" href="/logo-portfolio-mini.png" type="image/x-icon"/>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
