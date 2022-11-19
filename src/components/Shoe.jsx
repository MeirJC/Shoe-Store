import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AllShoes.css";
// ================================================================
function Shoe({ setIsLoading }) {
  const [shoeData, setShoeData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://6374b05d48dfab73a4e5c117.mockapi.io/shoes/${id}`
      );
      setShoeData(data);
      setIsLoading(false);
    };
    fetchData();
    // }, []);
  }, [id, setIsLoading]);
  return (
    <div>
      {shoeData && (
        <div className="cardContainer product">
          <img src={shoeData.image} alt="" />
          <h1>
            {shoeData.brand} {shoeData.model}
          </h1>
          <h3>Brand: {shoeData.brand}</h3>
          <h3>Model: {shoeData.model}</h3>
          <h3>Color: {shoeData.color}</h3>
        </div>
      )}
    </div>
  );
}

export default Shoe;
