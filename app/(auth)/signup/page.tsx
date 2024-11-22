import SignUpForm from "@/components/Auth/Signup/SignupForm";
import AuthCard from "@/components/ui/cards/AuthCard";

const SignUpPage = () => {
  return (
    <AuthCard
      title="Sign Up"
      footerLabel="Already have an account?"
      footerLinkLabel="Login"
      footerLinkHref="/login"
    >
      <SignUpForm />
    </AuthCard>
  );
};

export default SignUpPage;
