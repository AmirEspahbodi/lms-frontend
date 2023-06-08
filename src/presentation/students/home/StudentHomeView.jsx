import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../../Core/customHooks";
import APP_ROUTES from "../../../Core/constants/Routs";
import Header from "../../../Core/components/Header";
import StudentHomeUseCase from "../../../Domain/UseCases/Students/studentHomeUseCase";
import Failure from "../../../Core/Failure/Failure";

function StudentHomeView() {
  const fetchData = async () => {
    const result = await StudentHomeUseCase();
    if (result instanceof Failure) {
      console.log(result);
    } else {
      console.log(result);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div>
        <p>Student home StudentHomeView</p>
      </div>
    </>
  );
}

export default StudentHomeView;
