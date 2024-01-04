import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../../store/store';
import '../../css/Styles.css'
import DropDown from '../../DropDown';
import Pair from './Pair/Pair';
import useTablist from '../../customHook/useTablist';
import HomeScan from './Scan/HomeScan';
import AutoScan from './Scan/AutoScan';
import ManualScan from './Scan/ManualScan';
import SmallDropdown from './SmallDropdown';
import GetCHDB from './GetInfo/GetCHDB';
import GetBoxInfo from './GetInfo/GetBoxInfo';
import GetLCNconfigInfo from './GetInfo/GetLCNconfigInfo';
import SWDownloadHistroy from './GetInfo/SWDownloadHistroy';
import GetSIPSIdump from './GetInfo/GetSIPSIdump';
import AllFrequency from './MonitorConfig/AllFrequency';
import SelectedFrequency from './MonitorConfig/SelectedFrequency';
import SpecificFrequency from './MonitorConfig/SpecificFrequency';
import InstantMonitor from './MonitorConfig/InstantMonitor';
import Abort from './Actions/Abort';
import STBdump from './Actions/STBdump';
import NetLogging from './Actions/NetLogging';
import OND from './Actions/OND';
import TestTool from './Actions/TestTool';
import PauseSTB from './Actions/PauseSTB';
import ClientReset from './Reset/ClientReset';
import FactoryDefault from './Reset/FactoryDefault';
import Factory from './Config/Factory';
import PrivateDescriptor from './Config/PrivateDescriptor';
import OperatorSpec from './Config/OperatorSpec';

export default function Command() {
    const dispatch = useDispatch();
    const Toggle = useSelector(state => state.SideBar.toggle);
    const Tablist = useSelector(state => state.Common.tablist);

    useTablist('Pair');


    console.log(Tablist)
    return (
        <main className='w-full'>
            <div className='w-full flex justify-end'>
                <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
                    <h1 className='w-full border h-14 text-xl flex items-center px-4'>
                        Command
                    </h1>
                    <form >
                        <section className='border py-2 px-5'>
                        <div className='m-3 text-sm grid grid-cols-1 place-content-center place-items-start gap-3'>
                            <div className='w-1/4'>
                                <label>Addressing mode</label>
                                    <select type='select' className='form-input'>
                                        <option>Unicast</option>
                                    </select>
                            </div>
                            <div className='w-1/4'>
                                <label>STB ID</label>
                            <DropDown  placeholderName = {'Select STB ID'}></DropDown>
                            </div>
                            </div>
                        </section>
                        <section>
                        {/* onClick={() => dispatch(action.setTablist('Scan'))} */}
                            <nav className='border'>
                                <ul className="flex items-center justify-center flex-wrap text-sm h-full text-slate-600">
                                    <li className="mr-2" onClick={() => dispatch(action.setTablist('Pair'))}>
                                        <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Pair" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Pair</button>
                                    </li>
                                    <SmallDropdown DropDownName = {'Scan'} whichDropdown = {["Home Scan", "Auto Scan", "Manual Scan"]}></SmallDropdown>
                                    <SmallDropdown DropDownName = {'Get Info'} whichDropdown = {["Get CH DB", "Get Box Info", "Get LCN Config Info", 'Get SIPSI Dump', 'SW Download History']}></SmallDropdown>
                                    <SmallDropdown DropDownName = {'Monitor Config'} whichDropdown = {["All Frequency", "Selected Frequency", "Specific Frequency", 'Instant Monitor']}></SmallDropdown>
                                    <SmallDropdown DropDownName = {'Actions'} whichDropdown = {["Abort", "STB Dump", "Net Logging", 'OND', 'Test Tool', 'Pause STB']}></SmallDropdown>
                                    <SmallDropdown DropDownName = {'Reset'} whichDropdown = {["Factory Default", "Client Reset"]}></SmallDropdown>
                                    <SmallDropdown DropDownName = {'Config'} whichDropdown = {["Factory", "Private Descriptor", "Operator Spec LCN"]}></SmallDropdown>
                                </ul>
                            </nav>
                        </section>
                        <section className='p-7 text-slate-700'>
                            {Tablist === 'Pair' && <Pair></Pair>}
                            {Tablist === 'Home Scan' && <HomeScan></HomeScan>}
                            {Tablist === 'Auto Scan' && <AutoScan></AutoScan>}
                            {Tablist === 'Manual Scan' && <ManualScan></ManualScan>}
                            {Tablist === 'Get CH DB' && <GetCHDB></GetCHDB>}
                            {Tablist === 'Get Box Info' && <GetBoxInfo></GetBoxInfo>}
                            {Tablist === 'Get LCN Config Info' && <GetLCNconfigInfo></GetLCNconfigInfo>}
                            {Tablist === 'Get SIPSI Dump' && <GetSIPSIdump></GetSIPSIdump>}
                            {Tablist === 'SW Download History' && <SWDownloadHistroy></SWDownloadHistroy>}
                            {Tablist === 'All Frequency' && <AllFrequency></AllFrequency>}
                            {Tablist === 'Selected Frequency' && <SelectedFrequency></SelectedFrequency>}
                            {Tablist === 'Specific Frequency' && <SpecificFrequency></SpecificFrequency>}
                            {Tablist === 'Instant Monitor' && <InstantMonitor></InstantMonitor>}
                            {Tablist === 'Abort' && <Abort></Abort>}
                            {Tablist === 'STB Dump' && <STBdump></STBdump>}
                            {Tablist === 'Net Logging' && <NetLogging></NetLogging>}
                            {Tablist === 'OND' && <OND></OND>}
                            {Tablist === 'Test Tool' && <TestTool></TestTool>}
                            {Tablist === 'Pause STB' && <PauseSTB></PauseSTB>}
                            {Tablist === 'Factory Default' && <FactoryDefault></FactoryDefault>}
                            {Tablist === 'Client Reset' && <ClientReset></ClientReset>}   
                            {Tablist === 'Factory' && <Factory></Factory>}
                            {Tablist === 'Private Descriptor' && <PrivateDescriptor></PrivateDescriptor>}
                            {Tablist === 'Operator Spec LCN' && <OperatorSpec></OperatorSpec>}
                        </section>
                    </form>
                </div>
            </div>
        </main>
    )
}
