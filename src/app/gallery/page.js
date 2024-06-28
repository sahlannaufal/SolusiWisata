import CardGallery from '@/asset/card/CardGallery'
const images = [
  '/foto1.jpg',
  '/foto2.jpg',
  '/foto3.jpg',
  // Tambahkan lebih banyak gambar sesuai kebutuhan
];

export default function Gallery() {
  return (
    <div>
      <div className='container mx-auto pb-8 md:px-0 lg:px-40'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Gallery</h1>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {images.map((src, index) => (
            <div key={index} className='relative'>
            <CardGallery nama='Family Gathering' foto={src} />
              {/* <img src={src} alt={`Gallery image ${index + 1}`} className='w-full h-auto rounded-lg shadow-md' /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
