import Image from "next/image";
import styles from "./page.module.css";

import React from "react";
import { getAllProductAction } from "./actions/service/productApi";
import Link from "next/link";
// Function to generate metadata
export const metadata = () => {
  return {
    title: "Shoes Shop - Home",
    description:
      "Explore the latest collection of shoes at our online shop. High-quality shoes at affordable prices.",
    openGraph: {
      title: "Shoes Shop",
      description:
        "Explore the latest collection of shoes at our online shop. High-quality shoes at affordable prices.",
      url: "https://shoseshopnextjs.vercel.app/", // Replace with your actual site URL
      images: [
        {
          url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png", // Replace with a default OG image
          width: 800,
          height: 600,
          alt: "Shoes Shop",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Shoes Shop",
      description: "Explore the latest collection of shoes at our online shop.",
      images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"], // Replace with a default image
    },
    // Add canonical URL here
    alternates: {
      canonical: "https://shoseshopnextjs.vercel.app/", // Replace with your actual canonical URL
    },
  };
};
const Home = async () => {
  const data = await getAllProductAction();
  // Generate JSON-LD for the product catalog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Shoes Shop",
    description:
      "Explore the latest collection of shoes at our online shop. High-quality shoes at affordable prices.",
    url: "https://your-site-url.com", // Replace with your actual site URL
    logo: "https://your-site-url.com/logo.png", // Replace with your logo URL
    offers: {
      "@type": "OfferCatalog",
      name: "Shoes Collection",
      itemListElement: data.map((prod) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: prod.name,
          image: prod.image,
          description: prod.shortDescription,
          sku: prod.id,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD", // Replace with actual currency
            price: prod.price,
            availability: "https://schema.org/InStock", // Update based on availability
          },
        },
      })),
    },
  };
  return (
    <div className="container">
      <h3>Shoes Shop</h3>
      <div class="row">
        {data.map((prod) => {
          return (
            <div className="col-4 mt-2" key={prod.id}>
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
                  <p>{prod.shortDescription}</p>
                  <Link
                    className="btn btn-success d-inline"
                    href={`/detail/${prod.id}`}
                  >
                    View detail
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

export default Home;
