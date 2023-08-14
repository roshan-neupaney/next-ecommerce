"use client";
import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Functions = () => {
  const [quantity, setQuantity] = useState(1);
  const [tick, setTick] = useState("");
  const tickOnclick = () => {
    setTick(<AiOutlineCheck />);
  };
  const increaseOnClick = () => {
    setQuantity((c) => {
      if (c < 5) {
        return c + 1;
      } else {
        return 5;
      }
    });
  };
  const decreaseOnClick = () => {
    setQuantity((c) => {
      if (c >= 2) {
        return c - 1;
      } else {
        return 1;
      }
    });
  };
  return (
    <>
      <div className="quantityBox flex my-4 h-8">
        <div className="quantity flex ">
          <button
            className="w-8  border-2 border-solid"
            onClick={decreaseOnClick}
          >
            -
          </button>
          <div className="border-2 w-8 flex justify-center">{quantity}</div>
          <button
            className="w-8 border-2 border-solid"
            onClick={increaseOnClick}
          >
            +
          </button>
        </div>
        <div className="addtoCartBox  ml-2">
          <button
            className="bg-[#413E65] flex justify-center items-center text-white w-80 border-2 border-solid h-8 hover:bg-[#F25C54]"
            onClick={tickOnclick}
          >
            Add To Cart <div className="mx-1 text-base font-bold">{tick}</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Functions;
