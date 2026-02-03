import { Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './pages/Home';
import Login from './pages/Login';
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import Register from "./pages/register";
import UserLayout from "./components/userLayout";
import axios from "axios";
axios.defaults.withCredentials = true;
import { serverEndPoint } from "./config/appconfig";
import { useSelector } from "react-redux";

function App() {
  // Value of userDetails represents whether the use is logged in or not
  // useSelector takes in 1 function as input. Redux calls the function that you pass to useSelector
  // with all the values its storing/managing.
  // We need to take out userDetails since we're interested in userDetails object
  const userDetails = useSelector((state)=>state.userDetails)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await axios.post(
          `${serverEndPoint}/auth/isUserLoggedIn`,
          {},
          {
            withCredentials: true
          }
        );

        setUserDetails(response.data.user);
      } catch (err) {
        setUserDetails(null);
      }
    };

    checkLogin();
  }, []);


  return (
    <Routes>
      <Route
        path='/'
        element={
          userDetails ? (
            <UserLayout>
              <Navigate to="/dashboard" />
            </UserLayout>
          ) : (
            <AppLayout>
              <Home />
            </AppLayout>
          )
        }
      />
      <Route
        path='/register'
        element={userDetails ? (
          <AppLayout>
            <Navigate to='/login' />
          </AppLayout>
        ) : (
          <AppLayout>
            <Register setUser={setUserDetails} />
          </AppLayout>
        )
        }
      />
      <Route
        path='/login'
        element={userDetails ? (
          <UserLayout user={userDetails}>
            <Navigate to='/dashboard' />
          </UserLayout>
        ) : (
          <AppLayout>
            <Login setUser={setUserDetails} />
          </AppLayout>
        )
        }
      />
      <Route
        path="/dashboard"
        element={
          userDetails ? (
            <UserLayout user={userDetails}>
              <Dashboard user={userDetails} />
            </UserLayout>
          ) : (
            <AppLayout>
              <Navigate to="/login" />
            </AppLayout>
          )
        } />
        <Route
          path='/logout'
          element={
            userDetails?(
              <UserLayout user={userDetails}>
                <Logout setUser={setUserDetails}/>
              </UserLayout>
            ):(
              <AppLayout>
                <Navigate to='/login'/>
              </AppLayout>
            )
          }/>
    </Routes>
  )
}

export default App;