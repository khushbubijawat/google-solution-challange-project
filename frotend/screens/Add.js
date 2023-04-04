import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';

function Add() {
    const [name, onChangeName] = useState('');
    const [selected, setSelected] = React.useState("");

    const List = async () => {
        console.log(selected);
        console.log(name); 
            let result = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key':'HLRGm/pkykDZPv4Nh1Na3Q==ilkOtYYhX6rKDJ9k',
            }
        }
        );
        // console.log(u.token);
        result = await result.json();

        if (result) {
            console.log(result);
        }


    }


    return (
        <>
            <View style={styles.main}>
                <TextInput placeholder='Enter Your' style={styles.inputdan} value={name} placeholderTextColor="gray" onChangeText={onChangeName} />
                <Button title="Add" onPress={List} />
            </View>
        </>
    )
}

export default Add;

const styles = StyleSheet.create({
    main: {
        padding: 20,
        width: '100%',
        alignSelf: 'center',
    },
    addinput: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    inputdan: {
        padding: 5,
        marginBottom: 10,
        fontSize:18
    }
})

