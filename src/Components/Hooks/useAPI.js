import { useEffect, useState } from "react";


const useAPI = () => {
    const [useApi, setUseApi]=useState([])
    useEffect(()=>{
        fetch('https://mighty-dawn-03979.herokuapp.com/shedules')
        .then(res=>res.json())
        .then(data=>setUseApi(data))
    },[])
    return {useApi,setUseApi};
};

export default useAPI;