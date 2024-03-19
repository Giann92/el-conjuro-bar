'use client'

import { useEffect } from 'react';
import axios from 'axios';

interface InstagramMedia {
    id: string;
    media_type: string;
    media_url: string;
    caption: string;
    permalink: string;
    thumbnail_url: string;
}

function GaleryInstagram() {
    useEffect(() => {
        async function obtenerMediosDeInstagram() {
            try {
                const response = await axios.get<InstagramMedia[]>(`${window.location.origin}/api/instagram`);
                const mediaData: InstagramMedia[] = response.data;
                console.log(mediaData);
                mediaData.forEach((media: InstagramMedia) => {
                    console.log('ID:', media.id);
                    console.log('Tipo de medio:', media.media_type);
                    console.log('URL del medio:', media.media_url);
                    console.log('Descripción:', media.caption);
                    console.log('Enlace permanente:', media.permalink);
                    console.log('URL de la miniatura:', media.thumbnail_url);
                    console.log('---');
                });
            } catch (error) {
                console.error('Error al obtener medios de Instagram:', error);
            }
        }

        obtenerMediosDeInstagram();
    }, []);

    return (
        // Renderiza tu componente aquí
        <div>Tu componente de React</div>
    );
}

export default GaleryInstagram;