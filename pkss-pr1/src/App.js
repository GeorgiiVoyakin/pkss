import './App.css';
import Task5 from './components/task5';
import Task8 from './components/task8';
import Task11 from './components/task11';
import Task14 from './components/task14';
import Task17 from './components/task17';
import {
  Text,
  VStack,
  StackDivider,
} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        justify='space-around'
        mb={3}
      >
        <Text fontSize='xl'>Задача 5</Text>
        <Task5 />

        <Text fontSize='xl'>Задача 8</Text>
        <Task8 />

        <Text fontSize='xl'>Задача 11</Text>
        <Task11 />

        <Text fontSize='xl'>Задача 14</Text>
        <Task14 />

        <Text fontSize='xl'>Задача 17</Text>
        <Task17 />
      </VStack>
    </div>
  );
}

export default App;
