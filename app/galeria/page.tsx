
import * as cloudinary from 'cloudinary';
import { CloudinaryImage } from '@/components/cloudinary-image';

// Tipo para el resultado de la búsqueda
export type SearchResult = {
  public_id: string;
  tags: string[];
};

// Configurar Cloudinary
cloudinary.v2.config({
  cloud_name: 'dusxrzrig',
  api_key: '178541951188891',
  api_secret: 'iPD7piQj0N64Yq-q1lGQT8AOuys'
});

// Componente GalleryPage
export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  console.log(results);

  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-1">
        {results.resources.map((result) => (
          <div key={result.public_id} >
            <CloudinaryImage
              key={result.public_id}
              src={`https://res.cloudinary.com/dusxrzrig/image/upload/w_2999,h_5000,c_fill,q_auto:good/v1234/${result.public_id}`}
              alt="an image of something"
              width="3999"
              height="5000"
              sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
              preserveTransformations
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

    </section>
  );
}

