# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Front End Mentor](https://www.frontendmentor.io/solutions/ip-address-tracker-using-nextjs-react-leaflet-and-tailwindcss-C--lAGXvfX)
- Live Site URL: [Vercel](https://fem-ip-address-tracker-elbhiruni.vercel.app/)

## My process

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Leaflet](https://leafletjs.com/) - JS Library Maps
- [React Leaflet](https://react-leaflet.js.org/) - React components for Leaflet maps
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

```js
// Next.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | IP Address Tracker</title>
        <meta name="description" content="IP Address Tracker" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
    </>
  );
}
```

```js
// Leaflet Custom Icon
const locationIcon = L.icon({
  iconUrl: "/images/icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [23, 56],
  popupAnchor: [0, -56],
});
```

```js
// React Leaflet
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
```

```css
/* TailwindCSS */
.btn {
  @apply w-[58px] h-[58px] bg-black rounded-r-xl select-none hover:bg-very-dark-gray;
}
```

## Author

- Website - [El Bhiruni](https://github.com/elbhiruni)
- Frontend Mentor - [@elbhiruni](https://www.frontendmentor.io/profile/elbhiruni)
