import React, { useEffect, useState } from "react";

import paginate from './utils'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';


const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true)
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
            setLoading(false);
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