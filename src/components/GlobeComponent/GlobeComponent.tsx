"use client";
import { useEffect } from 'react';

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const GlobeComponent = () => {

  useEffect(() => {
    const loadGlobe = async () => {
      const Globe = (await import('globe.gl')).default;
      const res = await fetch('https://raw.githubusercontent.com/jsdhami/Vayu/refs/heads/main/public/data/co2_key_surface-flask_1_ccgg_event_filtered.json');
      const data = await res.json();
      const globe = Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .labelsData(data)
        .labelLat('Latitude')
        .labelLng('Longitude')
        .labelText('Code')
        .labelResolution(5)
        .labelLabel(() => `
           <div className=' bg-gray-200 rounded-md w-wrap text-black p-2 w-auto absolute '>
                  <p>Longitude: ${data.Code}</p>
                  <p>Latitude: ${data.Country}</p>
                  <p>Elevation: ${data.Latitude} meters</p>
                  <p>Country: ${data.Longitude}</p>
            </div>
        `)        
      //   .onLabelHover(() =>`
      //     <div className=' bg-gray-200 rounded-md w-wrap text-black p-2 w-auto absolute '>
      //             <p>Longitude: ${data.Code}</p>
      //             <p>Latitude: ${data.Country}</p>
      //             <p>Elevation: ${data.Latitude} meters</p>
      //             <p>Country: ${data.Longitude}</p>
      //       </div>
      // `)
        .labelDotRadius(0.5)
        .showAtmosphere(true)
        .showGraticules(true)
        .pointRadius(0.5)
        .pointResolution(20)
        .onPointHover((point) => {
          if (!point) return;
          console.log('hovered over a point', point);
        });        
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
