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
    username: string;
    caption: string;
    thumbnail_url?: string;
}

export default function Instagram() {
    const [mediaData, setMediaData] = useState<InstagramMedia[]>([]);

    useEffect(() => {
        const fetchMediaData = async () => {
            const accessToken = 'your_access_token';
            const apiUrl = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,username,caption,thumbnail_url&access_token=${accessToken}`;

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
                    username: item.username,
                    caption: item.caption,
                    thumbnail_url: item.thumbnail_url,
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
            <Title title="Instagram" className="text-white mb-4" />
            <div className="flex flex-wrap justify-center gap-4">
                {limitedMediaData.map((media: InstagramMedia, index: number) => (
                    <div key={media.id} className="relative">
                        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 relative overflow-hidden bg-white border border-gray-200">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gray-200"></div>
                            {media.media_type === 'IMAGE' ? (
                                <img src={media.media_url} alt={`Imagen ${index + 1}`} className="absolute inset-0 object-cover w-full h-full" />
                            ) : (
                                <video src={media.media_url} controls className="absolute inset-0 object-cover w-full h-full" />
                            )}
                            <div className="absolute inset-y-0 right-0 w-1 bg-gray-200"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-white p-2">
                            <p className="text-xs font-bold">{media.username}</p>
                            <p className="text-xs">{media.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}


