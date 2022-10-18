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
    const [x1, setX1] = useState('');
    const [y1, setY1] = useState('');
    const [x2, setX2] = useState('');
    const [y2, setY2] = useState('');
    const [x3, setX3] = useState('');
    const [y3, setY3] = useState('');

    function count() {
        if (x1 === '' || y1 === '' || x2 === '' || y2 === '' || x3 === '' || y3 === '') {
            alert('введите данные')
        } else {
            if (x1 === x2 && x2 === x3) {
                alert('треугольник не существует')
                return
            }
            if (y1 === y2 && y2 === y3) {
                alert('треугольник не существует')
                return
            }
            const side1 = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
            const side2 = Math.sqrt((x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3))
            const side3 = Math.sqrt((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3))

            if (!(side1 < side2 + side3 || side2 < side1 + side3 || side3 < side1 + side2)) {
                alert('треугольник не существует')
                return
            }
            const p = (side1 + side2 + side3) / 2
            alert((Math.sqrt(p * (p - side1) * (p - side2) * (p - side3))).toFixed(3))

        }
    }

    return (
        <VStack
            justify='space-around'
        >
            <Text>Введите координаты вершин треугольника</Text>
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

            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>X3:</Text>
                <NumberInput>
                    <NumberInputField value={x3} onChange={e => setX3(e.target.value)} w='150px' />
                </NumberInput>

                <Text>Y3:</Text>
                <NumberInput>
                    <NumberInputField value={y3} onChange={e => setY3(e.target.value)} w='150px' />
                </NumberInput>
            </Stack>
            <Button colorScheme='blue' onClick={count}>Посчитать</Button>
        </VStack>
    );
}

export default Task5