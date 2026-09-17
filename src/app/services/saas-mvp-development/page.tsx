import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import SaaSMVPClient from "./SaaSMVPClient";

export const metadata = servicesMetadata.saasMvp;

const Page = () => {
  return <SaaSMVPClient />;
};

export default Page;
