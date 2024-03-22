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
    const [selectedMedia, setSelectedMedia] = useState<InstagramMedia | null>(null);

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

    const handleClick = (media: InstagramMedia) => {
        setSelectedMedia(media);
    };

    const handleClose = () => {
        setSelectedMedia(null);
    };

    return (
        <Container>
            <Title title="Instagram" className="text-white mb-4" />
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {mediaData.map((media: InstagramMedia, index: number) => (
                    <div key={media.id} className="relative w-30 h-30 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 overflow-hidden bg-white border border-gray-200 cursor-pointer" onClick={() => handleClick(media)}>
                        {media.media_type === 'IMAGE' ? (
                            <img
                                src={media.thumbnail_url || media.media_url}
                                alt={`Imagen ${index + 1}`}
                                className="w-17 h-17 max-h-17" // Ajusta el tamaño máximo de la altura para la miniatura
                                loading="lazy"
                            />
                        ) : (
                            <video
                                src={media.media_url}
                                className="w-full h-auto"
                                controls
                                preload="none"
                            />
                        )}
                        <div className="absolute bottom-0 left-0 w-full bg-white p-2">
                            <p className="text-xs font-bold">{media.username}</p>
                        </div>
                    </div>
                ))}

            </div>
            {selectedMedia && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50" onClick={handleClose}>
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <div className="max-w-screen-sm max-h-screen-sm overflow-hidden bg-white rounded-lg shadow-lg p-4">
                            {selectedMedia.media_type === 'IMAGE' ? (
                                <img src={selectedMedia.media_url} alt="Imagen ampliada" className="w-full h-auto max-w-full max-h-full object-contain" />
                            ) : (
                                <video src={selectedMedia.media_url} className="w-full h-auto max-w-full max-h-full object-contain" controls preload="auto" />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
}
