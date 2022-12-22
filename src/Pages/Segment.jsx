import React from "react";
import styles from "./Segment.module.css";
import { useParams } from "react-router-dom";
import RandomCompanies from "../components/RandomCompanies";

const Segment = () => {
  const { segment } = useParams();

  return (
    <section className={`${styles.flx} container`}>
      <RandomCompanies type={"segment"} segment={segment} />
    </section>
  );
};

export default Segment;
