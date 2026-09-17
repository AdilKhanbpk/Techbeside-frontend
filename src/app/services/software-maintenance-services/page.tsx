import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import SoftwareMaintenanceClient from "./SoftwareMaintenanceClient";

export const metadata = servicesMetadata.softwareMaintenance;

const Page = () => {
  return <SoftwareMaintenanceClient />;
};

export default Page;
