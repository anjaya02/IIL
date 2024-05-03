import React from "react";
import { Header } from "../components/Header";
import { CvForm } from "../components/CvForm";

export const CvGeneration = () => {
  return (
    <div>
      <Header />

      <div className="">
        <CvForm />
      </div>
    </div>
  );
};
