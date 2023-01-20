import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Bookadd = () => {
    let [book, setBook] = useState({});

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name] : e.target.value
        })
    }
    console.log(book);

    async function addBook() {
        let send = await axios.post("http://127.0.0.1:3001/bookstock", book)
        console.log(send.book);
        alert("Book added successfully!")
    }
    return (
        <div>
            <h3> To add new books please enter details below:</h3>
            <input type="text" placeholder='bookName' name='bookName' onChange={handleChange}/>
            <input type="text" placeholder='bookAuthor' name='bookAuthor'  onChange={handleChange}/>
            <input type="text" placeholder='bookQuantity' name='bookQuantity' onChange={handleChange}/>
            <input type="submit" onClick={addBook} />
            <Link to="/">
            <p>Go Back!</p>
            </Link>
            
        </div>
    );
}

export default Bookadd;
