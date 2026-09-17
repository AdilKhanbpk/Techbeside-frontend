import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import DevOpsClient from "./DevOpsClient";

export const metadata = servicesMetadata.devops;

const Page = () => {
  return <DevOpsClient />;
};

export default Page;
