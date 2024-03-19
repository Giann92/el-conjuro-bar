'use client'

import { useEffect, useState } from 'react';
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
    const [mediaData, setMediaData] = useState<InstagramMedia[]>([]);

    useEffect(() => {
        async function obtenerMediosDeInstagram() {
            try {
                const response = await axios.get<InstagramMedia[]>(`../../api/instagram`);
                setMediaData(response.data);
            } catch (error) {
                console.error('Error al obtener medios de Instagram:', error);
            }
        }

        obtenerMediosDeInstagram();
    }, []);

    return (
        <div>
            {mediaData.map((media) => (
                <div key={media.id}>
                    <img src={media.media_url} alt={media.caption} />
                    <p>ID: {media.id}</p>
                    <p>Tipo de medio: {media.media_type}</p>
                    <p>Descripción: {media.caption}</p>
                    <p>Enlace permanente: {media.permalink}</p>
                </div>
            ))}
        </div>
    );
}

export default GaleryInstagram;
