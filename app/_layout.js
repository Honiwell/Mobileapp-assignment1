import React from 'react';
import { Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';
export default function Layout() {
    return (
        <Stack screenOptions={{
            headerTitle: "Assignment #1",
            headerStyle: { backgroundColor: 'yellow', },
            headerTintColor: 'black',
            headerBackVisible: false,
        }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="page2"
                options={({ navigation }) => ({
                    headerShown: true,
                    headerLeft: () => (
                        <Pressable
                            onPress={() => navigation.goBack()}
                            style={{ marginLeft: 15 }}
                        >
                            <Text style={{ color: 'black', fontSize: 20 }}>{`<<<`}</Text>
                        </Pressable>
                    ),
                    presentation: 'modal',
                })}
            />
        </Stack>
    );
}