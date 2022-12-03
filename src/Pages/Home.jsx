import React from 'react';
import styles from './Home.module.css';
import emp from '../../Api';

const Home = () => {

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  let arr = [];
  while (arr.length < 9) {
    let seg = null;
    let e = null;
    seg = Object.entries(emp)[getRandomInt(Object.entries(emp).length)][0];
    e = emp[seg][getRandomInt(emp[seg].length)];
    if (!arr.includes(e)) {
      arr.push(e);
    }
  }

  return (
    <section className={styles.home}>
      <div>
        <h1>Tudo o que você precisa na cidade de xxxxxxxx,<br></br> você encontra aqui.</h1>
        <h2>Empresas em destaque.</h2>
      </div>
      <div className={`${styles.grid} container animeLeft`}>
        {arr.map((e) => (
          <div key={e.nome}>
            <img src={e.img} alt={e.nome} />
            <h3>{e?.nome}</h3>
            <p>{e?.telefone}</p>
          </div>
        ))}
      </div>
    </section >
  );
}

export default Home;