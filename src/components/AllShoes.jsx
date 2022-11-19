import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllShoes.css";
// =========================================================
function AllShoes({ setIsLoading }) {
  const [shoes, setShoes] = useState([]);
  const [errorMes, setErrorMes] = useState(null);
  // =======================================================
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://6374b05d48dfab73a4e5c117.mockapi.io/shoes`
        );
        console.log("data inside fetch:", data);
        setShoes(data);
      } catch (e) {
        console.log(e.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setIsLoading]);

  //? Delete
  const handleDelete = async (id) => {
    try {
      console.log("id:", id);
      const { data } = await axios.delete(
        `https://6374b05d48dfab73a4e5c117.mockapi.io/shoes/${id}`
      );
      console.log(data);
      setShoes((prevState) =>
        prevState.filter((shoe) => {
          return shoe.id !== data.id;
        })
      );
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 1200);
    }
  };
  // ============================================================

  const insertShoes = () => {
    return shoes.map((s) => {
      return (
        <div className="cardContainer" key={`${s.id}${s.model}`}>
          <img
            style={{ width: "150px", marginTop: "0.85rem" }}
            src={s.image}
            alt=""
          />
          <h3>Brand: {s.brand}</h3>
          <h3>Model: {s.model}</h3>
          <h3>Color: {s.color}</h3>
          <Link to={`/shoes/${s.id}`}>
            {s.brand} {s.model}
          </Link>
          <br />
          <button onClick={() => handleDelete(s.id)}>Delete</button>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Shoes Collection</h1>
      <div className="shoesContainer">{insertShoes()}</div>
    </div>
  );
}
export default AllShoes;
