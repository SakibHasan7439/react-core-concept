import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert("Button clicked");
  }

  const handleClick2 = () =>{
    alert("Button 2 clicked")
  }

  const addWithFive = (num) =>{
    alert(num * 5);
  }

  return (
    <>
      <h1>React Core Concept</h1>
      <Friends/>
      <Users/>
      <Team/>
      <Counter/>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=> addWithFive(2)}>add</button>
    </>
  )
}

export default App
