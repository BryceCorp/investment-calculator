import Header from "./components/Header"
import UserInpt from "./components/UserInput"
import ResultsTable from "./components/ResultsTable"
import { InputProvider } from "./components/UserInputProvider"

function App() {
  return (
    <InputProvider>
      <Header/>
      <UserInpt/>
      <ResultsTable/>
    </InputProvider>
  )
}

export default App
