import React from "react";
import { useAuth } from "../../context/index";
import { ReactComponent as ProfileIcon } from "../../assets/navbarProfile.svg";
import { ReactComponent as MyOrdersIcon } from "../../assets/myOrders.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { doSignOut } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

// todo: create order list feature
const UserProfile = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  console.log("UserProfile currentUser :>> ", currentUser.email);

  const handleSignout = () => {
    doSignOut();
    navigate("/login");
    console.log("currentUser :>> ", currentUser);
  };

  return (
    <div className="flex flex-col grow px-4 md:px-4 lg:px-90 text-neutral-800 font-poiret text-xl gap-6">
      <section className="pt-4 flex flex-col gap-6 justify-between">
        <div className="flex items-center text-neutral-500 gap-1">
          <ProfileIcon />
          <p>{currentUser.email}</p>
        </div>
        <button
          className="flex items-center gap-1 hover:underline underline-offset-4 decoration-customblue"
          onClick={handleSignout}
        >
          <LogoutIcon />
          <p>Log out</p>
        </button>
      </section>
      <section className="flex justify-start items-center gap-1">
        <MyOrdersIcon />
        <p>Order list is empty</p>
      </section>
    </div>
  );
};

export default UserProfile;
