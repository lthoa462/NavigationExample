import react, {useState} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import UserImage from "../assets/user.png";
export default function DetailScreen({navigation, route}) {
    const {user} = route.params;
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={user.image}></Image>
            <Text style={styles.tittle}> {user.title} </Text>
            <Text style={styles.tittle}> {user.birth} </Text>
            <Text style={styles.tittle}> {user.gend} </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: "#f2f1ed",
        justifyContent: 'flex-start',
        padding:20,
    },
    image:{
        width: 128,
        height: 128,
        marginBottom:16,
    },
    tittle:{
        marginBottom: 4,
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 32,
    }
})
