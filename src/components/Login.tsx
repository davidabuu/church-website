import { Login } from "@/app/utils";
import { Button, notification } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here, using formData
    try {
      setLoading(true)
      const res = await axios.post(
        `${process.env.BASE_URL}${Login.userLogin}` || "",
        formData
      );
      console.log(res);
      notification.success({
        message: "Login Success",
        description: "Redirecting....",
      });
      localStorage.setItem("token", res.data);
      setLoading(false)
      if (res.status === 200 && localStorage.getItem("token")) {
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.log(error);
      notification.error({
        message: "Login Error",
        description: `${error.response.data}`,
      });
     
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your  Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-6">
          <Button
            htmlType="submit"
            type="primary"
            loading={loading}
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          >
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
