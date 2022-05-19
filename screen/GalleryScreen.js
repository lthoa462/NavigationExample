import react, {useState, useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
} from 'react-native';



export default function GalleryScreen(params) {
    let items = Array.apply(null, Array(30)).map((v, i) => {
        return {
          id: i,
        };
      });
    return(
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={(item,index)=>(
                    <View
                        style={{
                        flex: 1,
                        flexDirection: 'column',
                        margin: 1
                        }}>
                        <Image
                        style={styles.imageThumbnail}
                        source={{uri: 'https://loremflickr.com/200/200?random='+index}}
                        />
                    </View>
                )}
                numColumns={3}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
  });
