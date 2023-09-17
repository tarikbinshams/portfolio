const BACKEND_API_BASE_URL: any = process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL;
const BACKEND_API_PUBLIC_URL: any = process.env.NEXT_PUBLIC_BACKEND_API_PUBLIC_URL;
const WORKING_PERIOD: any = process.env.NEXT_PUBLIC_WORKING_PERIOD;
const DISCORD_API_URL: any = process.env.NEXT_PUBLIC_DISCORD_API_URL;
const IMAGE_API_URL: any = process.env.NEXT_PUBLIC_IMAGE_API_URL;
const PEER_HOST: any = process.env.NEXT_PUBLIC_PEER_HOST;
const PEER_PORT: any = process.env.NEXT_PUBLIC_PEER_PORT;
const IS_PRODUCTION: any =
  process.env.NEXT_PUBLIC_IS_PRODUCTION == "yes" ? true : false;
const FILE_DRIVE = "public";
const FILE_DRIVE_TYPE = "remote";
const FRONTEND_API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

let config = {
  WORKING_PERIOD,
  BACKEND_API_BASE_URL,
  BACKEND_API_PUBLIC_URL,
  FILE_DRIVE,
  FILE_DRIVE_TYPE,
  DISCORD_API_URL,
  IMAGE_API_URL,
  PEER_HOST,
  PEER_PORT,
  IS_PRODUCTION,
  FRONTEND_API_BASE_URL,
};

export default config;