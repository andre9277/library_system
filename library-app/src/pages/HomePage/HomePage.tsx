import { LoginForm } from "../../features/authentication/components/LoginForm/LoginForm";

interface HomePageProps {
  displayLogin: boolean;
}

export default function HomePage(props: HomePageProps): JSX.Element {
  return (
    <div className="page">
      Home Page
      {props.displayLogin ? <LoginForm /> : <></>}
    </div>
  );
}
