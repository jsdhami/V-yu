/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from 'react';

const GlobeComponent = () => {
  useEffect(() => {
    const loadGlobe = async () => {
      // const res = await fetch('../../public/data/observatory_data_filtered.csv');
      // const data = await res.text();
      const Globe = (await import('globe.gl')).default;

      const globe = Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .labelResolution(2);

      const globeElement = document.getElementById('GlobeComponent');
      if (globeElement) {
        globe(globeElement);
      }
    };

    loadGlobe();
  }, []);

  return <div id="GlobeComponent" className='w-full min-h-screen'></div>;
};

export default GlobeComponent;
