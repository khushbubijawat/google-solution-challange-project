import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreenHeader() {
    return (
        <>
            <View style={styles.header}>
                <Text>Nutrition App</Text>
                <Text>Logo</Text>
            </View>
        </>
    )
}

export default HomeScreenHeader;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '100%',
        backgroundColor: 'white'
    }
})