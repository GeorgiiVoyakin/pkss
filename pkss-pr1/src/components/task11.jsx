import {
    NumberInput,
    NumberInputField,
    Button,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import { useState } from 'react';

function Task11() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [d, setD] = useState('');

    function count() {
        if (a === '' || b === '' || c === '' || d === '') {
            alert('введите данные')
        } else {
            const inRange = []
            if (a > 1 && a < 25) {
                inRange.push('A')
            }
            if (b > 1 && b < 25) {
                inRange.push('B')
            }
            if (c > 1 && c < 25) {
                inRange.push('C')
            }
            if (d > 1 && d < 25) {
                inRange.push('D')
            }
            if (inRange.length === 0) {
                alert('Нет чисел принадлежащих интервалу (1, 25)')
                return
            }
            alert(`Числа ${inRange} принадлежат интервалу (1, 25)`)
        }
    }

    return (
        <VStack
            justify='space-around'
        >
            <Text>Введите числа</Text>
            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>A:</Text>
                <NumberInput>
                    <NumberInputField value={a} onChange={e => setA(e.target.value)} w='150px' />
                </NumberInput>
            </Stack>
            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>B:</Text>
                <NumberInput>
                    <NumberInputField value={b} onChange={e => setB(e.target.value)} w='150px' />
                </NumberInput>
            </Stack>
            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>C:</Text>
                <NumberInput>
                    <NumberInputField value={c} onChange={e => setC(e.target.value)} w='150px' />
                </NumberInput>
            </Stack>
            <Stack shouldWrapChildren direction='row' m={3}>
                <Text>D:</Text>
                <NumberInput>
                    <NumberInputField value={d} onChange={e => setD(e.target.value)} w='150px' />
                </NumberInput>
            </Stack>
            <Button colorScheme='blue' onClick={count}>Посчитать</Button>
        </VStack>
    );
}

export default Task11