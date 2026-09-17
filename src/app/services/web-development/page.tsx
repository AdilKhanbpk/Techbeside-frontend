import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import WebDevelopmentClient from "./WebDevelopmentClient";

export const metadata = servicesMetadata.webDevelopment;

const Page = () => {
  return <WebDevelopmentClient />;
};

export default Page;
