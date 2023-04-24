import { useState } from "react";

const App = () => {
	const {counter, increment, decrement, incrementStep, reset} = useApp()

	return <>
	<h1>useReducer() example</h1>
	<h2>value: {counter.value}</h2>
	<h2>step: {counter.step}</h2>
	<h2>clicks: {counter.click}</h2>
	<button onClick={()=>increment()}>Incrementar</button>
	<button onClick={()=> decrement()}>Decrementar</button>
	<button onClick={() => incrementStep()}>Incrementar Step</button>
	<button onClick={() => reset()}>Reset</button>
	</>
};



const useApp = () => {
	const[counter, setCounter]= useState({
		value: 0,
		step: 1,
		click: 0
	})

	const increment = () => {
		setCounter({...counter, value: counter.value + counter.step, click: counter.click+1})
	}
	
	const decrement = () => {
		setCounter({...counter,value: counter.value - counter.step, click: counter.click+1})
	}
	
	const incrementStep = () => {
		setCounter({...counter,step: counter.step + 1})
	}
	
	const reset = () => {
		setCounter({ value: 0, click: 0, step: 1})
	}

	return {counter, increment, decrement, incrementStep, reset}
}



export default App;
