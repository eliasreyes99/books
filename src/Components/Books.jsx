import React, { useState, useEffect } from "react";
import "../styles/CardBooks.css";
import Alerts from '../Components/Alerts'

export default function Books() {
  const [dataBooks, setDataBooks] = useState([]);
  const [favorites, setFavorites] = useState(() => JSON.parse(window.localStorage.getItem('favorites')) || []);
  const [alert, setAlert] = useState({description:'', status:''})
  useEffect(() => {
    fetch("https://www.dbooks.org/api/recent")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail fetch");
        }
        return response.json();
      })
      .then((data) => {
        setDataBooks(data.books);
        
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);

  useEffect(() => {
    window.localStorage.setItem('books', JSON.stringify(dataBooks))
    window.localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites, dataBooks]);

  if (!dataBooks) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(dataBooks)) {
    return <div>No books available</div>;
  }

  const handleAddToFavorites = (book) => {
    const bookExists = favorites.some(favBook => favBook.id === book.id)
    if(!bookExists){
        setFavorites([...favorites, book])
        setAlert({description:'Book add to favorites', status:'alert-success'})
    }else{
      setAlert({description:'The book already exists in your favorites', status:'alert-error'})
    }
  }

  return (
    <div className="searchContainer">
      {alert.description && (
        <Alerts description={alert.description} status={alert.status}></Alerts>
      )}
      <div className="booksContainer">
        {dataBooks.map((book, index) => (
          <div className="cardBook" key={index}>
            <img src={book.image} alt="Book" />
            <h3>{book.title || "No description available"}</h3>
            <button onClick={() => handleAddToFavorites(book)} >Add to favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
}
