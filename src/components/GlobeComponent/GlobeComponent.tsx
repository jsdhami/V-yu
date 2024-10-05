"use client";
import { useEffect } from 'react';

const GlobeComponent = () => {
  
  useEffect(() => {
    const loadGlobe = async () => {
      const Globe = (await import('globe.gl')).default;
      const res = await fetch('https://raw.githubusercontent.com/jsdhami/Vayu/refs/heads/main/public/data/co2_key_surface-flask_1_ccgg_event_filtered.json');
      const data = await res.json();
      // use these data to hover over the globe
      const globe = Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .labelsData(data)
        .labelLat('Latitude')
        .labelLng('Longitude')
        .labelText('Code')
        .labelResolution(5)
        .labelDotRadius(0.2)
        // .labelLabel(() => console.log(data))
        
           
        
      const globeElement = document.getElementById('GlobeComponent');
      if (globeElement) {
        globe(globeElement);
      } 
    };

    loadGlobe();
  }, []);

  return (
    <>
    <div id="GlobeComponent" className='w-full min-h-screen'>
    </div>;
    </>
  )
};

export default GlobeComponent;
