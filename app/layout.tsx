import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from './components/Header/Header'
import LanguageContext from "./Contexts/LanguageContext";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100"],
    display:"swap"
})
const inter=Inter({
  variable:"--font-inter",
  subsets:["latin"],
  display:"swap"
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of RodrigoLV",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en" className={`${inter.className} ${poppins.className}`}>
      <head>
        <link rel="shortcut icon" href="/logo-portfolio-mini.png" type="image/x-icon"/>
      </head>
      <body>
        <LanguageContext>
          <Header/>
          {children}
        </LanguageContext>
      </body>
    </html>
  );
}
