import "./App.css";
import HookExam from "./components/HookExam";
import Register from "./components/Register";

function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

export default App;

// 리렌더링이 될 때
// 1. state 변화 2. props 변화 3. 부모가 리렌더링 되면 자식도 리렌더링
