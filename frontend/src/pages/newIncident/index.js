import React, {useState} from 'react';
import Api from '../../services/api';

import Logo from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

export default function NewIncidents() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleAddcase(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,

        }

        try {
            await Api.post('incidents', data, {
                headers: {
                    Authorization: ongId,

                }
            });

            history.push('/profile');

        } catch (err){
            alert('Erro ao criar novo caso.');

        }
    }

    return (
        <div className="newInc-container">
            <div className="content">
                <section className="explain">
                    <img src={Logo} alt="Logo Be The Hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o seu caso detalhadamente para
                        encontrar um herói para resolver isso.
                    </p>
                    <Link to="/profile" className="backLink"><FiArrowLeft size={16} color="#e02041" />Voltar para Home</Link>

                </section>
                <form onSubmit={handleAddcase}>
                    <input placeholder="Título do Caso" value={title} onChange={e => setTitle(e.target.value)}></input>
                    <textarea placeholder="Descrição do caso" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    <input placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)}></input>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>

    );
}