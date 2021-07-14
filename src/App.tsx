import React from 'react';
import Counter from "./Counter";

// props
// hooks
// render props

// function App() {
//   return (
//     <div>
//         <TextField />
//     </div>
//   );
// }

const App: React.FC = () => {
  return (
    <div>
      {/*<TextField*/}
      {/*    text='hello'*/}
      {/*    person={{firstName:'H', lastName:'K'}}*/}
      {/*    handleChange={() => {}}*/}
      {/*/>*/}
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count * 2)}>*2</button>
            <button onClick={() => setCount(count / 2)}>/2</button>
            <button onClick={() => setCount(0)}>reset</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
