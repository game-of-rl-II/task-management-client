import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import MyProfile from './Components/Dashboard/MyProfile';
import AddMember from './Components/Dashboard/AdminDashboardItems/AddMember';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import AttendanceReports from './Components/Dashboard/AdminDashboardItems/AttendanceReports';
import EmployeeTask from './Components/Dashboard/AdminDashboardItems/EmployeeTask';
import ManageAttendance from './Components/Dashboard/AdminDashboardItems/ManageAttendance';
import ManageEmployee from './Components/Dashboard/AdminDashboardItems/ManageEmployee';
import ReviewYourTeamMember from './Components/Dashboard/AdminDashboardItems/ReviewYourTeamMember';
import AssignedTasks from './Components/Dashboard/MemberDashboardItems/AssignedTasks';
import CompletedTask from './Components/Dashboard/MemberDashboardItems/CompletedTask';
import UncompletedTask from './Components/Dashboard/MemberDashboardItems/UncompletedTask';
import TaskForwarding from './Components/Dashboard/MemberDashboardItems/TaskForwarding';
import Register from './Components/Entry/Register';
import EmployeeLogin from './Components/Entry/EmployeeLogin';
import AdminLogin from './Components/Entry/AdminLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyTeams from './Components/Dashboard/AdminDashboardItems/MyTeams';
import SingleTeam from './Components/Dashboard/AdminDashboardItems/SingleTeam';
import InnerHome from './Components/Home/InnerHome';
import Menu from './Components/Home/Menu';
import CreateTeam from './Components/Home/CreateTeam';
import NotFound from './Components/ErroPages/NotFound';
import Denied from './Components/ErroPages/Denied';
import TodaysTasks from './Components/Dashboard/AdminDashboardItems/TodaysTasks';

function App() {
  return (
    <div className='bg-lime-50'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/myProfile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/innerHome' element={<InnerHome />}>
          <Route index element={<CreateTeam></CreateTeam>}></Route>
          <Route path=':teamName' element={<Menu></Menu>}>
            <Route index element={<CreateTeam></CreateTeam>}></Route>
            <Route path="addMember" element={<AddMember></AddMember>}></Route>
            <Route path="manageEmployee" element={<ManageEmployee></ManageEmployee>}></Route>
            <Route path="employeeTask" element={<EmployeeTask></EmployeeTask>}></Route>
            <Route path="todaysTask" element={<TodaysTasks></TodaysTasks>}></Route>

            <Route path="reviewYourTeamMember" element={<ReviewYourTeamMember></ReviewYourTeamMember>}></Route>
          </Route>

        </Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/employeeLogin' element={<EmployeeLogin></EmployeeLogin>}></Route>
        <Route path='/adminLogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/myTeams/:teamName' element={<SingleTeam></SingleTeam>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          {/* <Route path="addMember" element={<AddMember></AddMember>}></Route> */}
          <Route path="myTeams" element={<MyTeams></MyTeams>}></Route>
          <Route path="attendanceReports" element={<AttendanceReports></AttendanceReports>}></Route>
          <Route path="manageAttendance" element={<ManageAttendance></ManageAttendance>}></Route>
          {/* <Route path="manageEmployee" element={<ManageEmployee></ManageEmployee>}></Route> */}
          {/* <Route path="reviewYourTeamMember" element={<ReviewYourTeamMember></ReviewYourTeamMember>}></Route> */}
          <Route path="assignedTasks" element={<AssignedTasks></AssignedTasks>}></Route>
          <Route path="completedTask" element={<CompletedTask></CompletedTask>}></Route>
          <Route path="uncompletedTask" element={<UncompletedTask></UncompletedTask>}></Route>
          <Route path="taskForwarding" element={<TaskForwarding></TaskForwarding>}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/denied" element={<Denied />}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
