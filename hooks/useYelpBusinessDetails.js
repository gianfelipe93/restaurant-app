import react, { useEffect, useState } from 'react'
import yelp from '../api/yelp'

const useYelpBusinessDetails = (businessId = '') => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [details, setDetails] = useState({})

    const search = async () => {
        try {
            const response = await yelp.get(`/${businessId}`)

            setDetails(response.data)
        } catch (err) {
            console.log(err)
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        search()
    }, [])

    return {
        loading,
        error,
        details,
        search
    }
}

export default useYelpBusinessDetails;