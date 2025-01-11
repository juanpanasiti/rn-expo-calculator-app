import { View, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global-styles';

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <Text style={globalStyles.mainResult}>50x50</Text>
            <Text style={globalStyles.subResult}>2500</Text>
        </View>
    );
};

export default CalculatorApp;
