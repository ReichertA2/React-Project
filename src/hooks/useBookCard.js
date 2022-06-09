import {useEffect, useState} from 'react';
import apiBook from '../api/apiBook';
import {CancelToken} from 'apisauce';
import { AppContext } from '../context/AppContext'
import { CollectionsOutlined } from '@mui/icons-material';

export default function useBookCard(id){
    const [books, setBooks]=useState([])

    useEffect(
        ()=>{
            const source=CancelToken.source();
            const getBooks=async()=>{
                const response = await apiBook.getOneBook(id,source.token)
                console.log('useBookCard success ', id, response.books)

                setBooks(response)
                console.log('useBookCard success ', id)
            }
            getBooks()
            return ()=>{source.cancel();}

        },
        [id]
    )
    console.log('useBookCard',books)
    return books
}