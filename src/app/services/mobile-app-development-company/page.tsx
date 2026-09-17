import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import MobileAppDevelopmentClient from "./MobileAppDevelopmentClient";

export const metadata = servicesMetadata.mobileApp;

const Page = () => {
  return <MobileAppDevelopmentClient />;
};

export default Page;
