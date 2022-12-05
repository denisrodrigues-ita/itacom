import React from 'react';
import emp from '../../Api';

const getRandomInt = (max) => Math.floor(Math.random() * max);

let count = 0;
Object.entries(emp).forEach((item) => {
  item[1].forEach((i) => {
    count++;
  });
});

let arr = [];
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
    <>
      {arr.map((e) => (
        <div key={e.nome}>
          <img src={e.img} alt={e.nome} />
          <h3>{e?.nome}</h3>
          <p>{e?.telefone}</p>
        </div>
      ))}
    </>
  )
}

export default HomeRandom;