import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.init";
import UpdateProfileModal from "./UpdateProfileModal";

const MyProfile = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const member = localStorage.getItem("member");
  const [openUpdateModal, setOpenUpdateModal] = useState(null);
  return (
    <>
      <div className="md:m-16">
        <div className="flex-1  flex flex-col">
          <div className=" p-6 rounded-2xl  shadow">
            <div className="divider before:bg-secondary after:bg-secondary">
              <h2 className=" uppercase md:text-4xl text-secondary font-bold">
                {admin?.uid ? "Admin Profile" : "Member Profile"}
              </h2>
            </div>
            <form autoComplete="off">
              <div className="lg:my-16 md:my-8 ">
                <div className="flex lg:flex-row flex-col  items-center justify-center lg:gap-10 md:gap-6 gap-4">
                  <div className="avatar">
                    <div className="lg:w-80 md:w-56 w-32 ring-2 ring-secondary ring-offset-base-100 ring-offset-2 rounded">
                      <img
                        className="h-auto w-full mx-auto"
                        src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div>
                    <ul className="bg-lime-50 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-5 mt-3 divide-y rounded shadow-sm">
                      <li className="flex items-center py-3">
                        <span className="md:hidden lg:block">Role:</span>
                        <span className="ml-auto">
                          <span className="bg-green-500 py-1 px-2 rounded text-white text-sm ml-2">
                            {admin?.uid ? "Admin" : "Member"}
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col md:gap-4 gap-2 md:font-semibold md:text-xl">
                    <p>
                      <strong>Name: </strong>
                    </p>
                    <p>
                      <strong>Email: </strong>
                    </p>
                    <p>
                      <strong>Phone: </strong>
                    </p>
                    {admin?.uid ? (
                      <p>
                        <strong>Teams: </strong>
                      </p>
                    ) : (
                      <p>
                        <strong>ID: </strong>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="divider before:bg-secondary after:bg-secondary">
                <label
                  disabled={member}
                  htmlFor="update-profile"
                  onClick={() => setOpenUpdateModal({})}
                  className="btn btn-primary modal-button mb-5 text-white"
                >
                  Update Profile
                </label>
              </div>
            </form>
            {openUpdateModal && (
              <UpdateProfileModal
                openUpdateModal={openUpdateModal}
                setOpenUpdateModal={setOpenUpdateModal}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
