import Image from "next/image";
import iconArrow from "../public/images/icon-arrow.svg";
import { useState } from "react";

export default function Form({ setSearchInfo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInfo(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Out of Focus
  const handleBlur = () => {
    setValue(value.replace(/\s/g, ""));
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={value}
        placeholder="Search for any IP address or domain"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button className="flex items-center justify-center btn" type="submit">
        <Image src={iconArrow} alt="Icon Arrow" />
      </button>
    </form>
  );
}
