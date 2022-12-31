import React from 'react'
import { Image, TouchableOpacity, View ,Text, StyleSheet, TextInput} from 'react-native'

 const Header = ()=>{
    return(
        <View style={styles.header}>
<View style={styles.imageContainer}>
<Image style={styles.image} resizeMode='contain' source={require('../assets/hospicheck.png')} height="40" width="40"  />

</View>
        <View style={styles.link} >
<TouchableOpacity style={styles.linkTab}>
  <Text style={styles.linkText}>Home</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.linkTab}>
  <Text style={styles.linkText}>FEATURES</Text>
</TouchableOpacity>
        </View>
        <View style={styles.action}>
            <TextInput style={styles.search} placeholder="Search" />
            <View><Text style={styles.linkText}>EN  </Text></View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:25,
    elevation:4,
    backgroundColor:"#fff",
    marginVertical:20,
    width:'100%'
    },
    link:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    linkTab:{
        marginHorizontal:10,
    },
    linkText:{
        fontSize:18,
        fontWeight:'400',
        textTransform:"uppercase"
    },
    action:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    image:{
        flex: 1,
        width: 60,
        height: 80,
        resizeMode: 'cover',
        backgroundColor:'red',
        width:'100%'
    },
    imageContainer:{
width:'30%'
    },
    search:{
        paddingHorizontal:10,
        marginHorizontal:10,
        height:45,
        width:180,
        borderColor:'#77E17A',
        borderRadius:6,
        fontSize:16,
        borderWidth:0.7
    }
})

export default Header;