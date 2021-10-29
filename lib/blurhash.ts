import { encode } from "blurhash";
import sharp from "sharp";

export const encodeImageToBlurhash = async (path: string): Promise<string> => {
  const { data: pixels, info: metadata } = await sharp(path)
    .resize({
      fit: sharp.fit.contain,
      width: 500,
    })
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true });

  const clamped = new Uint8ClampedArray(pixels);

  const hash = encode(clamped, metadata.width, metadata.height, 4, 4);

  return hash;
};
