import AuthLayout from "../../components/auth/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm"

export default function Register() {
  return (
    <AuthLayout
      title="Register"
      subtitle="Please enter your details to create account"
    >
      <RegisterForm/>
    </AuthLayout>
  );
}