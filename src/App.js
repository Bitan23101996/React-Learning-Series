import React, { useReducer } from 'react';
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
import RefInReact from './react-basics-tutorials/RefInReact';
import FocusInput from './react-basics-tutorials/FocusInput';
import InputParentRefForwarding from './react-basics-tutorials/InputParentRefForwarding';
import GetReqUsingAXIOS from './React-Http/GetReqUsingAXIOS';
import PostReqUsingAXIOS from './React-Http/PostReqUsingAXIOS';
import PortalsDemoComp from './react-basics-tutorials/PortalsDemoComp';
import HeroErr from './react-basics-tutorials/HeroErr';
import ErrorBoundary from './react-basics-tutorials/ErrorBoundary';
import CounterClickBtn from './react-basics-tutorials/CounterClickBtn';
import CounterHoverText from './react-basics-tutorials/CounterHoverText';
import CounterClickBtnTwo from './react-basics-tutorials/CounterClickBtnTwo';
import CounterHoverTextTwo from './react-basics-tutorials/CounterHoverTextTwo';
import CountRenderProps from './react-basics-tutorials/CountRenderProps';
import ContextD from './react-basics-tutorials/ContextD';
import { UserProvider } from './react-basics-tutorials/userContext';
import CounterHooks from './React-Hooks/CounterHooks';
import CounterHooksTwo from './React-Hooks/CounterHooksTwo';
import CounterHooksThree from './React-Hooks/CounterHooksThree';
import CounterHooksFour from './React-Hooks/CounterHooksFour';
import CounterUsingUseEffect from './React-Hooks/CounterUsingUseEffect';
import MouseEventHook from './React-Hooks/MouseEventHook';
import MouseContainerHook from './React-Hooks/MouseContainerHook';
import ClassCounterInterval from './React-Hooks/ClassCounterInterval';
import HookCounterInterval from './React-Hooks/HookCounterInterval';
import FetchDataUsingAXIOS from './React-Hooks/FetchDataUsingAXIOS';
import ContextC from './React-Hooks/ContextC';
import CounterUsingReducerHook from './React-Hooks/CounterUsingReducerHook';
import CounterUsingReducerHookTwo from './React-Hooks/CounterUsingReducerHookTwo';
import CounterUsingMultipleReducerHook from './React-Hooks/CounterUsingMultipleReducerHook';
import ReducerA from './React-Hooks/ReducerA';
import ReducerB from './React-Hooks/ReducerB';
import ReducerC from './React-Hooks/ReducerC';
import DataFetchUsingStateAXIOS from './React-Hooks/DataFetchUsingStateAXIOS';
import DataFetchUsingReducerAXIOS from './React-Hooks/DataFetchUsingReducerAXIOS';
import UseCallbackHookParent from './React-Hooks/UseCallbackHookParent';
import UseMemoHookExample from './React-Hooks/UseMemoHookExample';
import UseRefHookInputFocusExample from './React-Hooks/UseRefHookInputFocusExample';
import UseRefHookTimerExample from './React-Hooks/UseRefHookTimerExample';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })
//Exporting 2 context
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
//Count Context
export const CountContext = React.createContext();

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialValue
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue)
  return (
    // <CountContext.Provider value={{ countValue: count, dispatchMethod: dispatch }}>
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
      {/* <ParentComponent /> */}
      {/* <RefInReact /> */}
      {/* <FocusInput /> */}
      {/* <InputParentRefForwarding /> */}
      {/* <GetReqUsingAXIOS /> */}
      {/* <PostReqUsingAXIOS /> */}
      {/* <PortalsDemoComp /> */}
      {/* <ErrorBoundary>
        <HeroErr heroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>       
        <HeroErr heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <HeroErr heroName="Joker" />
      </ErrorBoundary> */}

      {/* <CounterClickBtn name="Bitan"/>
      <CounterHoverText /> */}


      {/* ----------------Type 1 : Use of Render Props------------------ */}
      {/* <CountRenderProps render={(count, incrementCount) => {
        return <CounterClickBtnTwo count={count} incrementCount={incrementCount} />
      }
      } />
      <CountRenderProps render={(count, incrementCount) => {
        return <CounterHoverTextTwo count={count} incrementCount={incrementCount} />
      }
      } /> */}


      {/* ----------------Type 2 : Use of Render Props------------------ */}
      {/* <CountRenderProps>
        {
          (count, incrementCount) => {
            return (
              <CounterClickBtnTwo count={count} incrementCount={incrementCount} />
            )
          }
        }
      </CountRenderProps>
      
      <CountRenderProps>
        {
          (count, incrementCount) => {
            return (
              <CounterHoverTextTwo count={count} incrementCount={incrementCount} />
            )
          }
        }
      </CountRenderProps> */}

      {/*   <UserProvider value="Bitan Das">
        <ContextD />
      </UserProvider> */}

      {/* <CounterHooks /> */}
      {/* <CounterHooksTwo /> */}
      {/* <CounterHooksThree /> */}
      {/* <CounterHooksFour /> */}
      {/* <CounterUsingUseEffect /> */}
      {/* <MouseEventHook /> */}
      {/* <MouseContainerHook /> */}
      {/* <ClassCounterInterval />
      <HookCounterInterval /> */}
      {/* <FetchDataUsingAXIOS /> */}
      {/* <UserContext.Provider value={'Bitan Das'}>
        <ChannelContext.Provider value={'AYB_Bitan'}>
          <ContextC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterUsingReducerHook /> */}
      {/* <CounterUsingReducerHookTwo /> */}
      {/* <CounterUsingMultipleReducerHook /> */}

      {/* <p>Count value in APP : {count}</p>
        <ReducerA />
        <ReducerB />
        <ReducerC /> */}

      {/* <DataFetchUsingStateAXIOS /> */}
      {/* <DataFetchUsingReducerAXIOS /> */}
      {/* <UseCallbackHookParent /> */}
      {/* <UseMemoHookExample /> */}
      {/* <UseRefHookInputFocusExample /> */}
      <UseRefHookTimerExample />
    </div>
    // </CountContext.Provider>
  );
}

export default App;

{/* <ChakraProvider theme={theme}>
      <div className="App">
        <LoginForm />
        <Message />
      </div>
    </ChakraProvider> */}