'use client'
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MyMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lhbmZyYW5jby1kZXYiLCJhIjoiY2x0ZjZxc2xsMGxrczJxcDdramNqcnI4NCJ9.VO8kI1QdnoEZXt3KPaahwQ';

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 15,
    });

    const obtenerCoordenadas = async () => {
      try {
        const direccion = 'Bartolomé Mitre 838, C1036, San Nicolas, Buenos Aires, Argentina';
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(direccion)}.json?access_token=${mapboxgl.accessToken}`;

        const response = await fetch(url);
        const data = await response.json();
        
        console.log('Datos devueltos por la API de geocodificación:', data);

        if (data.features.length > 0) {
          const [longitud, latitud] = data.features[0].center;

          // Centra el mapa en la ubicación obtenida
          map.setCenter([longitud, latitud]);

          // Agrega un marcador en la ubicación obtenida
          new mapboxgl.Marker()
            .setLngLat([longitud, latitud])
            .addTo(map);
        }
      } catch (error) {
        console.error('Error al obtener las coordenadas:', error);
      }
    };

    obtenerCoordenadas();

    return () => map.remove();
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '50vh' }}>
      <div ref={mapContainerRef} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
    </div>
  );
};

export default MyMap;






//'pk.eyJ1IjoiZ2lhbmZyYW5jby1kZXYiLCJhIjoiY2x0ZjZxc2xsMGxrczJxcDdramNqcnI4NCJ9.VO8kI1QdnoEZXt3KPaahwQ'