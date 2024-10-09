"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HeaderHome = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <Link className="navbar-brand" href="/">
        Cybersoft
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" href="/" aria-current="page">
              Home <span className="visually-hidden">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/register">
              Register
            </Link>
          </li>
        </ul>
        <form
          className="d-flex my-2 my-lg-0"
          onSubmit={(e) => {
            router.push(`/search?keyword=${keyword}`);
          }}
        >
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <Link
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            href={`/search?keyword=${keyword}`}
          >
            Search
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default HeaderHome;
