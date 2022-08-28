import React from "react";
import Button from "./Button";

const ActivityCard = (props) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 border-2 rounded-md">
      <div className="w-full h-full">
        <img src="/shirtModel.png" alt="image" className="w-full h-auto" />
      </div>
      <div className="w-full">
        <Button btnType="primary">Tag Products</Button>
      </div>
      <div className="w-full">
        <Button btnType="secondary">Content Sales Report</Button>
      </div>
    </div>
  );
};

export default ActivityCard;
