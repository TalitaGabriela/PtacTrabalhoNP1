import { useState } from "react";
import { useEffect } from "react";
import "./style.css";

export default function towatch() {//uso de componente//
    // uso de 3 props em cada objeto onde cada uma recebe um useState(estado)//
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [count, setCount] = useState(0);
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(listaLocalStorage || []);//useState que utiliza Array//
    const [id, setId] = useState(1);

    useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))}, [lista]);

    function contagem() {
        useEffect (() => {
        document.title = `Você clicou ${count} vezes`;
        });
    }

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,   
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
        setCount(count+1)   

        if (contagem == 0){
            return "LISTA VAZIA"
        }
        if (contagem == 1){
            return "SUA LISTA TEM " + {count} + " DORAMA" 
        } 
        if (contagem > 1){
            return "SUA LISTA TEM " + {count} + " DORAMAS" 
        } 
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
                <h2>{contagem}</h2>     
            </form >
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <p>{ativ.atividade}</p>
                        <button onClick={() => remover(ativ.id) + setCount(count-1)}>REMOVE</button>
                    </li>
                </ul>
            )}
        </div>
    );
}