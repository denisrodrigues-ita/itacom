import React from 'react';
import { Link } from 'react-router-dom';
import emp from '../../Api';
import styles from './HomeRandom.module.css';

const getRandomInt = (max) => Math.floor(Math.random() * max);
let arr = [];
let count = 0;

// implementando count para quando tiver menos de 9 empresas não bugar
Object.entries(emp).forEach((item) => {
  item[1].forEach((i) => {
    count++;
  });
});

// Função para gerar 9 empresas aleatórias
// Quando tiver menos de 9 empresas, usar o count
const randomHome = () => {
  if (count < 9) {
    while (arr.length < count) {
      let seg = null;
      let e = null;
      seg = Object.entries(emp)[getRandomInt(Object.entries(emp).length)][0];
      e = emp[seg][getRandomInt(emp[seg].length)];
      if (!arr.includes(e)) {
        arr.push(e);
      }
    }
  }
  else {
    while (arr.length < 9) {
      let seg = null;
      let e = null;
      seg = Object.entries(emp)[getRandomInt(Object.entries(emp).length)][0];
      e = emp[seg][getRandomInt(emp[seg].length)];
      if (!arr.includes(e)) {
        arr.push(e);
      }
    }
  }
};
randomHome();

const HomeRandom = () => {
  return (
    <div className={styles.flx}>
      {arr.map((e) => (
        <div key={e.nome} className={styles.a}>
          <Link to="#">
            <img src={e.img} alt={e.nome} />
            <h3>{e?.nome}</h3>
            <p>{e?.telefone}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomeRandom;