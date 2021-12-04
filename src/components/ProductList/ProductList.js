import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products }) => {
  function showName(name) {
    alert(name);
  }

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>name</th>
            <th>product</th>
            <th>price</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <ProductItem product={product} key={index} showName={showName} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
