import {useEffect, useState} from 'react';
import apiBook from '../api/apiBook';
import {CancelToken} from 'apisauce';
import { AppContext } from '../context/AppContext'

export default function useBook(id=32){
    const [books, setBooks]=useState([])

    useEffect(
        ()=>{
            const source=CancelToken.source();
            const getBooks=async()=>{
                const response = await apiBook.getOneBook(id,source.token)
                setBooks(response)
            }
            getBooks()
            return ()=>{source.cancel();}

        },
        [id]
    )

    return books
}