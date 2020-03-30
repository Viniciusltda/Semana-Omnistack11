import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import Style from './styles';
import Logo from '../../assets/logo.png';

export default function details(){
    const navigate = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}", com o valor de ${Intl.NumberFormat('pt-BR',
    {style: 'currency', currency: 'BRL'}).format(incident.value)}.`;

    function navigateBack(){
        navigate.goBack();

    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [`${incident.email}`],
            body: message,

        });

    }

    function opWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);

    }

    return (
        <View style={Style.container}>
            <View style={Style.header}>
                <Image source={Logo}></Image>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041"></Feather>

                </TouchableOpacity>
            </View>

            <View style={Style.incident}>
                <Text style={[Style.incidentProp, {marginTop: 0}]}>ONG:</Text>
                <Text style={Style.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={Style.incidentProp}>CASO:</Text>
                <Text style={Style.incidentValue}>{incident.title}</Text>

                <Text style={Style.incidentProp}>VALOR:</Text>
    <Text style={Style.incidentValue}>{Intl.NumberFormat(
        'pt-BR', {style: 'currency', currency: 'BRL'}
        ).format(incident.value)}</Text>

            </View>

            <View style={Style.contact}>
                <Text style={Style.heroTitle}>Salve o dia!</Text>
                <Text style={Style.heroTitle}>Seja o herói desse caso!</Text>
                <Text style={Style.heroContact}>Entre em contato.</Text>

                <View style={Style.actions}>
                    <TouchableOpacity style={Style.actionBtt} onPress={opWhatsapp}>
                        <Text style={Style.actionTxt}>Whatsapp</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={Style.actionBtt} onPress={sendMail}>
                        <Text style={Style.actionTxt}>E-mail</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );
}