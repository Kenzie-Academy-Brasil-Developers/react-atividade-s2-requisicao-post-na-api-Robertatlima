import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Display from "../Display";
import { useState } from "react";
import "./style.css";

const Login = () => {
  const [autorized, setAutorized] = useState("");

  const formSchema = yup.object.apply().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleForm = (formData) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", formData)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.acess);
        setAutorized(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <input placeholder="Username" {...register("username")} />
          {errors.username?.message}
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}
        </div>
        <button type="submit">Login</button>
      </form>
      {/* {autorized && <Display autorized={autorized} />} */}
      <Display autorized={autorized} />
    </div>
  );
};
export default Login;
