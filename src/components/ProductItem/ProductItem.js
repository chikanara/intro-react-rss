import React from "react";

const ProductItem = ({product,showName}) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>
        <img src={product.imgSrc} alt="" />
      </td>
      <td>{product.price}</td>
      <td>
          <button className="btn btn-danger" onClick={() => showName(product.name)}>click me</button>
      </td>
    </tr>
  );
};

export default ProductItem;
