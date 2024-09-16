import React, {  useState, useEffect } from "react";
import Alerts from "../Components/Alerts";

export default function Search() {
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({description:'', status:''})

  const books = JSON.parse(window.localStorage.getItem("books"));
  const [favorites, setFavorites] = useState(() => JSON.parse(window.localStorage.getItem('favorites')))

  const result = !search ? books : books.filter((book) => book.title.toLowerCase().includes(search.toLocaleLowerCase()))
  console.log(books.title);

  const handleAddToFavorites = (book) => {
    const bookExists = favorites.some(favBook => favBook.id === book.id)
    if(!bookExists){
        setFavorites([...favorites, book])
        setAlert({description:'Book add to favorites', status:'alert-success'})
    }else{
      setAlert({description:'The book already exists in your favorites', status:'alert-error'})
    }
  }
  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites]);

  return (
    <div>
      {alert.description && (
        <Alerts description={alert.description} status={alert.status}></Alerts>
      )}
      <div className="search">
        <input
          required
          type="search"
          value={search}
          placeholder="Search for books"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="booksContainer">
        {result.map((book, index) => (
          <div className="cardBook" key={index}>
            <img src={book.image} alt="Book" />
            <h3>{book.title || "No description available"}</h3>
            <button onClick={(e) => handleAddToFavorites(book)} >Add to favorites</button>
          </div>
        ))}
      </div>
    </div>
  )
}