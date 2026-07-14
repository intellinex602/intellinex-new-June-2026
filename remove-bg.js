const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log("Starting background removal...");
  const inputPath = path.resolve('public/assets/isometric-noc-alt.jpg');
  const outputPath = path.resolve('public/assets/isometric-noc-transparent.png');
  
  try {
    const blob = await removeBackground(inputPath);
    const buffer = await blob.arrayBuffer();
    fs.writeFileSync(outputPath, Buffer.from(buffer));
    console.log("Successfully removed background and saved to " + outputPath);
  } catch (error) {
    console.error("Failed to remove background:", error);
  }
}

main();
