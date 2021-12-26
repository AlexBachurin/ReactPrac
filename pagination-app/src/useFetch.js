import React, { useEffect, useState } from "react";

import paginate from './utils'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';


const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            //use paginate here to transform our array into subarrays 
            setData(paginate(data))
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getData();
    }, []);

    return { data, loading };
}

export default useFetch;