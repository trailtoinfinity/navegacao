import React from "react";
import { View, Text } from "react-native"
import Styles from "./Styles";

export default (props) => (
    <Text style={{ fontSize: 40, color: props.corDaFonte || '#fff' }}>
        {props.children}
    </Text>
)