import React, { useState, useEffect } from 'react';

interface HoverInfo {
      country: string;
      lat: number;
      lon: number;
      elevation: number;
}
const useMapHover = () => {
      const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);

      useEffect(() => {
            const handleMouseOver = (event: MouseEvent) => {
                  // Mock data for demonstration purposes
                  const country = 'Country Name';
                  const lat = event.clientY; // Replace with actual latitude
                  const lon = event.clientX; // Replace with actual longitude
                  const elevation = 100; // Replace with actual elevation

                  setHoverInfo({ country, lat, lon, elevation });
                  console.log(`Country: ${country}, Lat: ${lat}, Lon: ${lon}, Elevation: ${elevation}`);
            };

            window.addEventListener('mousemove', handleMouseOver);

            return () => {
                  window.removeEventListener('mousemove', handleMouseOver);
            };
      }, []);

      return hoverInfo;
};


const ShowBox = () => {
    const hoverInfo = useMapHover();
  return (
    <>
    {hoverInfo && (
      <div>
            <p>Country: {hoverInfo.country}</p>
            <p>Latitude: {hoverInfo.lat}</p>
            <p>Longitude: {hoverInfo.lon}</p>
            <p>Elevation: {hoverInfo.elevation}</p>
      </div>
)}
    </>
  )
}

export default ShowBox