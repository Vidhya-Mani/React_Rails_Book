import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Updatebook = () => {
        let [book, setBook] = useState({});
    
        const handleChange = (e) => {
            // let no = e.target.id;
            setBook({
                ...book,
                [e.target.name] : e.target.value
            })

        }
        console.log(book);
        // let bookid = book.filter((ele) => ele.id);
        // console.log(bookid);

    
        async function updateBook() {
            // let no = e.target.id;

            let send = await axios.put(`http://127.0.0.1:3001/bookstock/${book.id}`, book)
            console.log(send.book);
            alert(`Book ${book.id} updated successfully!`)
        }
    return (
        <div>
            <h3> Enter book id and details to update:</h3>
            <input type="text" placeholder='bookid' name='id' onChange={handleChange}/>
            <input type="text" placeholder='bookName' name='bookName' onChange={handleChange}/>
            <input type="text" placeholder='bookAuthor' name='bookAuthor'  onChange={handleChange}/>
            <input type="text" placeholder='bookQuantity' name='bookQuantity' onChange={handleChange}/>
            <input type="submit" onClick={updateBook} />
            <Link to="/">
            <p>Go Back!</p>
            </Link>
            
        </div>
    );
}

export default Updatebook;
