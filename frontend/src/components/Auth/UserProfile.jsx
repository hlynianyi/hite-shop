import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/index";
import { ReactComponent as ProfileIcon } from "../../assets/navbarProfile.svg";
import { ReactComponent as MyOrdersIcon } from "../../assets/myOrders.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { doSignOut } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const UserProfile = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const user = auth.currentUser;
  const db = getFirestore();

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const q = query(
            collection(db, "orders"),
            where("userId", "==", currentUser.uid)
          );
          const querySnapshot = await getDocs(q);
          const ordersList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const usersOrders = ordersList.filter((order) => {
            return order.userId === currentUser.uid;
          });
          setOrders(usersOrders);
        } catch (error) {
          console.error("Error fetching orders: ", error);
        }
      }
    };
    fetchOrders();
  }, [user, db, currentUser.uid]);

  const handleSignout = () => {
    doSignOut();
    navigate("/login");
  };

  return (
    <div className="flex flex-col grow px-4 md:px-4 lg:px-90 text-neutral-800 font-poiret text-xl gap-4">
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
      <span className="border-[1px] border-customblue" />
      <section className="flex gap-4">
        <aside className="flex flex-row gap-1 items-start">
          <MyOrdersIcon />
          <p>Orders:</p>
        </aside>
        <section className="orders font-mono">
          {orders.length > 0 ? (
            orders.map((order, orderIdx) => (
              <article key={order.id} className="order">
                <h2>
                  Order №:<span className="font-poiret">{orderIdx + 1}</span>
                </h2>
                <h2>
                  Date of order:{""}
                  <span className="font-poiret">
                    {order.createdAt.toDate().toDateString()}
                  </span>
                </h2>
                <h2>Products:{""}</h2>
                {order.items.map((item, index) => (
                  <ul className="mb-2" key={index}>
                    <li className="flex flex-row">
                      <div className="flex flex-row w-full justify-between">
                        <p>
                          <span className="font-poiret">
                            <b>{item.quantity}x</b> - {item.title}
                          </span>
                        </p>
                        <div className="ml-4 shrink-0 h-[29px] w-[36px] flex justify-center border-[1px] border-customblue">
                          <img
                            className="w-[29px] object-contain"
                            src={item.image}
                            alt=""
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                ))}
                <span className="my-2 flex border-[1px] border-customblue" />
              </article>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </section>
      </section>
    </div>
  );
};

export default UserProfile;
