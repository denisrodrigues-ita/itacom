import React from 'react';
import { Link } from 'react-router-dom';
import emp from '../../Api';
import styles from './HomeRandom.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from './Modal';

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
  const [modal, setModal] = React.useState('');
  const [modalEmpresa, setModalEmpresa] = React.useState({});

  // Função para pegar o nome da empresa que foi clicada
  React.useEffect(() => {
    arr.forEach((item) => {
      if (item.nome === modal) {
        setModalEmpresa(item);
      }
    })
  }, [modal]);

  // Função para abrir o modal e adicionar a classe active
  const handleClick = ({ currentTarget }) => {
    setModal(currentTarget.querySelector('#h3').textContent);
    const modal = document.querySelector('#modal');
    modal.classList.add(styles.active);
  };

  // Função para fechar o modal
  const handleClose = () => {
    const btnClose = document.querySelector('#modal');
    btnClose.classList.remove(styles.active);
  }

  return (
    <div className={styles.flx}>
      <div id='modal' className={styles.modal}>
        <button className={styles.closed} onClick={handleClose}><AiOutlineClose /></button>
        <div>
          <img src={modalEmpresa?.img} alt={modalEmpresa?.nome} />
        </div>
        <div>
          <p>{modalEmpresa?.nome}</p>
          <p>{modalEmpresa?.endereco}</p>
          <p>{modalEmpresa?.cidade}</p>
          <p>{modalEmpresa?.telefone}</p>
          <Link to={"/"}><button>Ver Mais</button></Link>
        </div>
      </div>


      {arr.map((e) => (
        <div key={e.nome} className={styles.a} onClick={handleClick}>
          <img src={e.img} alt={e.nome} />
          <h3 id='h3'>{e?.nome}</h3>
          <p>{e?.telefone}</p>
        </div>
      ))}
    </div>
  );
}

export { HomeRandom, arr };