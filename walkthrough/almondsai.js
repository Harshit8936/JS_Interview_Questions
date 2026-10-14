// write debouncing function

// find factorial of 10000 using dynamic programming'
function factorial(n){
  let result = BigInt(1);
  for(let i=2;i<=n;i++){
    result *= BigInt(i)
  }
  return result
}


console.log(factorial(5))

// write program in react js to fetch products


import React from "react";

export default function App() {
  const students = [
    { name: "Smith", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "John", rollNumber: 16, marks: 35 },
    { name: "Tiger", rollNumber: 7, marks: 55 },
  ];
  return (
    <>
      <ul>
        {students &&
          students
            .filter((item) => item.marks > 60)
            .map((student, index) => {
              return (
                <li key={index}>
                  Name: {student.name}
                  <p>Marks: {student.marks}</p>
                </li>
              );
            })}
      </ul>
    </>
  );
}


import React, { useState, useEffect } from "react";

export default function App() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      setLoading(true);
      if (res.ok) {
        const products = await res.json();
        if (products) {
          setProduct(products.products);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const filterProducts = products.filter((item) => item.price > 10);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Product Listing ({filterProducts.length})</h1>
      <ul>
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => {
            return (
              <li key={product.id}>
                {product.title}
                <p>Price: {product.price}</p>
              </li>
            );
          })
        ) : (
          <li>No products found</li>
        )}
      </ul>
    </>
  );
}



// custom hook to fetch data from api


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
