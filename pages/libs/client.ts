// libs/client.ts

import { createClient } from "microcms-js-sdk";

export default createClient({
  serviceDomain: process.env.SEARVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

