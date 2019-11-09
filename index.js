const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

// 'images' is the folder containg images to be coverted
imagemin(["images/*.{jpg,png,jpeg}"], {
  // here we set all the types that we want to convert
  destination: __dirname + "/converted/", // this will be the output folder
  plugins: [
    imageminWebp({
      quality: 75 // here we can set the output quality
      //   resize: {   // we can rezise the image too
      //     width: 1000,
      //     height: 0
      //   }
    })
  ]
}).then(() => {
  console.log("Images optimized");
});

// Put your images into the 'image' folder
// Run node index.js command
// Check out the newly created WebP images
// inside of the 'converted' folder
