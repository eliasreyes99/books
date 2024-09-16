import React, { useEffect, useState } from "react";
import "../styles/CardBooks.css";
import Alerts from "../Components/Alerts";

export default function Favorites() {
  const [booksFavorites, setBooksFavorites] = useState(() => {
    const storeFavorites = window.localStorage.getItem("favorites");
    return storeFavorites ? JSON.parse(storeFavorites) : [];
  });
  const[alert, setAlert] = useState({description:'', status:''})

  const handleRemoveFavorite = (book) => {
    setBooksFavorites(booksFavorites.filter(favBook => favBook.id !== book.id))
    setAlert({description:'Book deleted successfully', status:'alert-success'})
  }

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(booksFavorites))
  }, [booksFavorites])

  if (booksFavorites.lenght === 0) {
    return <div>Nout found</div>;
  }
  return (
    <>
    {alert.description && (
      <Alerts description={alert.description} status={alert.status} />
    )}
      <br />
      <div className="booksContainer">
        {booksFavorites.map((book, index) => (
          <div className="cardBook" key={index}>
            <img src={book.image} alt="Book" />
            <h3>{book.title || "No description available"}</h3>
            <button onClick={() => handleRemoveFavorite(book)} style={{background: "red"}}>Remove to favorites</button>
          </div>
        ))}
      </div>
    </>
  );
}
