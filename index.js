// Put your images into the 'img' folder
// Run node index.js command
// Check out the newly created WebP images
// inside of the 'converted' folder

const imagemin = require("imagemin"), // The imagemin module.
  webp = require("imagemin-webp"), // imagemin's WebP plugin.
  outputFolder = "./converted", // Output folder
  PNGImages = "./img/*.png", // PNG images
  JPEGImages = "./img/*.jpg"; // JPEG images

imagemin(
  [PNGImages],
  outputFolder,
  {
    plugins: [
      webp({
        lossless: true // Losslessly encode images
      })
    ]
  },
  console.log("Converting PNG images has finished")
);

imagemin(
  [JPEGImages],
  outputFolder,
  {
    plugins: [
      webp({
        quality: 65 // Quality setting from 0 to 100
      })
    ]
  },
  console.log("Converting JPEG images has finished")
);
