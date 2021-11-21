import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#a9a9a9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginTop: 0,
      paddingVertical: 0,
      //borderWidth: 1,
      //borderColor: "#20232a",
      //borderRadius: 1,
      //backgroundColor: "#821426",
      color: "#20232a",
      fontSize: 20,
      fontWeight: "bold"
    },

    button: {
      height: '90%',
      flex: 1,
      color: 'red',
      width: 100,
      margin: 10,
      padding: 0,
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'row'
    },

    space: {
      width: 10,
      height: 10,
    },

    realTitle: {
      marginTop: 0,
      paddingVertical: 0,
      //borderWidth: 1,
      //borderColor: "#20232a",
      //borderRadius: 1,
      //backgroundColor: "#821426",
      color: "#20232a",
      fontSize: 50,
      fontWeight: "bold"
    }
  });

  export default styles;
  