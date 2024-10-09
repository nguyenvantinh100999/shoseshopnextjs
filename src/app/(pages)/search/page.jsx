import { getProductByKeywordAction } from "@/app/actions/service/productApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Search = async (props) => {
  const keyword = props.searchParams.keyword || "";
  const data = await getProductByKeywordAction(keyword);
  console.log(data);
  console.log("keyword", keyword);
  return (
    <div className="container">
      <h1 className="text-center text-danger">Search({data.length})</h1>
      <div className="row">
        {data.map((prod) => {
          return (
            <div className="col-md-4" key={prod.id}>
              <div className="card">
                <Image
                  src={prod.image}
                  width={500}
                  height={500}
                  crossOrigin="anonymous"
                  alt="..."
                  className="w-100"
                  quality={100}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.price}</p>
                  <Link href={`/detail/${prod.id}`} className="btn btn-success">
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
