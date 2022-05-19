import react from "react";
import { 
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import UserImage from '../assets/user.png'

export default function CatagoryListItem(params) {
    
    return(
        <View>
            <Text>UserName</Text>
            <Image source={UserImage} />
        </View>
    )
};

const style = StyleSheet.create({

}    
)
