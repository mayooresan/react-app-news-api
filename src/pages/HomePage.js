import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiActionLoading, setNewsItems } from '../actions';
import {ErrorAlert, NewsItem} from '../components';

const HomePage = () => {
    const [errorMsg, seterrorMsg] = useState(null);
    const dispatch = useDispatch()
    const {isLoading} = useSelector(s=>s.api);
    const {newsItems} = useSelector(s=>s.news);

    useEffect(()=>{
        //trigger when the component rendered first time
        dispatch(setApiActionLoading(true))
        const key = "85ad0550f230465888260de9a023a84d"
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`

        fetch(url)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error("HTTP status " + resp.status);
            }
            return resp.json()
        }) // Transform the data into json
        .then((data) => {
            dispatch(setApiActionLoading(false))
            dispatch(setNewsItems(data.articles))
        }).catch((eror)=>{
            seterrorMsg(eror)
            dispatch(setApiActionLoading(false))
        })


    }, [])

    return (
    <div className="container">
        {
            isLoading && (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }

        {
            errorMsg && (
                <ErrorAlert message="Something went wrong. Please try again later"/>
            )
        }
        
        {
            newsItems.map((newsItem, index) => (<NewsItem
                name={newsItem.title}
                description={newsItem.description}
                url={newsItem.url}
                imageUrl={newsItem.urlToImage}
                key={index}
            />))
        }
    </div>
    )
}

export default HomePage