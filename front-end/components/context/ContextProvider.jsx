"use client"

import { useContext,createContext,useState } from "react"
const QueryContext=createContext(null)
export const ContextProvider=({children})=>{
    const [query,setQuery]=useState('')
    const value={
        query,
        setQuery
    }
    return <QueryContext.Provider value={value}>
        {
            children
        }
    </QueryContext.Provider>
}

export const useQuery=()=>{
    const context=useContext(QueryContext)
    return context
}