import axios from "axios";
import toast from "react-hot-toast";
import { duration } from "@mui/material";
const apiUrl = "http://localhost:8000";
import React, { useEffect, useState } from "react";
interface RouteDetailsData {
  start_location: string;
  end_location: string;
  distance: number;
  duration: number;
  bus_number: string;
  bus_stops: string;
}

interface AddRouteProps {
  Routename?: number;
}

const RouteDetails: React.FC<AddRouteProps> = ({ Routename }) => {
  console.log(Routename);
  const id = Number(Routename);
  console.log(id);
  const [routeDetails, setRouteDetails] = useState<RouteDetailsData | null>(
    null
  );
  const [error, setError] = useState("");
  const token = localStorage.getItem("access_token");
  if (!token) {
    console.error("Token not found");
    return;
  }
  useEffect(() => {
    const fetchRouteDetails = async () => {
      const res = await axios.get(`${apiUrl}/api/routes/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data) {
        setRouteDetails(res.data);
        console.log(res.data);
      }
    };
    if (id && !isNaN(id)) {
      fetchRouteDetails();
    }
  }, [id]);
  return (
    <div className="route-details p-4 bg-gray-100 text-black rounded shadow-md max-w-md mx-auto">
      {error && <p className="error text-red-500 mb-4">{error}</p>}
      {routeDetails ? (
        <div>
          <h3 className="text-lg font-bold mb-4">Route Details</h3>
          <p className="mb-2">
            <strong>Start Location:</strong> {routeDetails.start_location}
          </p>
          <p className="mb-2">
            <strong>End Location:</strong> {routeDetails.end_location}
          </p>
          <p className="mb-2 ">
            <strong>Distance:</strong> {routeDetails.distance}
          </p>
          <p className="mb-2">
            <strong>Duration:</strong> {routeDetails.duration}
          </p>
          <p className="mb-2">
            <strong>Bus Number:</strong> {routeDetails.bus_number}
          </p>
          <p>
            <strong>Bus Stops:</strong> {routeDetails.bus_stops}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">Loading route details...</p>
      )}
    </div>
  );
};
export default RouteDetails;
