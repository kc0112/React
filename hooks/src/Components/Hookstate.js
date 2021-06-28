import React,{useState} from 'react'

function Hookstate() {
    
    /*1.acts like construction by func method, initialise will render only once */
    // const [count, setCount] = useState(() => {
    //     console.log(1)
    //     return 1;
    // });

    /* 2.object */
    // const [state,setCount] = useState({count:1,theme:'blue'}) 
    // const count=state.count
    // prob -> setState(prev=>{...prev,count:count+1}) // overrides old state, therefore need to set prev dat and then updat

    /* 3.best->alg alg state bnao */
    // const [count,setCount] = useState(1);
    // const [theme,setTheme] = useState('blue);

    /* 2.renders(initializes) each time change count */
    const [count, setCount] = useState(1);

    function incCount() {
        // always use prevCount (last count)
        setCount(prevCount => prevCount + 1);
    }

    function decCount (){
        setCount(prevCount => prevCount - 1);
    }

    return (
        // wrap multiple elements in <></>
        <> 
            <button onClick={decCount}>-</button>
            <span>{count}</span>
            <button onClick={incCount}>+</button>
        </>
    )
}

export default Hookstate
