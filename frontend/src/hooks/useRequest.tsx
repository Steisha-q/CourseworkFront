import { useEffect, useState } from "react"

export const useRequest = ({
    api
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState();

    const makeRequest = async data => {
        setIsLoading(true);
        try {
            const response = await api(data)
            setResponseData(response.data);

            return response.data;
        } catch (error) {
            console.error("Request error: ", error)
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        error,
        data: responseData,
        makeRequest
    }
}