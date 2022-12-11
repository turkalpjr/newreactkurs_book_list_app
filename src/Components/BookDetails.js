import React,{useContext} from 'react'
import {BookContext} from "../Contexts/BookContext";

export default function BookDetails({book}) {

const {removeBook}=useContext(BookContext);

  return (
     <li onClick={()=>removeBook(book.id)}>
        <div className="title">{book.ad}</div>
        <div className="author">{book.yazar}</div>
     </li>
  )
}
