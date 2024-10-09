import Image from "next/image";
import styles from "./page.module.css";

import React from "react";
import { getAllProductAction } from "./actions/service/productApi";
import Link from "next/link";

const Home = async () => {
  const data = await getAllProductAction();
  return (
    <div className="container">
      <h3>Shoes Shop</h3>
      {data.map((prod) => {
        return (
          <div key={prod.id}>
            <h3 key={prod.id}>{prod.name}</h3>
            <Link
              className="btn btn-success d-inline"
              href={`/detail/${prod.id}`}
            >
              View detail
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
