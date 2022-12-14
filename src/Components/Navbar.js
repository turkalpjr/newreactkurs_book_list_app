import React, { useContext } from 'react'
import { BookContext } from '../Contexts/BookContext'

export default function Navbar() {
    const { books } = useContext(BookContext);

    return (
        <div className="navbar">
             <h1>AOS kitap listesi</h1>
            <p>Şuan {books.length}  adet kitap bulunuyor.</p>
        </div>
    )
}
