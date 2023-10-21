import { useState, useEffect } from "react";
import "./style.css";

export default function ToWatch() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [count, setCount] = useState(0);
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(listaLocalStorage || []);
    const [id, setId] = useState(1);
    document.title = `Lista Dorama`

    useEffect(() => {
        localStorage.setItem("Lista", JSON.stringify(lista));
        if (count <= 0) { 
            document.title = `LISTA DORAMA`;
        } else if (count == 1) {
            document.title = `SUA LISTA TEM ${count} DORAMA`;
        } else if (count > 1) { 
            document.title = `SUA LISTA TEM ${count} DORAMAS`;
        }
    }, [lista, count]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, { atividade: atividade, id: id }]);
        setId(id + 1);
        setAtividade("");
        setCount(count + 1);
    };

    const remover = (id) => {
        setLista(lista.filter((ativ) => ativ.id !== id));
        setCount(count - 1);
    }

    return (
        <div className="container">
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
