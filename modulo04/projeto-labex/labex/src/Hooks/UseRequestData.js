import { useEffect, useState } from "react";
import axios from 'axios';

export const useRequestData=(url)=>{
    
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [err, setErr] = useState("")
    useEffect(() => {
        setIsloading(true)
        axios.get(url).then((response) => {
            setIsloading(false)
            setData(response.data.trips)
        }).catch((error) => {
            setIsloading(false)
            setErr(error)
        })
    }, [url])

    return [data, isLoading, err]
}
