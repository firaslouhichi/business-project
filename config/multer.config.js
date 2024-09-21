import path from "path";
import multer from "multer";

// Import your filters
import imageFilter from "./filterImage.js";
import pdfFilter from "./filterPDF.js";

// Create Multer configuration
export const createMulterConfig = (filter) => {
  return multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "uploads");
      },
      filename: (req, file, cb) => {
        const date = new Date();
        const formattedDate = `${
          date.getMonth() + 1
        }-${date.getDate()}-${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
        cb(null, `${formattedDate}${path.extname(file.originalname)}`);
        console.log("file", formattedDate, path.extname(file.originalname));
      },
    }),
    fileFilter: filter,
  });
};

export default { imageFilter, pdfFilter };
