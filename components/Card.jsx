import React  from "react";
import { Text , StyleSheet } from 'react-native';
import {Card, Title ,Paragraph } from 'react-native-paper';
  
const Carta = (props) => {

    const { title, text } = props
      
    return(
         
      <Card style={Styles.cartita}>
      <Card.Content style={Styles.container}>
        <Title style={Styles.title}>{title}</Title>
        <Paragraph style={Styles.paragraph}>{text} </Paragraph>
      </Card.Content>
    </Card>
         
    )
}



export default Carta
  
const Styles = StyleSheet.create({
  container :{
    alignContent:'center',
    margin:0,
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    borderRadius: 4 ,
    backgroundColor: ("#008b8b"),
    opacity: '70%', 
    
    

},
paragraph: {
fontSize: 14,
color:'white', 
textAlign: 'center',
paddingLeft: 2,
paddingHorizontal: 2,
paddingBottom :12,
marginTop:15,
marginRight:20


},
title:{
fontSize: 33,
textAlign: 'center',
padding: 10,
marginTop:5,
color:'#483d8b'
    
},
cartita:{
  margin: 20,
  borderColor: 'lightblue'
 
}
});
