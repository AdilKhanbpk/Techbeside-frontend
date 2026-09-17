import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import QATestingClient from "./QATestingClient";

export const metadata = servicesMetadata.qaTesting;

const Page = () => {
  return <QATestingClient />;
};

export default Page;
