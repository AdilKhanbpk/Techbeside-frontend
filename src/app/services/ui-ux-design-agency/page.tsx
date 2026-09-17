import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import UIUXDesignClient from "./UIUXDesignClient";

export const metadata = servicesMetadata.uiUxDesign;

const Page = () => {
  return <UIUXDesignClient />;
};

export default Page;
