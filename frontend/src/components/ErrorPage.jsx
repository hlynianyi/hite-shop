import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-start items-center text-[2rem] font-poiret pt-6">
      <div className="text-center">SORRY</div>
      <div className="text-center">We couldn't find that page</div>
      <div className="text-center pt-4">
        <p>Try to go back to</p>
        <Link to={"/"} className="underline">
          homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
