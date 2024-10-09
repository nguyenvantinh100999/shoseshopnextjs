import { getProductByIdAction } from "@/app/actions/service/productApi";
import Image from "next/image";
import React from "react";

const Detail = async (props) => {
  //prosp param của server component
  const { params } = props;
  console.log("param", params);
  const data = await getProductByIdAction(params.id);
  return (
    <div className="container">
      <h2 className="text-center">Detail</h2>
      <div className="row">
        <div className="col-4">
          <Image
            src={data.image}
            width={500}
            height={500}
            crossOrigin="anonymous"
            alt="..."
            className="w-100"
            quality={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-8">
          <h4>{data.name}</h4>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
