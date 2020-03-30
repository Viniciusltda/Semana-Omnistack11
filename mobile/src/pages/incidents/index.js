import React, {useState, useEffect} from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';

import Logo from '../../assets/logo.png';
import Style from './styles';

export default function incidentsList(){
    const navigate = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function detailPage(incident) {
        navigate.navigate('Details', {incident});

    }

    async function loadIncidents(){
        if(loading){
            return;

        }

        if(total > 0 && incidents.length === total){
            return;

        }

        setLoading(true);

        const response = await api.get('incidents', {params: {page}});

        setIncidents([... incidents, ... response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={Style.container}>
            <View style={Style.header}>
                <Image source={Logo}></Image>
                <Text style={Style.headerText}>
                    Total de <Text style={Style.textBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={Style.title}>Bem-Vindo!</Text>
            <Text style={Style.description}>Escolha um dos casos abaixo e salve o dia!</Text>

            <FlatList data={incidents}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={loadIncidents}
            onEndReachedThreshold={0.2}
            style={Style.incidentList}
            renderItem={({item: incident}) => (
                <View style={Style.incident}>
                    <Text style={Style.incidentProp}>ONG:</Text>
                    <Text style={Style.incidentValue}>{incident.name}</Text>

                    <Text style={Style.incidentProp}>CASO:</Text>
                    <Text style={Style.incidentValue}>{incident.title}</Text>

                    <Text style={Style.incidentProp}>VALOR:</Text>
                    <Text style={Style.incidentValue}>{Intl.NumberFormat(
                        'pt-BR', 
                        {style: 'currency', currency:'BRL'}
                    ).format(incident.value)}</Text>


                    <TouchableOpacity style={Style.detailButton} onPress={() => detailPage(incident)}>
                        <Text style={Style.detailText}>Ver Detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041"></Feather>
                    </TouchableOpacity>
                </View>
            )} />
            
        </View>

    );
}