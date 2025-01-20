import react, { useEffect, useState } from 'react'
import yelp from '../api/yelp'

const useYelpSearch = (searchTerm = '') => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [results, setResults] = useState([])

    const search = async (term) => {
        setLoading(true)

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    location: 'Melbourne',
                    term
                }
            })

            setResults(response.data.businesses)
        } catch (err) {
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
        results,
        search
    }
}

export default useYelpSearch;