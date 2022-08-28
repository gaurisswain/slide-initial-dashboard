import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const ProductCard = (props) => {
  return (
    <div className="grid grid-cols-[10%_90%] gap-4 p-4 items-center justify-center">
      <div>
        <img src="/shirtModel.png" alt="Image" className="w-full h-auto rounded-md" />
      </div>
      <div className="bg-slate-200 rounded-md p-5 flex flex-col gap-2">
        <div className="text-slate-700">{props.title}</div>
        <div className="text-slate-600">{props.stockCount} in stock</div>
        <div className="w-1/3">
          <Button>Remove</Button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  stockCount: PropTypes.number,
  buttonProps: PropTypes.object,
};

ProductCard.defaultProps = {
  title: "Basic Tshirt",
  stockCount: 23,
};

export default ProductCard;
