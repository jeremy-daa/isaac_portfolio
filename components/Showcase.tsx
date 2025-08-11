import * as React from "react";
import { useState } from "react";

import { ImageComponent } from "./ImageComponent";
import { Gallery } from "./Gallery";

export interface ShowcaseProps {
  limit: boolean;
}

export const Showcase: React.SFC<ShowcaseProps> = ({ limit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Define a simple array for local images
  const images = [
    {
      url: "/images/image_1.jpg",
      label: "Isaac's visual world: an ode to classic storytelling",
      description:
        "A black and white still from the 'Art Prisoner' era, capturing Isaac and a collaborator in a raw, intimate setting reminiscent of vintage hip-hop culture. It reflects his fusion of raw emotion and bold, honest storytelling.",
    },
    {
      url: "/images/image_2.jpg",
      label: "Isaac's signature style",
      description:
        "A dynamic studio shot of Isaac, embodying the energy and passion he brings to his music. His sound, rooted in truth, moves between hip-hop and spoken word, a voice for the misunderstood.",
    },
    {
      url: "/images/image_3.jpg",
      label: "Behind the artistry: Isaac in a thoughtful moment",
      description:
        "This close-up captures a moment of introspection, showcasing the depth and soul that Isaac pours into his work. He is an artist who turns pain into poetry and life into rhythm.",
    },
    {
      url: "/images/image_4.jpg",
      label: "Visuals from 'Art Prisoner'",
      description:
        "An evocative visual from his album 'Art Prisoner,' released in 2025 under Azmach Music. The imagery ties directly into the album's theme, highlighting his role as an artist dedicated to his craft.",
    },
    {
      url: "/images/image_5.jpg",
      label: "In the studio: the creative process",
      description:
        "Isaac in his element, surrounded by music production equipment. This image highlights the passion and dedication that fuels his creative process, a core part of his identity.",
    },
    {
      url: "/images/image_6.jpg",
      label: "Night visuals, a glimpse into Isaac's world",
      description:
        "A striking, atmospheric image that showcases Isaac's expressive style and dynamic visual aesthetic. It’s the kind of bold visual direction found in his music videos like 'Hustle'.",
    },
    {
      url: "/images/image_7.jpg",
      label: "Hustle: the visual aesthetic",
      description:
        "A behind-the-scenes shot from the 'Hustle' music video, directed by Kaleb Tewodros and Zelanu Lij. The visuals are a key part of his storytelling, complementing the raw emotion in his music.",
    },
    {
      url: "/images/image_8.jpg",
      label: "Crafting the sound: a voice for the misunderstood",
      description:
        "Isaac in the recording booth, a space where he turns his life experiences into rhythm. This is where his voice, always honest and bold, comes to life.",
    },
  ];

  return (
    <>
      <section className="py-8 col-span-10 col-start-2 col-end-12">
        {limit && (
          <div className="flex flex-row items-center my-4">
            <span className="w-full h-0.5 bg-gray-400 mr-4"></span>
            <h1 className="text-4xl font-light text-gray-700">Showcase</h1>
            <span className="w-full h-0.5 bg-gray-400 ml-4"></span>
          </div>
        )}
        <main className="py-8 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          {images.map((img: any, index: number) => (
            <ImageComponent
              open={() => {
                setIsGalleryOpen(true);
                setCurrentIndex(index);
              }}
              key={index}
              url={img.url}
              label={img.label}
              description={img.description}
            />
          ))}
        </main>
      </section>
      {isGalleryOpen && (
        <Gallery
          currentIndex={currentIndex}
          close={() => {
            setIsGalleryOpen(false);
          }}
          list={images}
        />
      )}
    </>
  );
};