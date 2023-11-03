import React from "react";
import AuthStyles from "../../components/Auth.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { object, string } from "yup";
import { signup } from "../../../../apis/user";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const signupSchema = object({
    name: string().required("Tài khoản không được để trống"),
    email: string()
      .required("Email không được để trống")
      .email("Email không đúng định dạng"),
    password: string()
      .required("Mật khẩu không được để trống")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Mật khẩu ít nhất 8 kí tự và không được để trống,1 ký tự hoa, 1 ký tự thường và 1 ký tự số "
      ),
    phone: string().required("Số điện thoại không được để trống"),
    birthday: string().required("Họ tên không được để trống"),
    gender: string().required("Xin vui lòng chọn giới tính"),
  });
  const navigate = useNavigate();
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
    resolver: yupResolver(signupSchema),
    // khi người dùng blur nó thì sẽ tự động hiện ra lỗi
    mode: "onTouched",
  });

  const {
    mutate: handleSignup,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (payload) => signup(payload),
    onSuccess: () => {
      navigate("/sign-in");
    },
  });

  // sau khi form thành công
  const onSubmit = (values) => {
    console.log(values);
    // gọi API đăng ký
    handleSignup(values);
  };

  // sau khi form thất bại
  const onError = (error) => {
    console.log("Lỗi : ", error);
  };
  return (
    <div className={`${AuthStyles.auth}`}>
      <div className={`${AuthStyles.auth_container}`}>
        <div className={`${AuthStyles.auth_container_form}`}>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {/* FULL NAME */}
            <div className={`${AuthStyles.form_input}`}>
              <label htmlFor="">Full Name</label>
              <input
                className={`${AuthStyles.input_taiKhoan}`}
                type="text"
                placeholder="Tài Khoản"
                {...register("name")}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            {/* EMAIL */}
            <div className={`${AuthStyles.form_input}`}>
              <label htmlFor="">Email</label>
              <input
                className={`${AuthStyles.input_taiKhoan}`}
                type="text"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            {/* PASSWORD */}
            <div className={`${AuthStyles.form_input}`}>
              <label htmlFor="">PASSWORD</label>
              <input
                className={`${AuthStyles.input_taiKhoan}`}
                type="password"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            {/* PHONE-NUMBER */}
            <div className={`${AuthStyles.form_input}`}>
              <label htmlFor="">Phone Number</label>
              <input
                className={`${AuthStyles.input_taiKhoan}`}
                type="text"
                placeholder="Phone number"
                {...register("phone")}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            {/* BIRTHDAY */}
            <div className={`${AuthStyles.form_input}`}>
              <label htmlFor="">Birthday</label>
              <input
                className={`${AuthStyles.input_taiKhoan}`}
                type="date"
                {...register("birthday")}
              />
              {errors.birthday && <p>{errors.birthday.message}</p>}
            </div>
            {/* GENDER */}
            <div className={`${AuthStyles.form_input}`}>
              <label htmlFor="">Gender</label>
              <input
                className={`${AuthStyles.input_taiKhoan}`}
                type="radio"
                value="true"
                {...register("gender")}
              />
              <input
                className={`${AuthStyles.input_taiKhoan}`}
                type="radio"
                value="false"
                {...register("gender")}
              />
              {errors.gender && <p>{errors.gender.message}</p>}
            </div>
            <button className="btn btn-success btn-lg" type="submit">
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
