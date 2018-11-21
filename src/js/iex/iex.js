function getIEXValues(url) {
        return (fetch(url)
                    .then(function (response) {
                    return response.json();
                })
        );
    }


export default getIEXValues