import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [react(),astroImageTools]
});