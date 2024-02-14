import {View, Image, StyleSheet} from 'react-native'

export const Logo = () => {
    return <View style={{paddingTop: 50}}>
        <Image 
            style={{width: 150, height: 150}}
            source={{uri: "https://blog.back4app.com/wp-content/uploads/2020/10/react-native-2.png"}}
        />
    </View>
}