import { Navbar } from "../components/components";
import { ScrollProvider } from "../hooks";
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <>
      <ScrollProvider>
        <Navbar />
        <MainPage />
      </ScrollProvider>
    </>
  );
}

export default App;
