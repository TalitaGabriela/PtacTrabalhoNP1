import { useState } from "react";
import { useEffect } from "react";
import "./style.css";

export default function towatch() {//uso de componente//
    // uso de 3 props em cada objeto onde cada uma recebe um useState(estado)//
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(listaLocalStorage || []);//useState que utiliza Array//
    const [id, setId] = useState(1);

    useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))}, [lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,   
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
    };

    const remover = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }
    return (
        <div class="container">
            <h1>Lista de Doramas</h1>
            <form onSubmit={salvar}>
                <input type="text"
                    value={atividade}
                    onChange={(e) => { setAtividade(e.target.value) }} />
                <button>ADD</button>
            </form >
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <p>{ativ.atividade}</p>
                        <button onClick={() => remover(ativ.id)}>REMOVE</button>
                    </li>
                </ul>
            )}
        </div>
    );
}