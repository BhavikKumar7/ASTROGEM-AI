import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import ConsultationCard from "../../components/admin/ConsultationCard";
import { getUserConsultations, deleteUserConsultation } from "../../services/adminService";

const UserConsultations = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    try {
      const data = await getUserConsultations(id);

      setUser(
        data.user
      );

      setConsultations(
        data.consultations
      );
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  const handleDelete = async (consultationId) => {
    const confirmDelete =
      window.confirm(
        "Delete consultation?"
      );

    if (!confirmDelete)
      return;

    try {
      await deleteUserConsultation(id, consultationId);
      setConsultations(
        consultations.filter(
          consultation =>
            consultation._id !== consultationId
        )
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
      <h1 className=" text-4xl font-bold text-blue-700 mb-3 ">
        User Consultations
      </h1>

      <h2 className=" text-gray-600 mb-10 ">
        {user?.name}
        {" • "}
        {user?.email}
      </h2>

      {
        consultations.length === 0 ?
          (
            <h2>
              No consultations found
            </h2>
          )
          :
          (
            <div className=" grid md:grid-cols-2 gap-8 ">
              {
                consultations.map(
                  consultation => (
                    <ConsultationCard
                      key={
                        consultation._id
                      }
                      consultation={
                        consultation
                      }
                      userId={
                        id
                      }
                      onDelete={
                        handleDelete
                      }
                    />
                  )
                )
              }
            </div>
          )
      }
    </AdminLayout>
  );
};

export default UserConsultations;