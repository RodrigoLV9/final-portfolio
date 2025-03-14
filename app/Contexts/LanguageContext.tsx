"use client"
import {useState,createContext, useContext} from 'react'

interface LanguageContextValue{
    language:boolean | undefined,
    setLanguage:(str:boolean | undefined)=>void
}
const MyLanguageContext=createContext<LanguageContextValue | undefined>(undefined)
import { ReactNode } from 'react';

export default function LanguageContext({children}: {children: ReactNode}){
    const [language, setLanguage]=useState<boolean | undefined>(undefined)
    return(
        <MyLanguageContext.Provider value={{language,setLanguage}}>
            {children}
        </MyLanguageContext.Provider>
    )
}

export const useLanguage=()=>{
    const context=useContext(MyLanguageContext)
    if(!context){
        throw new Error('Error in LanguageContext')
    }
    return context
}
