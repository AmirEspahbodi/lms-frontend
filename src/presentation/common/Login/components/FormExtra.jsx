import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../../../../Core/constants/Routs";

export default function FormExtra({ emailVerifed }) {
  const navigation = useNavigate();

  const passwordResetHandler = (e) => {
    e.preventDefault();
    navigation(APP_ROUTES.PASSWORD_RESET);
  };

  const emailVerificationHandler = (e) => {
    e.preventDefault();
    navigation(APP_ROUTES.EMAIL_VERIFICATION);
  };
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <p
          onClick={passwordResetHandler}
          className="font-medium text-purple-600 hover:text-purple-500 make-a"
        >
          Forgot your password?
        </p>
        {!emailVerifed && (
          <p
            onClick={emailVerificationHandler}
            className="font-medium text-purple-600 hover:text-purple-500 make-a"
          >
            verify your email
          </p>
        )}
      </div>
    </div>
  );
}
