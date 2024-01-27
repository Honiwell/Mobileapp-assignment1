// index.js
import React from 'react';
import { Pressable, Text, TextInput, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const [name, onChangeName] = React.useState("");
    const [noun, onChangeNoun] = React.useState("");
    const [event, onChangeEvent] = React.useState("");
    return (

        <ScrollView contentContainerStyle={Styles.page}>
            <View style={Styles.pagehead}>
                <Text style={Styles.titlehead}>How to play Mad Libs HALL PASS!!!!</Text>
            </View>
            <Text></Text>
            <Text style={Styles.textinstructions}>In the text boxes below, enter a name, noun and a place then click on blue button labeled:</Text>
            {/* <Text>then click on blue button labeled</Text>*/}
            <Text></Text>
            <Text style={Styles.hallpasstext}>"Make Hall Pass!"</Text>
           

            <TextInput
                style={Styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Enter a name"
            />

            <TextInput
                style={Styles.input}
                onChangeText={onChangeNoun}
                value={noun}
                placeholder="Enter a noun"
            />

            <TextInput
                style={Styles.input}
                onChangeText={onChangeEvent}
                value={event}
                placeholder="Enter a place"
            />

            <Link
                style={Styles.button} href={{
                    pathname: "/page2", params: { name, noun, event }
                }} asChild
            >
                <Pressable >
                    <Text style={Styles.hallpasstext}>Make Hall Pass</Text>
                </Pressable>
            </Link>
            <Text></Text>
            <Pressable
                style={Styles.button}
                onPress={() => {
                    onChangeName("");
                    onChangeNoun("");
                    onChangeEvent("");
                }}
            >
                <Text style={Styles.hallpasstext}>Clear</Text>
            </Pressable>
        </ScrollView>
    );
}