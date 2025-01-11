import React, { useState } from "react";
import {
  MdDashboard,
  MdDns,
  MdFormatListBulleted,
  MdLibraryAdd,
  MdNotificationAdd,
} from "react-icons/md";
import ArrowLeft from "../util/arrowLeft";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import AddRoute from "../component/AddRoute";
import UpdateRoute from "../component/UpdateRoute";
import ManageApplications from "../component/ManageRoute";

import NotfiyRoutes from "../component/Notify";
export default function Dashboard() {
  const [selectOption, setSelectOption] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [routeData, setRouteData] = useState("");
  const [id, setid] = useState(0);
  const NavigatetoRoute = (route: string) => {
    setRouteData(route);
    setSelectOption("addroute");
  };
  const NavigatetoRouteto = (id: number) => {
    setid(id);
    setSelectOption("updateroute");
  };
  const forms = {
    addroute: <AddRoute Routename={routeData} />,
    updateroute: <UpdateRoute Routename={id} />,
    manageroute: <ManageApplications NavigatetoRouteto={NavigatetoRouteto} />,
    notify: <NotfiyRoutes NavigatetoRoute={NavigatetoRoute} />,
  };

  return (
    <div className="flex  sm:flex-row  w-full h-screen text-white bg-gray-900 p-3">
      {/* Sidebar */}
      <aside
        className={`  p-6 bg-slate-700 rounded-lg flex flex-col  h-full justify-between ${
          isSidebarCollapsed ? "w-16" : "w-[250px]"
        }`}
      >
        {/* Header */}

        {/* <div>
          <h2 className="text-xl font-bold mb-8">Admin Dashboard</h2>
        </div> */}

        <ul className="space-y-6">
          <li
            className={`cursor-pointer flex items-center gap-2 font-bold
             ${isSidebarCollapsed && "hidden"}
            hover:text-orange-500`}
            onClick={() => setSelectOption("addroute")}
          >
            <MdLibraryAdd /> Add Route
          </li>
          <li
            className={`cursor-pointer flex items-center gap-2 font-bold
                ${isSidebarCollapsed && "hidden"}
               hover:text-orange-500`}
            onClick={() => setSelectOption("manageroute")}
          >
            <MdDns />
            Manage Route
          </li>
          <li
            className={`cursor-pointer flex items-center gap-2 font-bold
                ${isSidebarCollapsed && "hidden"}
               hover:text-orange-500`}
            onClick={() => setSelectOption("updateroute")}
          >
            <MdFormatListBulleted />
            Current Route
          </li>
          <li
            className={`cursor-pointer flex items-center gap-2 font-bold
                ${isSidebarCollapsed && "hidden"}
               hover:text-orange-500`}
            onClick={() => setSelectOption("notify")}
          >
            <MdNotificationAdd />
            Notfication
          </li>
        </ul>

        <div className=" flex flex-row items-end">
          <div className="mt-10">
            <img
              src="src/img/Logo.png"
              alt="Logo"
              className={`w-3/4 mx-auto object-contain ${
                isSidebarCollapsed && "hidden"
              }`}
            />
          </div>
          <p
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className=" absolute text-white"
          >
            {!isSidebarCollapsed ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </p>
        </div>

        {/* Footer */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-3  h-full overflow-auto">
        {selectOption ? (
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            {forms[selectOption]}
          </div>
        ) : (
          <div className="text-center text-gray-400">
            Please select an option from the sidebar to proceed.
          </div>
        )}
      </main>
    </div>
  );
}
