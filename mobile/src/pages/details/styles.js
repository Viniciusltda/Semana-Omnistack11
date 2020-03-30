import {StyleSheet} from 'react-native';
import constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: constants.statusBarHeight + 20,

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    incident: {
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 16,
        marginTop: 48,

    },

    incidentProp: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#41414d',
        marginTop: 24,

    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',

    },

    contact: {
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 16,
    },

    heroTitle: {
        color: '#13131a',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,

    },

    heroContact: {
        fontSize: 16,
        marginTop: 16,
        color: '#737380',

    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    actionBtt: {
        backgroundColor: '#e02041',
        width: '48%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },

    actionTxt: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',

    }


});