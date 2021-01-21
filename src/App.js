import logo from './logo.svg';
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
import CourseEntrollmentForm from './components/CourseEntrollmentForm';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

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
    <ChakraProvider theme={theme}>
      <div className="App">
        <LoginForm />
      </div>
    </ChakraProvider>

  );
}

export default App;
