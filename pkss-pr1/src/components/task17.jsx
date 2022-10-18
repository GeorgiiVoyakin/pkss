import {
    NumberInput,
    NumberInputField,
    Button,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import { useState } from 'react';

function Task17() {
    const [x1, setX1] = useState('');
    const [y1, setY1] = useState('');
    const [x2, setX2] = useState('');
    const [y2, setY2] = useState('');
    const [r, setR] = useState('');

    function count() {
        if (x1 === '' || y1 === '' || x2 === '' || y2 === '' || r === '') {
            alert('введите данные')
        } else {
            if (r <= 0) {
                alert('Радиус должен быть положительным числом')
                return
            }
            const distanceToA = Math.sqrt(x1 * x1 + y1 * y1);
            const distanceToB = Math.sqrt(x2 * x2 + y2 * y2);

            if (distanceToA == r && distanceToB == r) {
                alert('Точки лежат на окружности')
            } else if (distanceToA == r) {
                alert('Только точка A лежит на окружности')
            } else if (distanceToB == r) {
                alert('Только точка B лежит на окружности')
            } else {
                alert('точки не лежат на окружности')
            }
        }
    }

    return (
        <VStack
            justify='space-around'
        >
            <Text>Введите координаты точки A</Text>
            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>X1:</Text>
                <NumberInput>
                    <NumberInputField value={x1} onChange={e => setX1(e.target.value)} w='150px' />
                </NumberInput>

                <Text>Y1:</Text>
                <NumberInput>
                    <NumberInputField value={y1} onChange={e => setY1(e.target.value)} w='150px' />
                </NumberInput>
            </Stack>

            <Text>Введите координаты точки B</Text>
            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>X2:</Text>
                <NumberInput>
                    <NumberInputField value={x2} onChange={e => setX2(e.target.value)} w='150px' />
                </NumberInput>

                <Text>Y2:</Text>
                <NumberInput>
                    <NumberInputField value={y2} onChange={e => setY2(e.target.value)} w='150px' />
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

export default Task17