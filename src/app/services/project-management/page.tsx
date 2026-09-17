import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import ProjectManagementClient from "./ProjectManagementClient";

export const metadata = servicesMetadata.projectManagement;

const Page = () => {
  return <ProjectManagementClient />;
};

export default Page;
