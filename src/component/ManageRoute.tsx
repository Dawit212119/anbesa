import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Actionbtn from "./Admincomponent/Actionbtn";
import { MdAccessTimeFilled, MdDone, MdRemoveRedEye } from "react-icons/md";
import { FaTimesCircle } from "react-icons/fa";
import Status from "./Admincomponent/Status";

import axios from "axios";
import toast from "react-hot-toast";
import { duration } from "@mui/material";
import { Link } from "react-router-dom";
const apiUrl = "http://localhost:8000";
interface Route {
  id: number; // or string, depending on your backend response
  Route: string;
  Time: string;
  busNumber: string;
}
const paginationModel = { page: 0, pageSize: 5 };
interface NotfiyRouteProps {
  NavigatetoRouteto: (id: number) => void;
}
const UpdateRoute: React.FC<NotfiyRouteProps> = ({ NavigatetoRouteto }) => {
  const [fetchrows, setRows] = React.useState<Route[]>([]);

  ///////     fetching the request data
  const token = localStorage.getItem("access_token");
  if (!token) {
    console.error("Token not found");
    return;
  }
  React.useEffect(() => {
    const fetchingData = async () => {
      const res = await axios.get(`${apiUrl}/api/routes`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      if (res.data) {
        const processedRows = res.data.map((route, index) => ({
          id: route.id,
          Route: `${route.start_location} - ${route.end_location}`,
          Time: `${route.duration} hours`,
          busNumber: route.bus_number,
        }));
        setRows(processedRows);
        console.log(fetchingData);
      }
    };
    fetchingData();
  }, []);
  const handleviewed = (id: number) => {
    console.log(id);
    NavigatetoRouteto(id);
  };
  const handleDenied = async (id: number) => {
    console.log(Number(id));
    try {
      const res = await axios.delete(`${apiUrl}/api/routes/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200 || res.status === 204) {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      }
    } catch (error) {}

    console.log(id);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "Route", headerName: "Route", width: 200 },
    {
      field: "Time",
      headerName: "Time",
      type: "string",
      width: 200,
    },
    {
      field: "busNumber",
      headerName: "Bus_Number",
      type: "number",
      width: 200,
    },

    {
      field: "Action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex text-center justify-around gap-4 w-full my-2">
            <Actionbtn
              icon={FaTimesCircle}
              onClick={() => {
                handleDenied(params.row.id);
              }}
            />
            <Actionbtn
              icon={MdRemoveRedEye}
              onClick={() => {
                handleviewed(params.row.id);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="font-bold text-xl mb-7 text-center">
        Current <span className="text-orange-500 ">Route</span>{" "}
      </div>
      <Paper
        sx={{ height: 400, width: "100%" }}
        className="bg-slate-400 text-center"
      >
        <DataGrid
          rows={fetchrows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
};

export default UpdateRoute;
