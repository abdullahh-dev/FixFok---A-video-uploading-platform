import LoginForm from "@/components/Auth/Login/LoginForm";
import AuthCard from "@/components/ui/cards/AuthCard";

const LoginPage = () => {
  return (
    <AuthCard
      title="Login"
      footerLabel="Don't have an account?"
      footerLinkLabel="Signup"
      footerLinkHref="/signup"
    >
      <LoginForm />
    </AuthCard>
  );
};

export default LoginPage;
