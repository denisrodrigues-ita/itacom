import React from "react";
import { useParams } from "react-router-dom";
import emp from "../../Api/";

const Busca = () => {
  const { pesquisa } = useParams();
  const [search, setSearch] = React.useState([]);

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
  console.log(search);

  return (
    <section>
      {search.length === 0 ? (
        <p>Nenhuma resultado encontrado</p>
      ) : (
        search.map((e) => (
          <div key={e.nome}>
            <img src={e.img} />
            <p>{e?.nome}</p>
            <p>{e?.telefone}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default Busca;
