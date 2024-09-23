import { Layout } from "antd";
import React from "react";
import { useSearch } from "../context/search";
import Header from "../components/Layout/Header";
import "../styles/search.css";
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <>
      <Header />
      <h3 className="bg-yellow-300 rounded-lg p-2 w-[100px] flex justify-center items-center mx-5 my-2">
        <u className="text-green-900 font-sans font-semibold">
          {values?.results.length < 1
            ? "No Products found"
            : `Total ${values?.results.length}`}
        </u>
      </h3>
      <Layout title={"Search results"}>
        <div className="container">
          <div className="text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {values.results.map((p) => (
                <div className="card m-2" key={p._id}>
                  <img
                    src={`${process.env.REACT_APP_API}/product/product-photo/${p._id}`}
                    className="h-[300px] rounded-xl"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>

                    <p className="card-text">
                      {p.description.substring(0, 30)}...
                    </p>
                    <p className="card-text"> ₹ {p.price}</p>

                    <button className="ms-2 bg-lime-400 hover:bg-lime-500 px-3 py-2 rounded-md text-gray-800 font-semibold ">
                      More Details
                    </button>
                    <button className="border-1 border-lime-500 hover:bg-lime-500 px-3 py-2 rounded-md text-gray-800 font-semibold ms-2">
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
