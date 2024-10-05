"use client";
import { useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const GlobeComponent = () => {
  const hoveredLabel = {
    Country: '',
    Latitude: '',
    Longitude: '',
    Elevation: '',
  };

  
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
        .onLabelHover((label) => console.log(label))
        
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
    <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='absolute' id='hoverme'>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div>
                  <strong>Country:</strong> {hoveredLabel.Country || 'N/A'}<br />
                  <strong>Lat:</strong> {hoveredLabel.Latitude}<br />
                  <strong>Lng:</strong> {hoveredLabel.Longitude}<br />
                  <strong>Elevation:</strong> {hoveredLabel.Elevation || 'N/A'} m
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
    </div>;
    </>
  )
};

export default GlobeComponent;
