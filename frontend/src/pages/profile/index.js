import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Api from '../../services/api';

import './styles.css';
import Logo from '../../assets/logo.svg';
import {FiLogOut} from 'react-icons/fi';
import {FiTrash2} from 'react-icons/fi';


export default function Profile(){
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        Api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDelete(id) {
        try{
            await Api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,

                }
            });

            setIncidents(incidents.filter(incidents => incidents.id !== id));

        } catch (err){
            alert('Erro ao deletar.');

        }
    }

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();

        history.push('/');

    }

    return (
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Logo Be the Hero"></img>
    <span>Bem-vinda, {ongName}</span>

                <Link to="/incidents/new" className="button" id="button">Cadastrar novo caso</Link>
                <a href="#" onClick={handleLogout} className="backLink"><FiLogOut size={16} color="#e02041" />Fazer Logout</a>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incidents.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(incidents.value)}</p>

                        <button type="button" onClick={() => handleDelete(incidents.id)}><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}