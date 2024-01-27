import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pagehead: {
        flex: 0,
        backgroundColor: 'yellow',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '5%',
    },
    titlehead: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textinstructions: {
        fontSize: 18,
        fontWeight: 'regular',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hallpasstext: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    pageheadfont: {
    fontSize: 30,
    fontWeight: 'normal',
    fontVariant: 'small-caps',
},
    input: {
        width: '80%',
        flex: .08,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
        margin: 15,
        height: '5%',
    },
    button: {
        backgroundColor: 'yellow',
        borderRadius: 10,
        padding: 20,
        fontsize: 15,
        width: '50%',
        alignItems: 'center',
    },
    XXXXXpage2head: {
        fontsize: 15,
        width: '50%',
        alignItems: 'center',
    },
    hallpassvertical: {
        backgroundColor: 'lightblue',
        alignItems: 'right',
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        height:'90%',
    },

    passrotate: {
        textAlign: 'right',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'stretch',
        transform: [{ rotateX: '0deg' }, { rotateZ: '1.6rad' }],
        fontSize: 50,
    },
    hallpasstext: {
        fontSize: 22,
        marginBottom: 40,
        textAlign: 'center',
    },
    signature: {
        width: 200,
        height: 40,
        textAlign: 'left',
    },
    signatureBox: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        width: 210,
        height: 50,
    },
});
export default styles;