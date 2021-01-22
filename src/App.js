import logo from './logo.svg';
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
import CourseEntrollmentForm from './components/CourseEntrollmentForm';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Message from './react-basics-tutorials/Message'
import Counter from './react-basics-tutorials/Counter'
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <div className="App">
      {/* <Message /> */}
      <Counter/>
    </div>
  );
}

export default App;

{/* <ChakraProvider theme={theme}>
      <div className="App">
        <LoginForm />
        <Message />
      </div>
    </ChakraProvider> */}