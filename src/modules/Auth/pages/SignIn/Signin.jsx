import React from "react";
import AuthStyles from "../../components/Auth.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { object, string } from "yup";

export default function Signin() {
  const signinSchema = object({
    taiKhoan: string().required("Tài khoản không được để trống"),
    matKhau: string()
      .required("Mật khẩu không được để trống")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Mật khẩu ít nhất 8 kí tự và không được để trống,1 ký tự hoa, 1 ký tự thường và 1 ký tự số "
      ),
    email: string()
      .required("Email không được để trống")
      .email("Email không đúng định dạng"),
    hoTen: string().required("Họ tên không được để trống"),
    soDt: string().required("Số điện thoại không được để trống"),
  });

  // các input
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    resolver: yupResolver(signinSchema),
    // khi người dùng blur nó thì sẽ tự động hiện ra lỗi
    mode: "onTouched",
  });
  return <div>Signin</div>;
}
