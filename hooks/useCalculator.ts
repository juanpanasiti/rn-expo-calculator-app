import { useEffect, useRef, useState } from 'react';

enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '/',
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        //   TODO: calcular subresultado

        setFormula(number);
    }, [number]);

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = undefined;
    };

    const toggleSign = () => {
        if (!number.startsWith('-')) {
            setNumber('-' + number);
        } else {
            setNumber(number.replace('-', ''));
        }
    };

    const deleteLast = () => {
        if (number.length === 1 || (number.startsWith('-') && number.length === 2)) {
            setNumber('0');
        } else {
            setNumber(number.slice(0, -1));
        }
    };

    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            if (numberString === '0' && !number.includes('.')) {
                return;
            }
        }

        setNumber(number + numberString);
    };

    return {
        // Props
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
    };
};
