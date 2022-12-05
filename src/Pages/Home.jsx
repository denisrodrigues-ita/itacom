import React from 'react';
import HomeRandom from '../components/HomeRandom';
import styles from './Home.module.css';

const Home = () => {

  return (
    <section className={styles.home}>
      <div>
        <h1>Tudo o que você precisa na cidade de xxxxxxxx,<br></br> você encontra aqui.</h1>
        <h2>Empresas em destaque.</h2>
      </div>
      <div className={"container animeLeft"}>
        <HomeRandom />
      </div>
    </section >
  );
}

export default Home;