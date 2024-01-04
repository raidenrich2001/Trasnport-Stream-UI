import './App.css';
import { Route, Routes } from 'react-router-dom'
import Index from './components/Index';
import Command from './components/Client/Command/Command';
import CommandTransaction from './components/Client/CommandTransaction/CommandTransaction';
import MonitorStatus from './components/Client/MonitorStatus/MonitorStatus';
import MonitorReport from './components/Client/MonitorReport/MonitorReport';
import STBMonitorAction from './components/Client/STBMonitorAction/STBMonitorAction';
import MonitorNITStatus from './components/Client/MonitorNITStatus/MonitorNITStatus';
import STBOnlineStatus from './components/Client/STBOnlineStatus/STBOnlineStatus';
import Dashboard from './components/Client/Dashboard/Dashboard';
import ChangeMonitorReport from './components/Report/ChangeMonitorReport/ChangeMonitorReport';
import NetworkSummary from './components/Report/NetworkSummary/NetworkSummary';
import NetworkDetails from './components/Report/NetworkDetails/NetworkDetails';
import UserAdminInfo from './components/Admin/UserAdminInfo/UserAdminInfo';
import TechnicianInfo from './components/Admin/TechnicianInfo/TechnicianInfo';
import STBDetails from './components/Admin/STBDetails/STBDetails';
import MSODetails from './components/Admin/MSODetails/MSODetails';
import Notification from './components/Admin/Notification/Notification';
import ServiceList from './components/Admin/ServiceList/ServiceList';
import AliasMapping from './components/Admin/AliasMapping/AliasMapping';
import BroadcasterMapping from './components/Admin/BroadcasterMapping/BroadcasterMapping';
import Configuration from './components/Admin/Configuration/Configuration';
import WebApiTokenInfo from './components/Admin/WebApiTokenInfo/WebApiTokenInfo';
import Help from './components/Admin/Help/Help';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/client' element={<Index></Index>}>
          <Route index path='command' element={<Command></Command>}></Route>
          <Route path='command_transaction' element={<CommandTransaction></CommandTransaction>}></Route>
          <Route path='stbmonitoraction' element={<STBMonitorAction></STBMonitorAction>}></Route>
          <Route path='monitorstatus' element={<MonitorStatus></MonitorStatus>}></Route>
          <Route path='monitorreport' element={<MonitorReport></MonitorReport>}></Route>
          <Route path='monitornitstatus' element={<MonitorNITStatus></MonitorNITStatus>}></Route>
          <Route path='stbonlinestatus' element={<STBOnlineStatus></STBOnlineStatus>}></Route>
          <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
        </Route>
        <Route path='/reports' element={<Index></Index>}>
          <Route index path='changemonitorreport' element={<ChangeMonitorReport></ChangeMonitorReport>}></Route>
          <Route path='networksummary' element={<NetworkSummary></NetworkSummary>}></Route>
          <Route path='networkdetails' element={<NetworkDetails></NetworkDetails>}></Route>
        </Route>
        <Route path='/admin' element={<Index></Index>}>
          <Route index path='useradmininfo' element={<UserAdminInfo></UserAdminInfo>}></Route>
          <Route path='technicianinfo' element={<TechnicianInfo></TechnicianInfo>}></Route>
          <Route path='stbdetails' element={<STBDetails></STBDetails>}></Route>
          <Route path='msodetails' element={<MSODetails></MSODetails>}></Route>
          <Route path='notification' element={<Notification></Notification>}></Route>
          <Route path='servicelist' element={<ServiceList></ServiceList>}></Route>
          <Route path='aliasmapping' element={<AliasMapping></AliasMapping>}></Route>
          <Route path='broadcastermapping' element={<BroadcasterMapping></BroadcasterMapping>}></Route>
          <Route path='configuration' element={<Configuration></Configuration>}></Route>
          <Route path='webapitokeninfo' element={<WebApiTokenInfo></WebApiTokenInfo>}></Route>
          <Route path='help' element={<Help></Help>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
