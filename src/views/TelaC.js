import React from "react";
import TextoCentral from "../components/TextoCentral";
import { Image, View } from "react-native";
import NextStack from "../components/NextStack";
import GoBackStack from "../components/GoBackStack";

export default props => (
    <View style={{ flex: 1, backgroundColor: '#5703ab', justifyContent: 'center', alignItems: 'center' }}>
        <TextoCentral corDaTela='#ff6f00'>
            Ravena Moon
        </TextoCentral>
        <Image style={{
            width: 400,
            height: 400,
            aspectRatio: 1,
            resizeMode: 'cover',
            borderRadius: 200,
            margin: 20
        }} source={{ uri: "https://i.imgur.com/fxEU3SU.jpeg" }} />
        <NextStack {...props} title='Back to HomeScreen' component='TelaA' />
        <GoBackStack {...props} title='Go Back' />
    </View>
)