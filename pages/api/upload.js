import formidable from "formidable";
import fs from "fs";
import path from "path";

var mv = require("mv");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  switch (req.method) {
    case "POST":
      const form = formidable({});
      form.parse(req, (err, fields, files) => {
        if (err) {
          return res.status(500).json({ error: "Error parsing the files" });
        }

        const oldFilePath = files.file[0].filepath;
        const newFilePath = path.join(
          uploadDir,
          files.file[0].originalFilename
        );

        mv(oldFilePath, newFilePath, { mkdirp: true }, (error) => {
          if (error) {
            return res.status(500).json({ error: "Error moving the file" });
          }
          res.status(200).json({
            message: "File uploaded successfully",
            filename: files.file[0].originalFilename,
          });
        });
      });
      break;

    case "GET":
      fs.readdir(uploadDir, (err, files) => {
        if (err) {
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
      break;

    case "DELETE":
      const { filename } = req.query;
      if (!filename) {
        return res.status(400).json({ error: "Filename is required" });
      }

      const filePath = path.join(uploadDir, filename);

      fs.unlink(filePath, (err) => {
        if (err) {
          return res.status(500).json({ error: "Error deleting the file" });
        }
        res.status(200).json({ message: "File deleted successfully" });
      });
      break;

    default:
      res.setHeader("Allow", ["POST", "GET", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
