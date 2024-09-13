import React from "react";
import TextoCentral from "../components/TextoCentral";
import { View } from "react-native";
import NextStack from "../components/NextStack";

export default props => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <TextoCentral>
                HomeScreen
            </TextoCentral>
            <NextStack {...props} title='Ravena Sun' component='TelaB' />
            <NextStack {...props} title='Ravena Moon' component='TelaC' />
        </View>
    );
}