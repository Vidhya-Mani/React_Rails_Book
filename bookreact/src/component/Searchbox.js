import React, { useState, useEffect } from 'react';
export default function Searchbox({setinputValue}){


    function handleChange(e){
         setinputValue(e.target.value)
    }
    return(
        <>
        <input placeholder='search by book name or author' onChange={handleChange}/>
        </>
    )
}