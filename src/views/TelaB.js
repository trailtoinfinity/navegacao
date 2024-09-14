import React from "react";
import TextoCentral from "../components/TextoCentral";
import { Image, View } from "react-native";
import NextStack from "../components/NextStack";
import PushStack from "../components/PushStack";
import GoBackStack from "../components/GoBackStack";

export default props => (
    <View style={{ flex: 1, backgroundColor: '#f56942', justifyContent: 'center', alignItems: 'center' }}>
        <TextoCentral corDaTela='#1a05ff'>
            Ravena Sun
        </TextoCentral>
        <Image style={{
            width: 350,
            height: 350,
            aspectRatio: 1,
            resizeMode: 'cover',
            borderRadius: 200,
            margin: 20
        }} source={{ uri: "https://i.imgur.com/72OiQQ3.jpeg" }} />
        <NextStack  {...props} title='Back to HomeScreen' component='TelaA' />
        <GoBackStack {...props} title='Back' />
        <PushStack {...props} title='Next' component='TelaC' />
    </View>
)