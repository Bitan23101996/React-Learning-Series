import logo from './logo.svg';
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
import CourseEntrollmentForm from './components/CourseEntrollmentForm';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Message from './react-basics-tutorials/Message'
import Counter from './react-basics-tutorials/Counter'
import EventBinding from './react-basics-tutorials/EventBinding'
import Parent from './react-basics-tutorials/Parent'
import ConditionalRender from './react-basics-tutorials/ConditionalRender'
import ListRendering from './react-basics-tutorials/ListRendering'
import Stylesheet from '../src/react-basics-tutorials/Stylesheet'
import './appStyles.css'
import Styles from './appStyles.module.css'
import BasicReactForm from './react-basics-tutorials/BasicReactForm'
import LifecycleA from './react-basics-tutorials/LifecycleA';
import FragmentsInReactTable from './react-basics-tutorials/FragmentsInReactTable';
import ParentComponent from './react-basics-tutorials/ParentComponent';
import MemoComp from './react-basics-tutorials/MemoComp';

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
      {/* <Counter/> */}
      {/* <EventBinding  name="Bitan" title="Das"/> */}
      {/* <Parent /> */}
      {/* <ConditionalRender/> */}
      {/* <ListRendering/> */}
      {/* <Stylesheet primaryTheme={true} />
      <div>
        <h5 className="error-color">CSS Style Normal Way</h5>
        <h5 className={Styles.success_color}>CSS Style Module Approach Way</h5>
      </div> */}
      {/* <BasicReactForm/> */}
      {/* <LifecycleA /> */}
      {/* <FragmentsInReactTable /> */}
      <ParentComponent />
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