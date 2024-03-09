"use client";

// !! Types
import { InputType } from "./index.types";

// !! Components
import { CloseIcon } from "../Icons";
import { useState } from "react";

const Input = ({
  onFocus,
  value,
  onChange,
  label,
  handleClearDates,
}: InputType) => {
  return (
    <div className="h-[42px] bg-gray-700 w-[450px] relative px-[12px] rounded-[4px]">
      {value ? (
        <button
          type="button"
          onClick={handleClearDates}
          className="absolute top-[50%] -translate-y-[50%] right-[12px]"
        >
          <CloseIcon />
        </button>
      ) : null}

      <input
        type="text"
        className="text-left ltr h-full w-full bg-transparent border-none text-white text-sm"
        id={label}
        onFocus={onFocus}
        value={value}
        onChange={onChange}
        placeholder=" "
        autoComplete="off"
      />
      <label
        className={`absolute start-[12px] translate-y-[-50%] text-sm text-white duration-[200ms] transition-[top] ease-linear ${
          value ? "top-0" : "top-[50%]"
        }`}
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
