// page2.js
import React, { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';
import Signature from "react-native-signature-canvas";

export default function Page() {
    const params = useLocalSearchParams();
    const { name, noun, event } = params;
    const [sign, onChangeSign] = useState("Sign");







    return (
        <View style={Styles.page}>
            <Text style={Styles.pageheadfont}>Mad Libs</Text>

            <Text> Date: {new Date().toLocaleString()}</Text>



            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={Styles.hallpassvertical}>
                        <Text style={Styles.passrotate}> HALL PASS </Text>
                    </View>
                </View>

                <View style={Styles.passtext}>
                    <Text style={Styles.hallpasstext}>{name} is too cool</Text>
                    <Text style={Styles.hallpasstext}>for {noun} class.</Text>
                    <Text style={Styles.hallpasstext}>Instead, he/she will be</Text>
                    <Text style={Styles.hallpasstext}>attending the {event}</Text>

                    <View style={Styles.signatureBox}>
                    <TextInput
                        style={Styles.signature}
                        placeholder="Sign here:"
                        value={sign}
                        onChangeText={onChangeSign}
                        />
                    </View>

                    <Link
                        style={Styles.input}
                        href={{
                            pathname: "/",
                        }} asChild
                    >

                    </Link>
                </View>

            </View>


        </View>
    )
}