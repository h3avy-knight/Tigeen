import "./app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./app/store";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Header />
        <Footer />
      </Provider>
    </>
  );
};

export default App;
