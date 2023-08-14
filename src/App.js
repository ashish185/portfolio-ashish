import React, { useEffect, useRef, useState } from 'react';
import Home from './pages/home/Home';

const App = () => {
  const arr = useState(0);
  var counter = arr[0];
  var setCounter = arr[1];
  
  const ref = useRef(0);

  useEffect(() => {
    let id = setInterval(function () {
      console.log('counter from use Effect', counter);
      setCounter(function (counterState) {
        return counterState+1
      })
      // ref.current = ref.current + 1;
      // console.log(ref);
      // setCounter(ref.current);

      // setCounter(counter + 1);
    }, 1000);
    console.dir('id is', id);

    return () => {
      console.log('Clean up working');
      clearInterval(id);
    }
  }, [])

  console.log('counter before return', counter);

  return (
    <Home />
  )
};
export default App;