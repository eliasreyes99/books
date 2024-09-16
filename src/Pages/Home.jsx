import "../styles/Home.css";
import { Link } from "react-router-dom";
import booksimage from "../img/books.jpg";
import Books from "../Components/Books";
export default function Home() {
  return (
    <div style={{background:'#f4f4f4'}} >
      <div className="banner">
        <div className="banner-content">
          <h1>Bienvenido a BookHub</h1>
          <p>Descubre y encuentra tus libros favoritos</p>
          <Link to={"/search"} className="explore-btn">
            Explorar Libros
          </Link>
        </div>
        <div className="banner-image">
          <img src={booksimage} alt="books" />
        </div>
      </div>
      <Books></Books>
    </div>
  );
}
