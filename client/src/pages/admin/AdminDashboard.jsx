import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import DashboardCard from "../../components/admin/DashboardCard";
import { getAnalytics } from "../../services/adminService";

import GemstoneBarChart from "../../components/admin/charts/GemstoneBarChart";
import ProblemBarChart from "../../components/admin/charts/ProblemBarChart";
import ConsultationLineChart from "../../components/admin/charts/ConsultationLineChart";

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const data = await getAnalytics();

      setAnalytics(
        data.analytics
      );
    }

    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <h1 className="text-2xl font-semibold">
          Loading...
        </h1>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <h1 className=" text-4xl font-bold text-blue-700 mb-10 ">
        Dashboard
      </h1>

      {/* Cards */}
      <div className=" grid md:grid-cols-3 gap-8 ">
        <DashboardCard
          title="Total Users"
          value={analytics.totalUsers}
        />

        <DashboardCard
          title="Total Admins"
          value={analytics.totalAdmins}
        />

        <DashboardCard
          title="Total Consultations"
          value={analytics.totalConsultations}
        />
      </div>

      {/* Charts */}
      <div className=" grid lg:grid-cols-2 gap-8 mt-10 ">
        <GemstoneBarChart
          data={analytics.gemstoneAnalytics}
        />

        <ProblemBarChart
          data={analytics.problemAnalytics}
        />
      </div>

      {/* Monthly Trend */}
      <div className="mt-10">
        <ConsultationLineChart
          data={analytics.monthlyConsultations}
        />
      </div>

      {/* Recent Consultations */}
      <div className=" bg-white rounded-3xl shadow-lg p-8 mt-10 ">
        <h2 className=" text-2xl font-bold text-blue-700 mb-6 ">
          Recent Consultations
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4">
                  User
                </th>

                <th className="text-left py-4">
                  Email
                </th>

                <th className="text-left py-4">
                  Problem
                </th>
              </tr>
            </thead>

            <tbody>
              {
                analytics.recentConsultations.map(
                  consultation => (
                    <tr
                      key={consultation._id}
                      className="border-b hover:bg-blue-50"
                    >
                      <td className="py-4">
                        {
                          consultation.user?.name
                        }
                      </td>
                      <td>
                        {
                          consultation.user?.email
                        }
                      </td>
                      <td>
                        {
                          consultation.problem
                        }
                      </td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;