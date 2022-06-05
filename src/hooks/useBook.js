import {useEffect, useState, useContext} from 'react';
import apiBook from '../api/apiBook';
import {CancelToken} from 'apisauce';
import { AppContext } from '../context/AppContext'

export default function useBook(){
    const [books, setBooks]=useState([])

    useEffect(
        ()=>{
            const source=CancelToken.source();
            const getBooks=async()=>{
                const response = await apiBook.get(source.token)
                setBooks(response)
            }
            getBooks()
            return ()=>{source.cancel();}

        },
        []
    )

    return books
}


