import React from "react";
import useSWR from "swr";
import { Dashboard } from "./dashboard";

const fetcher = async () => {
  const response = await fetch("http://localhost:5050/dashboard", {
    method: "GET",
  });
  const data: Dashboard = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) {
    return <p>An error has happen</p>;
  }
  if (!data) {
    return <p>loading data...</p>;
  }
  return (
    <div className="m-4 p-4 shadow">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h4 className="font-bold">Posts - {data!.posts}</h4>
      <h4 className="font-bold">Likes - {data!.likes}</h4>
      <h4 className="font-bold">Followers - {data!.followers}</h4>
      <h4 className="font-bold">Following - {data!.following}</h4>
    </div>
  );
};

export default DashboardSWR;
