import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import MegaMenu from "./globals/MegaMenu";
import HeroContent from "./globals/HeroContent";
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";
import Media from "./collections/Media";
import dotenv from 'dotenv'
import WebInstance from "./globals/WebInstance";
import AboutContent from "./globals/AboutContent";
import ProjectsContent from "./globals/ProjectsContent";

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})
const mockModulePath = path.resolve(__dirname, 'mocks', 'emptyFunction.js');

export default buildConfig({
  admin: {
    user: Users.slug,
    webpack: (config) => ({
      ...config,
      resolve:{
        ...config.resolve,
        extensions: ['.js','.jsx','.ts','.tsx'],
        alias: {
          ...config.resolve.alias,
          fs: mockModulePath,
        }
      }
    })
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Users,
    Media
  ],
  globals: [MegaMenu,WebInstance,HeroContent,AboutContent,ProjectsContent],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
  csrf: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
  plugins: [
    cloudinaryPlugin({ cloudinaryFields: ['file','imageSizes','sizes'] })
  ]
});
