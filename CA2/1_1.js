// const zlib = require('zlib');
import zlib from 'zlib';
const originalText = 'Hello, world!';

zlib.gzip(originalText, (err, compressedData) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Compressed data: ${compressedData.toString('base64')}`);

    zlib.gunzip(compressedData, (err, decompressedData) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Decompressed data: ${decompressedData.toString()}`);
      }
    });
  }
});