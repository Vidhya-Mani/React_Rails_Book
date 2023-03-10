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
            // let id = e.target.id;
            let send = await axios.delete(`http://127.0.0.1:3001/bookstock/${book.id}`, book)
            console.log(send.book);
            alert(`Book ${book.id} deleted successfully!`)
        }
    return (
        <div>
            <h3> Enter id of book to be Deleted:</h3>
             <input type="text" placeholder='bookid' name='id' onChange={handleChange}/>
            {/* <input type="text" placeholder='bookAuthor' name='bookAuthor'  onChange={handleChange}/> */}
            {/* <input type="text" placeholder='bookQuantity' name='bookQuantity' onChange={handleChange}/>  */}
            <input type="submit" onClick={deleteBook} />
            <Link to="/">
            <p>Go Back!</p>
            </Link>
            
        </div>
    );
}

export default Deletebook;