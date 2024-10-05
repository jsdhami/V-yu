/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from 'react';

const GlobeComponent = () => {
  useEffect(() => {
    const loadGlobe = async () => {
      const Globe = (await import('globe.gl')).default;
      const res = await fetch('https://raw.githubusercontent.com/jsdhami/Vayu/refs/heads/main/public/data/co2_key_surface-flask_1_ccgg_event_filtered.json');
      // console.log(res.json());
      const data = await res.json();
      console.log(data);
      const globe = Globe()
        .globeImageUrl('../../public/images/earth.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .labelsData(data)
        .labelLat('Latitude')
        .labelLng('Longitude')
        .labelText('Code')
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
