import { useState } from "react";

interface Props {
  items: string[];
  titulo: string;
  quandoSelecionarItem: (item: string) => void;
}

function ListaItems({ items, titulo, quandoSelecionarItem }: Props) {
  const [indiceItem, defIndiceItem] = useState(-1);

  return (
    <>
      <div className="col-10 my-5 p-5 mx-auto rounded">
        <div className="card text-light mx-2 bg-dark">
          <div className="card-body">
            <h1>{titulo}</h1>
            {items.length === 0 && <p>Nenhum item selecionado</p>}
            <ul className="list-group">
              {items.map((item, indice) => (
                <li
                  className={
                    indiceItem === indice
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  key={item}
                  onClick={() => {
                    defIndiceItem(indice);
                    quandoSelecionarItem(item);
                  }}
                >
                  <div className="row cursor-pointer ">
                    <div className="col-11 my-auto">{item}</div>
                    <div className="col-1">
                      <p
                        className={
                          indiceItem === indice
                            ? "my-auto text-center bg-light text-dark rounded p-1 shadow-sm"
                            : "my-auto text-center bg-dark text-light rounded p-1"
                        }
                      >
                        {indice + 1}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaItems;
