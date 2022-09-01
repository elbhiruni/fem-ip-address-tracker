import Image from "next/image";
import iconArrow from "../public/images/icon-arrow.svg";
import { useEffect, useState } from "react";

export default function Form({ setInfo }) {
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

  const [searchInfo, setSearchInfo] = useState(null);
  useEffect(() => {
    if (searchInfo !== null) {
      fetch(`/api/geolocation/?ipAddress=${searchInfo}&domain=${searchInfo}`)
        .then((res) => res.json())
        .then((data) =>
          setInfo({
            ip: data.ip,
            city: data.location.city,
            region: data.location.region,
            timezone: data.location.timezone,
            isp: data.isp,
            lat: data.location.lat,
            lng: data.location.lng,
          })
        );
    }
  }, [searchInfo, setInfo]);

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={value}
        placeholder="Search for any IP address or domain"
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      <button className="flex items-center justify-center btn" type="submit">
        <Image src={iconArrow} alt="Icon Arrow" />
      </button>
    </form>
  );
}
