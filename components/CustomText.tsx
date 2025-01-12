import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { Text, type TextProps } from 'react-native';

interface Props extends TextProps {
    variant?: 'h1' | 'h2';
}

const CustomText = ({ children, variant = 'h1', ...rest }: Props) => {
    return (
        <Text
            style={[
                variant === 'h1' && globalStyles.mainResult,
                variant === 'h2' && globalStyles.subResult,
            ]}
            {...rest}
        >
            {children}
        </Text>
    );
};

export default CustomText;
