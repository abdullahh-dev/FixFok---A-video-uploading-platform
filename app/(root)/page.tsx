import { redirect } from "next/navigation";

const Home = () => {
  const isUserLoggedIn = false;
  if (!isUserLoggedIn) redirect("/login");
};

export default Home;
