import { Route, Routes } from "react-router-dom";
import './styles/global.css';
import './styles/reset.css';

//import DataFetching from './components/DataFetching';
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail'; 
import CreateCourse from './components/CreateCourse'; 
import UpdateCourse from './components/UpdateCourse'; 
import UserSignIn from './components/UserSignIn'; 
import UserSignOut from './components/UserSignOut'; 
import UserSignUp from './components/UserSignUp'; 
import NotFound from './components/NotFound';
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/signin" element={<UserSignIn />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signout" element={<UserSignOut />} />
        <Route element={<PrivateRoute />}>
          <Route path="/create" element={<CreateCourse />} />
          <Route path="/courses/:id/update" element={<UpdateCourse />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
};

export default App;
