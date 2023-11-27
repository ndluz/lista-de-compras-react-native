import { StatusBar } from "react-native";

import { Main } from "./src/screens/main";

export default function App() {
  return (
    <>
      <Main />
      <StatusBar barStyle={"default"} />
    </>
  ); 
}
