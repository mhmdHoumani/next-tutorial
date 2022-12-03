import React, { useEffect, useState } from "react";

export type Dashboard = {
  posts: number;
  likes: number;
  followers: number;
  following: number;
};

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<Dashboard | null>(null);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5050/dashboard", {
      method: "GET",
    });
    const data: Dashboard = await response.json();
    setDashboardData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h2 className="text-lg font-bold">Loading data...</h2>;
  }
  return (
    <div className="m-4 p-4 shadow">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h4 className="font-bold">Posts - {dashboardData!.posts}</h4>
      <h4 className="font-bold">Likes - {dashboardData!.likes}</h4>
      <h4 className="font-bold">Followers - {dashboardData!.followers}</h4>
      <h4 className="font-bold">Following - {dashboardData!.following}</h4>
    </div>
  );
};

export default Dashboard;
