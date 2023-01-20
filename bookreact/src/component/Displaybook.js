import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Displaybook = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("http://127.0.0.1:3001/bookstock");
            console.log(res.data);
            setData(res.data)

        }
        fetchData()
    }, [])
    console.log(data);

    return (
        <div>
                <Link to="/bookadd">
                  <p>Add new books</p>
                </Link>
                <Link to="/searchbook">
                <p> Search for existing books</p>
                </Link>
                <Link to="/updatebook">
                <p> Update existing book</p>
                </Link>
                <Link to="/deletebook">
                <p> Delete existing book</p>
                </Link>

                <h3>List of existing Books:</h3>
           
                {data.length ? data.map((ele) => (
                 
                    <div>
                        <div>Book id:{ele.id}</div>
                        <div>Book name:{ele.bookName}</div>
                        <div>Author name:{ele.bookAuthor}</div>
                        <div>No of Books:{ele.bookQuantity}</div>
                        <span>__________________</span>


                    </div>
                )):<div> No Data from Server..</div>
                }
               
        </div>
    );
}

export default Displaybook;

