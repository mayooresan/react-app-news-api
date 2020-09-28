const newsActionTypes = {
    SUCCESS_NEWS_FETCH:"SUCCESS_NEWS_FETCH",
    ERROR_NEWS_FETCH:"ERROR_NEWS_FETCH"
}

const setNewsItems = newsItems => {
    return {
        type: newsActionTypes.SUCCESS_NEWS_FETCH,
        payload: newsItems
    }
}

const setNewsItemsFetchError = error => {
    return {
        type: newsActionTypes.ERROR_NEWS_FETCH,
        payload: error
    }
}

export {newsActionTypes, setNewsItems, setNewsItemsFetchError}