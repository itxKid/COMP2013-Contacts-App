import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContactsApp from "./Components/ContactsApp";
import PageNotFound from "./Components/PageNotFound";
import NotAuthorized from "./Components/NotAuthorized";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/contacts" element={<ContactsApp />}/>
          <Route path="/not-authorized" element={<NotAuthorized />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
