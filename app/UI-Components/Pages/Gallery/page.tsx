"use client"

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import galleryImg1 from '@/public/images/gallery-img1.jpg';
import galleryImg2 from '@/public/images/gallery-img2.jpg';
import galleryImg3 from '@/public/images/gallery-img3.jpg';
import galleryImg4 from '@/public/images/gallery-img4.jpg';
import galleryImg5 from '@/public/images/gallery-img5.jpg';
import galleryImg6 from '@/public/images/gallery-img6.jpg';
import galleryImg7 from '@/public/images/gallery-img7.jpg';
import galleryImg8 from '@/public/images/gallery-img8.jpg';
import galleryImg9 from '@/public/images/gallery-img9.jpg';
import galleryImg10 from '@/public/images/gallery-img10.jpg';
import galleryImg11 from '@/public/images/gallery-img11.jpg';
import galleryImg12 from '@/public/images/gallery-img12.jpg';
import { useState } from 'react';
import { NewsLetter } from '../../Index/Newsletter/page';

const allImages = [
  { src: galleryImg1, alt: 'Gallery Image 1' },
  { src: galleryImg2, alt: 'Gallery Image 2' },
  { src: galleryImg3, alt: 'Gallery Image 3' },
  { src: galleryImg4, alt: 'Gallery Image 4' },
  { src: galleryImg5, alt: 'Gallery Image 5' },
  { src: galleryImg6, alt: 'Gallery Image 6' },
  { src: galleryImg7, alt: 'Gallery Image 7' },
  { src: galleryImg8, alt: 'Gallery Image 8' },
  { src: galleryImg9, alt: 'Gallery Image 9' },
  { src: galleryImg10, alt: 'Gallery Image 10' },
  { src: galleryImg11, alt: 'Gallery Image 11' },
  { src: galleryImg12, alt: 'Gallery Image 12' },
];

// Componente reutilizable para cada imagen de la galería
const GalleryImage = ({
  image,
  index,
  setIndex
}: {
  image: { src: StaticImageData, alt: string },
  index: number, setIndex: (index: number) => void
}) => (

  <div className='gallery-image' onClick={() => setIndex(index)}>
    <Image
      src={image.src}
      alt={image.alt}
      className='rounded-2xl object-cover cursor-pointer w-full h-full'
      placeholder='blur'
    />
  </div>
);

const Gallery = () => {

  const [index, setIndex] = useState(-1);

  const lightboxImages = allImages.map(img => ({ src: img.src.src }));

  return (
    <>
      {/* Banner superior de la sección */}
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-8xl GolosText mt-15'>
          Gallery
        </h1>

        <div className='flex items-center text-xl mt-3'>
          <Link href='/' className='hover:text-prim transition-all duration-300'>
            Home
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <h2 className='GolosText'>
            Gallery
          </h2>
        </div>
      </div>

      <Lightbox
        open={index > -1}
        index={index}
        close={() => setIndex(-1)}
        slides={lightboxImages}
      />

      <div className='px-[8%] lg:px-[12%] py-20'>
        {/* --- Primera Fila --- */}
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='w-full lg:w-1/2'>
            <GalleryImage
              image={allImages[0]}
              index={0}
              setIndex={setIndex}
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
              {allImages.slice(1, 5).map((image, i) => (
                <GalleryImage
                  key={i}
                  image={image}
                  index={1 + i}
                  setIndex={setIndex}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- Segunda Fila --- */}
        <div className='flex flex-col-reverse lg:flex-row gap-5 mt-10'>
          <div className='w-full lg:w-1/2'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
              {allImages.slice(5, 9).map((image, i) => (
                <GalleryImage
                  key={i}
                  image={image}
                  index={5 + i}
                  setIndex={setIndex}
                />
              ))}
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <GalleryImage
              image={allImages[9]}
              index={9}
              setIndex={setIndex}
            />
          </div>
        </div>

        {/* --- Tercera Fila --- */}
        <div className='flex flex-col lg:flex-row gap-5 mt-10'>
          <div className='w-full lg:w-1/2'>
            <GalleryImage
              image={allImages[10]}
              index={10}
              setIndex={setIndex}
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
              {/* Aquí puedes elegir qué imágenes mostrar. Por ejemplo, las últimas 4. */}
              {allImages.slice(8, 12).map((image, i) => (
                <GalleryImage
                  key={i}
                  image={image}
                  index={8 + i}
                  setIndex={setIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
    </>
  )
}

export default Gallery