import { Cloudinary } from '@cloudinary/url-gen';

// Initialize Cloudinary instance once
export const cld = new Cloudinary({
  cloud: { 
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }
});