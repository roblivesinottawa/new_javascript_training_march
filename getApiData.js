const getApiData = () => {
    fetch(API_URL)
    .then((res) => {
        return res.json()
    }).then((data) => {
        fetchedData(data)
    })
    fetchedData = (getApiData) => {
        console.log(getApiData)
    }
}