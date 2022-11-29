import React from 'react'
import styles from './Home.module.css'
import emp from '../../Api'

const Home = () => {
  return (
    <section className={styles.home}>
      <div>
        <h1>Tudo o que você precisa na cidade de xxxxxxxx,<br></br> você encontra aqui.</h1>
        <h2>Empresas em destaque.</h2>
      </div>
      <div className={styles.flx}>
        {emp.mercado.map(item => (
          <div key={item.nome}>
            <img src={item.img} alt={item.nome} />
            <p>{item?.nome}</p>
            <p>{item?.telefone}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home