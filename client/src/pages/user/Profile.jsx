import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserLayout from "../../layouts/UserLayout";
import { getProfile, updateProfile } from "../../services/userService";

const Profile = () => {
  const { token } = useSelector(
    state => state.auth
  );

  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    name: "",
    dob: "",
    birthTime: "",
    birthCity: "",
    birthDistrict: "",
    birthState: "",
    birthCountry: "",
    latitude: "",
    longitude: "",
    email: ""
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();
      setProfile({
        name: data.user.name,
        dob: data.user.dob,
        birthTime: data.user.birthTime,
        birthCity: data.user.birthLocation.city,
        birthDistrict: data.user.birthLocation.district,
        birthState: data.user.birthLocation.state,
        birthCountry: data.user.birthLocation.country,
        latitude: data.user.birthLocation.latitude,
        longitude: data.user.birthLocation.longitude,
        email: data.user.email
      });
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };


  const handleChange = e => {
    setProfile({
      ...profile,
      [e.target.name]:
        e.target.value
    });
  };


  const handleUpdate = async () => {
    try {
      await updateProfile({
        name: profile.name,
        dob: profile.dob,
        birthTime: profile.birthTime,
        birthLocation: {
          city: profile.birthCity,
          district: profile.birthDistrict,
          state: profile.birthState,
          country: profile.birthCountry,
          latitude: Number(profile.latitude),
          longitude: Number(profile.longitude)
        }
      });

      setEditMode(false);
      alert("Profile updated successfully");

      fetchProfile();
    } catch (error) {
      console.log(error);
    }
  };


  if (loading) {
    return (
      <UserLayout>
        <h1>
          Loading...
        </h1>

      </UserLayout>
    );
  }


  return (
    <UserLayout>
      <div className=" bg-white shadow-lg rounded-3xl p-10 max-w-5xl ">
        <h1 className=" text-3xl font-bold text-blue-700 mb-8 ">
          My Profile
        </h1>

        <div className=" grid md:grid-cols-2 gap-6 ">
          <div>
            <label>
              Name
            </label>
            <input
              name="name"
              value={profile.name || ""}
              disabled={!editMode}
              onChange={handleChange}
              className="
                            w-full
                            border
                            rounded-xl
                            px-4
                            py-3
                            "
            />
          </div>

          <div>
            <label>
              Email
            </label>
            <input
              value={profile.email || ""}
              disabled
              className="
                            w-full
                            border
                            rounded-xl
                            px-4
                            py-3
                            bg-gray-100
                            "
            />
          </div>

          <div>
            <label>
              Date Of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={
                profile.dob?.substring(
                  0,
                  10
                ) || ""
              }
              disabled={!editMode}
              onChange={handleChange}
              className="
                            w-full
                            border
                            rounded-xl
                            px-4
                            py-3
                            "
            />
          </div>

          <div>
            <label>
              Birth Time
            </label>
            <input
              name="birthTime"
              value={
                profile.birthTime || ""
              }
              disabled={!editMode}
              onChange={handleChange}
              className="
                            w-full
                            border
                            rounded-xl
                            px-4
                            py-3
                            "
            />
          </div>

          <div>
            <label>Birth City</label>
            <input
              name="birthCity"
              value={profile.birthCity || ""}
              disabled={!editMode}
              onChange={handleChange}
              className="
      w-full
      border
      rounded-xl
      px-4
      py-3
    "
            />
          </div>

          <div>
            <label>Birth District</label>
            <input
              name="birthDistrict"
              value={profile.birthDistrict || ""}
              disabled={!editMode}
              onChange={handleChange}
              className="
      w-full
      border
      rounded-xl
      px-4
      py-3
    "
            />
          </div>

          <div>
            <label>Birth State</label>
            <input
              name="birthState"
              value={profile.birthState || ""}
              disabled={!editMode}
              onChange={handleChange}
              className="
      w-full
      border
      rounded-xl
      px-4
      py-3
    "
            />
          </div>

          <div>
            <label>Birth Country</label>
            <input
              name="birthCountry"
              value={profile.birthCountry || ""}
              disabled={!editMode}
              onChange={handleChange}
              className="
      w-full
      border
      rounded-xl
      px-4
      py-3
    "
            />
          </div>

          <div>
            <label>Latitude</label>
            <input
              type="number"
              step="any"
              name="latitude"
              value={profile.latitude || ""}
              disabled={!editMode}
              onChange={handleChange}
              className="
      w-full
      border
      rounded-xl
      px-4
      py-3
    "
            />
          </div>

          <div>
            <label>Longitude</label>
            <input
              type="number"
              step="any"
              name="longitude"
              value={profile.longitude || ""}
              disabled={!editMode}
              onChange={handleChange}
              className="
      w-full
      border
      rounded-xl
      px-4
      py-3
    "
            />
          </div>
        </div>

        <div className="mt-8">
          {
            editMode ?
              <button
                onClick={
                  handleUpdate
                }
                className="
                                bg-blue-600
                                text-white
                                px-6
                                py-3
                                rounded-xl
                                "
              >
                Save Changes
              </button>
              :
              <button
                onClick={() =>
                  setEditMode(
                    true
                  )
                }
                className="
                                bg-blue-600
                                text-white
                                px-6
                                py-3
                                rounded-xl
                                "
              >
                Edit Profile
              </button>
          }
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;