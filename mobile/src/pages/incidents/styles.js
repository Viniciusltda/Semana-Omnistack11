import {StyleSheet} from 'react-native';
import constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: constants.statusBarHeight + 20,
        
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    headerText: {
        fontSize: 15,
        color: '#737380',

    },

    textBold: {
        fontWeight: 'bold',

    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',

    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',

    },

    incidentList: {
        marginTop: 32,

    },

    incident: {
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 16,

    },

    incidentProp: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#41414d',

    },

    incidentValue: {
        marginTop: 8,
        marginBottom: 24,
        fontSize: 15,
        color: '#737380',

    },

    detailButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    detailText: {
        color: '#e02041',
        fontWeight: 'bold',
        fontSize: 16,
        
    },
});