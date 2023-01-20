import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Deletebook = () => {
        let [book, setBook] = useState({});
    
        const handleChange = (e) => {
            setBook({
                ...book,
                [e.target.name] : e.target.value
            })

        }
        console.log(book);
    
        async function deleteBook() {
            let send = await axios.delete("http://127.0.0.1:3001/bookstock/13", book)
            console.log(send.book);
            alert("Book 13 deleted successfully!")
        }
    return (
        <div>
            <h3> Deleting book id:13</h3>
            {/* <input type="text" placeholder='bookName' name='bookName' onChange={handleChange}/>
            <input type="text" placeholder='bookAuthor' name='bookAuthor'  onChange={handleChange}/>
            <input type="text" placeholder='bookQuantity' name='bookQuantity' onChange={handleChange}/> */}
            <input type="submit" onClick={deleteBook} />
            <Link to="/">
            <p>Go Back!</p>
            </Link>
            
        </div>
    );
}

export default Deletebook;