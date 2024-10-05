import React from 'react';

interface ShowBoxProps {
      lag: number;
      lat: number;
      elevation: number;
      country: string;
}

const ShowBox: React.FC<ShowBoxProps> = ({ lag, lat, elevation, country }) => {
      return (
            <div className=' bg-gray-200 rounded-md w-wrap text-black p-2 w-auto absolute '>
                  <p>Longitude: {lag}</p>
                  <p>Latitude: {lat}</p>
                  <p>Elevation: {elevation} meters</p>
                  <p>Country: {country}</p>
            </div>
      );
};

export default ShowBox;