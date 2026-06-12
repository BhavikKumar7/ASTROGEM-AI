import React, {useEffect, useState} from "react";
import UserLayout from "../../layouts/UserLayout";
import DashboardCard from "../../components/user/DashboardCard";
import {getDashboardStats} from "../../services/userService";

const Dashboard = () => {
    const [stats, setStats] = useState({
        consultations: 0,
        recommendations: 0,
        gemstones: 0
    });

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const data = await getDashboardStats();
            setStats(
                data.stats
            );
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <UserLayout>

            <h1 className=" text-3xl font-bold text-blue-700 mb-8 ">
                User Dashboard
            </h1>

            <div className=" grid md:grid-cols-3 gap-6 ">
                <DashboardCard
                    title="Consultations"
                    value={
                        stats.consultations
                    }
                />

                <DashboardCard
                    title="Recommendations"
                    value={
                        stats.recommendations
                    }
                />

                <DashboardCard
                    title="Gemstones"
                    value={
                        stats.gemstones
                    }
                />
            </div>
        </UserLayout>
    );
};

export default Dashboard;