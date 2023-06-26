"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
const ClientUseSearchParams = () => {
  const searchParams=useSearchParams();
  const name = searchParams.get("name");
  const pageNumber = searchParams.get("page");
  console.log("name:", name);
  console.log("pageNumber:", pageNumber);
  return <div>Name:{name} <br />pageNumber:{pageNumber} </div>;
};
export default ClientUseSearchParams;
