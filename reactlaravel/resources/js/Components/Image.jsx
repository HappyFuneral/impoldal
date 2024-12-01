import { Typography } from "@material-tailwind/react";

export function ImgWithCaption({src,caption}) {
  return (
    <figure className="w-96 h-64 m-4 float-left">
      <img
        className="rounded-lg h-full w-full object-cover object-center"
        src={src}
        alt="nature image"
      />
      <Typography as="caption" variant="small" className="mb-4 mt-2 text-center text-gray-600 font-normal">
          {caption}
      </Typography>
    </figure>
  );
}
