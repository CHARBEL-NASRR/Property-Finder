import React from 'react';
import { View, StyleSheet } from 'react-native';

const WhitePage = () => {
    return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default WhitePage;