import Navigation from "./routes/navigation/navigation.component";
import SignUpForm from "./routes/sign-up-form/sign-up-form.component";
import SignInForm from "./routes/sign-in-form/sign-in-form.component";
import { useContext } from "react";
import { UserContext } from "./contexts/user.context";
import {Navigate, Routes, Route} from 'react-router-dom';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          path="home"
          element={currentUser ? <Home /> : <Navigate to="/" replace />}
        />
        <Route
          path="shop"
          element={currentUser ? <Shop /> : <Navigate to="/" replace />}
        />
        <Route
          index
          element={
            currentUser ? <Navigate to="/home" replace /> : <SignInForm />
          }
        />
        <Route
          path="/signUp"
          element={
            currentUser ? <Navigate to="/home" replace /> : <SignUpForm />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;