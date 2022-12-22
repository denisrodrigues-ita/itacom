import React from "react";
import RandomCompanies from "../components/RandomCompanies";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={`${styles.home} container animeLeft`}>
      <div>
        <h1>
          Tudo o que você precisa na cidade de xxxxxxxx,<br></br> você encontra
          aqui.
        </h1>
        <h2>Empresas em destaque.</h2>
      </div>
      <div>
        <RandomCompanies type={"home"} />
      </div>
    </section>
  );
};

export default Home;
