import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import CommonNotificationsComponent from "./components/notifications/CommonNotificationsComponent";

function App() {
  return (

      <div className="App">
        <CommonNotificationsComponent/>
        <Routes>
          {/*<Route path="/" element={<AppInitialViewComponent/>}>*/}
          {/*  <Route index element={<EmployeeListCRUDComponent/>}/>*/}
          {/*  <Route path="employee/:employeeIdParam" element={<EmployeeDetailsComponent/>}/>*/}
          {/*  <Route path="/payments" element={<PaymentsComponent/>}/>*/}
          {/*</Route>*/}
        </Routes>
      </div>
  );
}

export default App;