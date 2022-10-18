import {
    NumberInput,
    NumberInputField,
    Button,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import { useState } from 'react';

function Task5() {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [r, setR] = useState('');

    function count() {
        if (x === '' || y === '' || r === '') {
            alert('введите данные')
        } else {
            if (r <= 0) {
                alert('Радиус должен быть положительным числом')
                return
            }
            const distance = Math.sqrt(x * x + y * y);
            if (distance > r) {
                alert('Точка лежит вне окружности')
            } else if (distance < r) {
                alert('Точка лежит внутри окружности')
            } else {
                alert('Точка лежит на окружности')
            }
        }
    }

    return (
        <VStack
            justify='space-around'
        >
            <Text>Введите координаты точки</Text>
            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>X:</Text>
                <NumberInput>
                    <NumberInputField value={x} onChange={e => setX(e.target.value)} w='150px' />
                </NumberInput>

                <Text>Y:</Text>
                <NumberInput>
                    <NumberInputField value={y} onChange={e => setY(e.target.value)} w='150px' />
                </NumberInput>
            </Stack>

            <Text>Введите радиус окружности</Text>
            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>R:</Text>
                <NumberInput>
                    <NumberInputField value={r} onChange={e => setR(e.target.value)} w='150px' />
                </NumberInput>
            </Stack>
            <Button colorScheme='blue' onClick={count}>Посчитать</Button>
        </VStack>
    );
}

export default Task5