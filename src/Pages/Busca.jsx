import React from "react";
import { useParams } from "react-router-dom";
import emp from "../../Api/";
import styles from "./Busca.module.css";
import Modal from "react-modal";
import {
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";

let arr = [];

// Modal react empresas
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Busca = () => {
  let subtitle;
  const { pesquisa } = useParams();
  const [search, setSearch] = React.useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modal, setModal] = React.useState("");
  const [modalEmpresa, setModalEmpresa] = React.useState({});

  React.useEffect(() => {
    let busca = [];
    Object.entries(emp).forEach((element) => {
      element[1].forEach((e) => {
        if (
          e.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
          e.tipo.toLowerCase().includes(pesquisa.toLowerCase())
        ) {
          busca.push(e);
        }
        setSearch(busca);
      });
    });
  }, [pesquisa]);

  const openModal = ({ currentTarget }) => {
    setIsOpen(true);
    setModal(currentTarget.querySelector("#h3").textContent);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Função para pegar o nome da empresa que foi clicada
  React.useEffect(() => {
    search.forEach((e) => {
      if (e.nome === modal) {
        setModalEmpresa(e);
      }
    });
  }, [modal]);

  return (
    <section className={`container ${styles.busca}`}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
      >
        <div
          id="modal"
          className={styles.modal}
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          <button className={styles.closed} onClick={closeModal}>
            <AiOutlineClose />
          </button>
          <div>
            <img src={modalEmpresa?.img} alt={modalEmpresa?.nome} />
          </div>
          <div>
            <p>{modalEmpresa?.nome}</p>
            <p>{modalEmpresa?.cidade}</p>
            <p>{modalEmpresa?.endereco}</p>
            <p>{modalEmpresa?.telefone}</p>
            <div className={styles.socialMedias}>
              <div>
                <p>
                  <a href={modalEmpresa?.facebook} target="_blank">
                    <AiFillFacebook />
                  </a>
                </p>
                <p>
                  <a href={modalEmpresa?.instagram} target="_blank">
                    <AiFillInstagram />
                  </a>
                </p>
                <p>
                  <a
                    href={`https://wa.me/${modalEmpresa?.whatsapp}`}
                    target="_blank"
                  >
                    <AiOutlineWhatsApp />
                  </a>
                </p>
              </div>
              <div>
                <Link to={`/${modalEmpresa.tipo}/${modalEmpresa.nome}`}>
                  <button>Ver Mais</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {search.length === 0 ? (
        <p>Nenhuma resultado encontrado</p>
      ) : (
        search.map((e) => (
          <div className={styles.a} key={e.nome} onClick={openModal}>
            <img src={e.img} />
            <h3 id="h3">{e?.nome}</h3>
            <p>{e?.telefone}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default Busca;
