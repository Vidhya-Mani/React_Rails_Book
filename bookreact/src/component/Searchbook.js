import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Searchbox from './Searchbox';
import axios from 'axios';
const Searchbook = () => {

    let [data, setData] = useState([]);
    let [inputValue, setinputValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("http://127.0.0.1:3001/bookstock");
            console.log(res.data);
            setData(res.data)

        }
        fetchData()
    }, [])
    console.log(data);
    console.log(inputValue);


    let filterData = data.filter((ele) => ele.bookAuthor.toLowerCase() == inputValue.toLowerCase() ||ele.bookName.toLowerCase() == inputValue.toLowerCase());

    return (
        <div>
            <Searchbox setinputValue={setinputValue} />

            {filterData.length ? filterData.map((ele) => (
                <div>
                    <div>Book id:{ele.id}</div>
                    <div>Book name:{ele.bookName}</div>
                    <div>Author name:{ele.bookAuthor}</div>
                    <div>No of Books:{ele.bookQuantity}</div>
                    <span>__________________</span>


                </div>
            ))
                :<h2>No book found</h2>
              
            }
              <Link to="/">
            <p>Go Back!</p>
            </Link>
            
        </div>
    );
}

export default Searchbook;