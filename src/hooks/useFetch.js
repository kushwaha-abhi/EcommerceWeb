import { useState, useEffect } from "react";
import { fetchData } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null); // Initialize with null or an empty value
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to track errors

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                setLoading(true); // Start loading
                const res = await fetchData(endpoint);
                setData(res);
            } catch (err) {
                setError(err); // Set error if any
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchDataFromApi();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;
