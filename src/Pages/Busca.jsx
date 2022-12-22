import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Busca.module.css";
import RandomCompanies from "../components/RandomCompanies";

const Busca = () => {
  const { pesquisa } = useParams();

  return (
    <section className={`container ${styles.busca}`}>
      <RandomCompanies type={"search"} pesquisa={pesquisa} />
    </section>
  );
};

export default Busca;
