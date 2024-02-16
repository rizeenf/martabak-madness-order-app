import React from "react";
type ParamsProps = {
  params: {
    productId: string;
  };
};

const ProductId = ({ params }: ParamsProps) => {
  const { productId } = params;

  return <div>{productId}</div>;
};

export default ProductId;
