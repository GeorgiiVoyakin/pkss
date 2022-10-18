import {
    NumberInput,
    NumberInputField,
    Button,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import { useState } from 'react';

function Task14() {
    const [x, setX] = useState('');
    const [y, setY] = useState('');

    function count() {
        if (x === '' || y === '') {
            alert('введите данные')
        } else {
            alert(`Значение функции z = log(x/y) - 1/x: ${Math.log(x/y) - 1/x}`)
        }
    }

    return (
        <VStack
            justify='space-around'
        >
            <Text>Введите числа</Text>
            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>X:</Text>
                <NumberInput>
                    <NumberInputField value={x} onChange={e => setX(e.target.value)} w='150px' />
                </NumberInput>
            </Stack>
            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>Y:</Text>
                <NumberInput>
                    <NumberInputField value={y} onChange={e => setY(e.target.value)} w='150px' />
                </NumberInput>
            </Stack>
            
            <Button colorScheme='blue' onClick={count}>Посчитать</Button>
        </VStack>
    );
}

export default Task14