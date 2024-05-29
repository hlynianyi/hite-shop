import React from "react";
import { useAuth } from "../../context/index";
import { ReactComponent as ProfileIcon } from "../../assets/navbarProfile.svg";
import { ReactComponent as MyOrdersIcon } from "../../assets/myOrders.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { doSignOut } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

const OrderListEmpty = () => <p>Order list empty</p>;

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
    <div className="flex flex-col grow px-4 md:px-4 lg:px-90 text-neutral-800 font-poiret text-lg">
      <section className="pt-4 flex justify-between text-base">
        <div className="flex items-center text-neutral-500 gap-1 text-lg">
          <ProfileIcon />
          {currentUser.email}
        </div>
        <div>
          <button className="flex items-center gap-1" onClick={handleSignout}>
            Sign out
            <LogoutIcon />
          </button>
        </div>
      </section>
      <section className="flex justify-start items-center gap-1 pt-6">
        {/* <div className="flex flex-col gap-3">
          <button className="flex items-center gap-1">
            <MyOrdersIcon />
            My orders
          </button>
          <button className="flex items-center gap-1" onClick={handleSignout}>
            <LogoutIcon />
            Sign out
          </button>
        </div> */}
        <MyOrdersIcon />
        <OrderListEmpty />
      </section>
    </div>
  );
};

export default UserProfile;
