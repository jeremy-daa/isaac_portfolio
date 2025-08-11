import * as React from "react";
import Image from "next/image";

export interface ImageComponentProps {
  open: Function;
  url: string;
  label: string;
  description: string;
}

const firebaseLoader = (props: any) => {
  return props.src.toString();
};

export const ImageComponent: React.SFC<ImageComponentProps> = (
  ImageComponentProps
) => {
  return (
    <>
      <div
        className="group relative m-0 p-0"
        onClick={() => {
          ImageComponentProps.open();
        }}
      >
        <Image
          loader={firebaseLoader}
          src={ImageComponentProps.url}
          alt={ImageComponentProps.label}
          width={600}
          height={600}
          className="cursor-pointer object-cover w-full filter brightness-90 hover:brightness-110 transition-all duration-200"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8d/NPPQAIRAMk5fq4pgAAAABJRU5ErkJggg=="
        />
      </div>
    </>
  );
};
