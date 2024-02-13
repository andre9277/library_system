interface HomePageProps {
  displayLogin: boolean;
}

export default function HomePage(props: HomePageProps): JSX.Element {
  return (
    <div className="page">
      Home Page
      {props.displayLogin ? <p> Displaying the Login Form</p> : <></>}
    </div>
  );
}
