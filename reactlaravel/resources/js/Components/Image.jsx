import { Typography } from "@material-tailwind/react";

export function ImgWithCaption({src,caption}) {
  return (
    <figure className="md:w-96 md:me-3 w-full  float-left">
      <img
        className="rounded-lg  object-cover object-center "
        src={src}
        alt="nature image"
      />
      <Typography as="caption" variant="small" className="mb-4 mt-2 text-center text-gray-600 font-normal">
          {caption}
      </Typography>
    </figure>
  );
}
