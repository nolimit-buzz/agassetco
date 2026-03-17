import axios from 'axios';

/**
 * Pre-configured Axios instance for Strapi API calls.
 * Reads base URL and API token from environment variables.
 *
 * Required env vars:
 *   NEXT_PUBLIC_API_URL  - e.g. https://your-strapi-domain.com
 *   STRAPI_API_TOKEN     - a Strapi read-only API token (server-side only)
 */
const strapi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default strapi;
