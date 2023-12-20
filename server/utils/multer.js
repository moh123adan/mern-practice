import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Get the file extension
    const [filename, extension] = file.originalname.split(".");

    // Generate a unique filename with the current timestamp and extension
    const uniqueFilename = `${Date.now()}.${extension}`;
    // const newFile = Date.now() +file.originalname;

    cb(null, uniqueFilename); ///   pi.png ==? ["pi", "png"]
  },
});

export const upload = multer({ storage });
