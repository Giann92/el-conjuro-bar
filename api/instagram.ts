// pages/api/instagram.ts

import { NextApiRequest, NextApiResponse } from 'next';

interface InstagramMedia {
  id: string;
  media_type: string;
  media_url: string;
  caption: string;
  permalink: string;
  thumbnail_url: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const accessToken = 'IGQWRPLTJOeV9CS3BfdVBpN1ptSktVODNzcm05MHQ1eGF2bGllazVkdllRYUdBQlZAQV2xDNndoc2pXSGxnVFU1OHBoMDJjUnhzQVdRTTFhUGlGX21wclhWQUpNQk44ZAUt0cnZAuWE54RzUwVHN3SzZADVU1WUEFDY2cZD';
    const userId = 'elconjuro_pizzabar';
    console.log('TOKEN_DE_ACCESO:', accessToken);
    console.log('USER_ID_DE_LA_CUENTA:', userId);

    const apiUrl = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=${accessToken}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Error al obtener medios de Instagram');
    }
    const mediaData: InstagramMedia[] = await response.json();

    res.status(200).json(mediaData);
  } catch (error) {
    console.error('Error al obtener medios de Instagram:', error);
    res.status(500).json({ error: 'Error al obtener medios de Instagram' });
  }
}
