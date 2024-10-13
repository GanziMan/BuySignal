"use client";
import multer from "multer";

import path from "path";
import fs from "fs";

interface VideoUploadResponse {
  message: string;
  code: string;
}
export default async function VideoUpload(
  video: Express.Multer.File
): Promise<VideoUploadResponse> {
  // 파일 업로드 디렉토리 설정
  const uploadDir = path.join(process.cwd(), "uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, callback) {
        callback(null, uploadDir);
      },
      filename(req, file, callback) {
        callback(null, Date.now() + "-" + file.originalname);
      },
    }),
    limits: { fileSize: 3 * 1024 * 1024 }, //3기가 제한
  });

  return {
    message: "",
    code: "",
  };
}
