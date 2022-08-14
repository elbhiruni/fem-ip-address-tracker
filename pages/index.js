import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Components
import Form from "../components/Form";
import InfoCard from "../components/InfoCard";

export default function Home() {
  const Map = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  const [info, setInfo] = useState({
    ip: "192.212.174.101",
    city: "Brooklyn",
    region: "NY 10001",
    timezone: "UTC-05:00",
    isp: "SpaceX Starlink",
    lat: 51.505,
    lng: -0.09,
  });
  const [searchInfo, setSearchInfo] = useState(null);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setSearchInfo(data.ip));
  }, []);

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
  }, [searchInfo]);

  return (
    <>
      <Head>
        <title>Frontend Mentor | IP Address Tracker</title>
        <meta name="description" content="IP Address Tracker" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="h-screen relative">
        <div className="h-[300px] bg-pattern bg-center-56 bg-no-repeat bg-cover md:h-[280px] md:bg-left" />
        <div className="flex flex-col items-center w-full absolute top-0 z-[999]">
          <h1 className="text-white text-[1.625rem] font-medium leading-none mt-6 md:text-[2rem] md:mt-8">
            IP Address Tracker
          </h1>
          <div className="mt-7 md:mt-8">
            <Form setSearchInfo={setSearchInfo} />
          </div>
          <div className="mt-6 md:mt-12">
            <InfoCard
              ip={info.ip}
              location={`${info.city}, ${info.region}`}
              timezone={info.timezone}
              isp={info.isp}
            />
          </div>
        </div>
        <Map position={[info.lat, info.lng]} />
      </main>
    </>
  );
}
