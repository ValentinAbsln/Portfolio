import sharp from 'sharp';

const width = 32;
const height = 32;
const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="transparent"/>
  <path 
    d="M6 4 L16 28 L26 4" 
    stroke="black" 
    stroke-width="4" 
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;

sharp(Buffer.from(svg))
  .resize(32, 32)
  .png()
  .toFile('public/favicon.png')
  .then(() => console.log('Favicon PNG created successfully'))
  .catch(err => console.error('Error:', err));
