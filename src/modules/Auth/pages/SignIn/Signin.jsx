import React from "react";
import AuthStyles from "../../components/Auth.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { object, string } from "yup";
import { useNavigate, Navigate, useSearchParams } from "react-router-dom";
import { signin } from "../../../../apis/user";
import { useUserContext } from "../../../../context/UserContext";

export default function Signin() {
  const signinSchema = object({
    email: string()
      .required("Email không được để trống")
      .email("Email không đúng định dạng"),
    password: string().required("Mật khẩu không được để trống"),
  });
  const navigate = useNavigate();
  const { currentUser, handleSignin: onSigninSuccess } = useUserContext();

  const [searchParams] = useSearchParams();
  // các input
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
    },
    resolver: yupResolver(signinSchema),
    // khi người dùng blur nó thì sẽ tự động hiện ra lỗi
    mode: "onTouched",
  });

  const {
    mutate: handleSignin,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (payload) => signin(payload),
    onSuccess: (data) => {
      // key data là dữ liệu api trả về
      console.log("data đã đăng nhập", data); //FROM API
      // localStorage.setItem("currentUser", JSON.stringify(data));
      onSigninSuccess(data); // from UserContext

    },
  });

  // sau khi form thành công
  const onSubmit = (values) => {
    console.log(values);
    // gọi API đăng ký
    handleSignin(values);
  };

  // sau khi form thất bại
  const onError = (error) => {
    console.log("Lỗi : ", error);
  };

  if (currentUser) {
    const redirectTo = searchParams.get("redirectTo");
    return <Navigate to={redirectTo || "/"} replace />;
  }
  return (
    <div className={`${AuthStyles.auth}`}>
      <div className={`${AuthStyles.auth_container}`}>
        <div className={`${AuthStyles.auth_container_form}`}>
          <h1>SIGN IN !</h1>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {/* EMAIL */}
            <div className={`${AuthStyles.form_input}`}>
              <h6>Email</h6>
              <input
                className={`${AuthStyles.input_email}`}
                type="text"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            {/* PASSWORD */}
            <div className={`${AuthStyles.form_input}`}>
              <h6>Password</h6>
              <input
                className={`${AuthStyles.input_email}`}
                type="password"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div className="text-center">
              <button className="btn btn-success btn-lg" type="submit">
                ĐĂNG NHẬP
              </button>
              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
