// import { useDispatch } from "react-redux";
// import { getAll } from "./redux/reducer/Demo.Slice";
import "./App.css";
// import { useEffect } from "react";
// import HomePpage from "./pages/home/Home.page";
import HomePage from "./pages/home/Home.page";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getAllDemo = async () => {
  //     await dispatch(getAll()).unwrap();
  //   };
  //   getAllDemo();
  // }, []);

  return (
    <>
      Home
      <HomePage />
    </>
  );
}

export default App;
