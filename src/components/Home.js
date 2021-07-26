import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/authActions";

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(loginUser("tenzin@gmail.com", "12345"));
  }, []);
  console.log({ user });

  return <div>Home</div>;
}
