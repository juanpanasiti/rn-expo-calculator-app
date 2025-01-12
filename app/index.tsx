import React from 'react';
import { View } from 'react-native';

import { globalStyles } from '@/styles/global-styles';
import CustomText from '../components/CustomText';

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <CustomText style={globalStyles.mainResult}>50x50</CustomText>
            <CustomText style={globalStyles.subResult}>2500</CustomText>
        </View>
    );
};

export default CalculatorApp;
