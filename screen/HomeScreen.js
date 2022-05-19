import react, {useState} from "react";
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'; 
import DATA from "../data/dummydata";
export default function HomeScreen({navigation}) {
    const [selectedId, setSelectedId] = useState(null);
    const RenderItem = ({item}) =>{
        return (
            <TouchableOpacity  style={styles.item} onPress={()=>{navigation.navigate({name: 'Detail',params: { user: item }})}}>                                                                    
                <Image style={styles.image} source={item.image}/>
                <Text style={styles.tittle}>{item.title}</Text>
            </TouchableOpacity >
        )
    }

    return(
        <SafeAreaView style={styles.container} >
        <FlatList
          data={DATA}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          contentContainerStyle={{paddingLeft:8, paddingRight:8}}
        />
      </SafeAreaView>
    )    
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'stretch',
        backgroundColor: "#f2f1ed",
        justifyContent: 'center',
    },
    item:{
        alignItems: 'flex-start',
        padding: 16,
        borderRadius: 4,
        borderColor: '#000',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 8, height: 8},
        marginTop:4,
    },
    image:{
        width: 64,
        height: 64,
        alignSelf: 'center',
        marginBottom:2,
    },
    tittle:{
        marginBottom: 4,
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 16,
    }
})
