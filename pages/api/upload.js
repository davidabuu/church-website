import formidable from "formidable";
import fs from "fs";
import path from "path";
import mv from "mv";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), "public", "uploads");

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const form = new formidable.IncomingForm();
        form.uploadDir = uploadDir;
        form.keepExtensions = true;

        form.parse(req, (err, fields, files) => {
          if (err) {
            console.error("Error parsing the files", err);
            return res.status(500).json({ error: "Error parsing the files" });
          }

          const oldFilePath = files.file.filepath;
          const newFilePath = path.join(uploadDir, files.file.originalFilename);

          mv(oldFilePath, newFilePath, { mkdirp: true }, (error) => {
            if (error) {
              console.error("Error moving the file", error);
              return res.status(500).json({ error: "Error moving the file" });
            }
            res.status(200).json({
              message: "File uploaded successfully",
              filename: files.file.originalFilename,
            });
          });
        });
      } catch (error) {
        console.error("Unexpected error in POST handler", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    case "GET":
      try {
        fs.readdir(uploadDir, (err, files) => {
          if (err) {
            console.error("Error reading the upload directory", err);
            return res
              .status(500)
              .json({ error: "Error reading the upload directory" });
          }

          const images = files.map((file) => ({
            filename: file,
            url: `/uploads/${file}`,
          }));

          res.status(200).json(images);
        });
      } catch (error) {
        console.error("Unexpected error in GET handler", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    case "DELETE":
      try {
        const { filename } = req.query;
        if (!filename) {
          return res.status(400).json({ error: "Filename is required" });
        }

        const filePath = path.join(uploadDir, filename);

        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting the file", err);
            return res.status(500).json({ error: "Error deleting the file" });
          }
          res.status(200).json({ message: "File deleted successfully" });
        });
      } catch (error) {
        console.error("Unexpected error in DELETE handler", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    default:
      res.setHeader("Allow", ["POST", "GET", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
