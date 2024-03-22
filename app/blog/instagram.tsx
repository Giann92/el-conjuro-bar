'use client'
import Container from "@/components/shared/container";
import Title from "@/components/ui/title";
import axios from "axios";
import { useEffect, useState } from "react";
require('dotenv').config();

interface InstagramMedia {
    id: string;
    media_url: string;
    media_type: string;
    thumbnail_url?: string;
    username: string;
}

export default function Instagram() {
    const [mediaData, setMediaData] = useState<InstagramMedia[]>([]);

    useEffect(() => {
        const fetchMediaData = async () => {
            const accessToken = 'IGQWRNV2pxcXJFUHVWRU96eVVkdDNpQWFmeWM0Q1pIX1pjdnUzb3pFT0Y4SUJkNlNROVZAQNHg5U3p0YUIzTFEwWnZAkUHNSSlNYblE2M055dzh5V1pVUmtvS3A1VVY0N2pNVjQxdlliZADJQMVk2UkpQNFBvR0s0OVUZD';
            const apiUrl = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,thumbnail_url,username&access_token=${accessToken}`;

            try {
                const response = await axios.get(apiUrl);
                const data = response.data;

                if (!data || !data.data || data.data.length === 0) {
                    console.error("La respuesta de la API no contiene los datos esperados:", data);
                    return;
                }

                const media: InstagramMedia[] = data.data.map((item: any) => ({
                    id: item.id,
                    media_url: item.media_url,
                    media_type: item.media_type,
                    thumbnail_url: item.thumbnail_url,
                    username: item.username,
                }));

                console.log("Datos de las imágenes y reels:", media);
                setMediaData(media);
            } catch (error) {
                console.error("Error al obtener datos de Instagram:", error);
            }
        };

        fetchMediaData();
    }, []);

    if (!mediaData || mediaData.length === 0) {
        return <div>No hay miniaturas disponibles.</div>;
    }

    const limitedMediaData = mediaData.slice(0, 10);

    return (
        <Container>
            <Title title="Instagram" className="text-white" />
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {limitedMediaData.map((media: InstagramMedia, index: number) => (
                    <div key={media.id} className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden bg-white border border-gray-200">
                        {media.media_type === 'IMAGE' ? ( // Verificamos si es una imagen
                            <img
                                src={media.thumbnail_url || media.media_url}
                                alt={`Imagen ${index + 1}`}
                                className="absolute inset-0 object-cover w-full h-full"
                                loading="lazy"
                            />
                        ) : (
                            <video // Si es un reel (video), mostramos el video
                                src={media.media_url}
                                className="absolute inset-0 object-cover w-full h-full"
                                controls // Añadimos controles para reproducir el video
                                preload="none" // No precargamos el video automáticamente
                            />
                        )}
                        <div className="absolute bottom-0 left-0 w-full bg-white p-2">
                            <p className="text-xs font-bold">{media.username}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
