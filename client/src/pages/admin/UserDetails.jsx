import React, {useEffect, useState} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import {getUserById, deleteUser} from "../../services/adminService";

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const data = await getUserById(id);

            setUser(
                data.user
            );
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        const confirmDelete =
            window.confirm(
                "Delete this user?"
            );

        if (!confirmDelete)
            return;

        try {
            await deleteUser(id);
            navigate(
                "/admin/users"
            );
        }

        catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return (
            <AdminLayout>
                <h1>
                    Loading...
                </h1>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className=" bg-white shadow-lg rounded-3xl p-10 ">
                <h1 className=" text-4xl font-bold text-blue-700 mb-10 ">
                    User Details
                </h1>

                <div className=" grid md:grid-cols-2 gap-8 ">
                    <Info
                        title="Name"
                        value={user.name}
                    />

                    <Info
                        title="Email"
                        value={user.email}
                    />

                    <Info
                        title="Date of Birth"
                        value={
                            user.dob?.substring(
                                0,
                                10
                            )
                        }
                    />

                    <Info
                        title="Birth Time"
                        value={
                            user.birthTime
                        }
                    />

                    <Info
                        title="City"
                        value={
                            user.birthLocation?.city
                        }
                    />

                    <Info
                        title="District"
                        value={
                            user.birthLocation?.district
                        }
                    />

                    <Info
                        title="State"
                        value={
                            user.birthLocation?.state
                        }
                    />

                    <Info
                        title="Country"
                        value={
                            user.birthLocation?.country
                        }
                    />

                    <Info
                        title="Latitude"
                        value={
                            user.birthLocation?.latitude
                        }
                    />

                    <Info
                        title="Longitude"
                        value={
                            user.birthLocation?.longitude
                        }
                    />

                    <Info
                        title="Role"
                        value={
                            user.role
                        }
                    />
                </div>

                <div className=" flex gap-4 mt-10 ">
                    <Link
                        to={`/admin/users/${id}/consultations`}
                        className=" bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl "
                    >
                        View Consultations
                    </Link>

                    <button
                        onClick={
                            handleDelete
                        }
                        className=" bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl "
                    >
                        Delete User
                    </button>
                </div>
            </div>
        </AdminLayout>
    );
};

const Info = ({title, value}) => (
    <div className=" bg-blue-50 rounded-2xl p-5 ">
        <h3 className=" text-blue-700 font-semibold mb-2 ">
            {title}
        </h3>
        <p>
            {value}
        </p>
    </div>
);

export default UserDetails;