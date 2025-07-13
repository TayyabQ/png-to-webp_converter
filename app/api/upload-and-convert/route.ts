import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const UPLOAD_DIR = path.resolve(process.cwd(), 'public/uploads');

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    if (!file || typeof file === 'string') {
      return NextResponse.json({ success: false, message: 'No file uploaded' });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name;
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }
    const inputPath = path.join(UPLOAD_DIR, fileName);
    fs.writeFileSync(inputPath, buffer);
    const outputName = `converted-${fileName}.webp`;
    const outputPath = path.join(UPLOAD_DIR, outputName);
    await sharp(inputPath).toFormat('webp', { quality: 80 }).toFile(outputPath);
    return NextResponse.json({
      success: true,
      originalName: fileName,
      convertedName: outputName,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
};
