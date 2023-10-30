import React from "react";
import TypesStyles from "./Types.module.scss";
import { useParams } from "react-router-dom";
import TypesBanner from "./TypesBanner";

export default function Types() {
  // từ thanh URL
  const { jobtype, id } = useParams();
  console.log("Loại công việc :", jobtype);
  console.log("ID công việc :", id);
  return (
    <div className={`${TypesStyles.types}`}>
      <TypesBanner jobtype={jobtype} id={id} />
    </div>
  );
}
