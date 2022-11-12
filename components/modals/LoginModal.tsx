import { XIcon } from "@heroicons/react/outline";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ILogin } from "../../interfaces/user.interface";
import { handleLogin } from "../../api/auth";
import TextInput from "../inputs/TextInput";
import CircleSpinner from "../loadings/CircleSpinner";
import { UserContext } from "../../contexts/UserContext";

type PropsType = {
  showLoginModal: boolean;
  setShowLoginModal: Dispatch<SetStateAction<boolean>>;
  setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
};

function LoginModal({
  showLoginModal,
  setShowLoginModal,
  setShowRegisterModal,
}: PropsType) {
  const { setIsAuthenticated } = useContext(UserContext);
  const [submission, setSubmission] = useState<ILogin>({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  function onSubmissionChange(event: ChangeEvent<HTMLInputElement>): void {
    setSubmission({
      ...submission,
      [event.target.name]: event.target.value,
    });
  }

  async function handleFormSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    setIsSubmitting(true);
    const requrest: ILogin = { ...submission };
    const requestBody = JSON.stringify(requrest);

    try {
      await handleLogin(requestBody).then((response) => {
        if (response && response.status === "OK") {
          localStorage.setItem("token", response.data.token);
          setIsAuthenticated(true);
          setShowLoginModal(false);
        }
        setIsSubmitting(false);
      });
    } catch (error: any) {
      console.error(error.message);
    }
  }
  if (showLoginModal) {
    return (
      <div
        id="authentication-modal"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden flex flex-col items-center absolute top-0 z-50 w-full h-screen bg-opacity-30 bg-black"
      >
        <div className="relative flex flex-col justify-center p-4 w-full max-w-md h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="py-5 px-5 lg:px-8">
              <div className="flex h-12 justify-between">
                <h3 className="text-xl font-medium text-black">Sign in</h3>
                <XIcon
                  className="h-6 text-blackcursor-pointer"
                  onClick={() => setShowLoginModal(false)}
                />
              </div>
              <form className="space-y-2" onSubmit={handleFormSubmit}>
                <TextInput
                  label={"Email"}
                  name={"email"}
                  placeholder={"sun@jolie.co"}
                  type={"email"}
                  onChange={(event) => onSubmissionChange(event)}
                />
                <TextInput
                  label={"password"}
                  name={"password"}
                  type={"password"}
                  onChange={(event) => onSubmissionChange(event)}
                />
                <div className="py-2">
                  <button
                    type="submit"
                    className="w-full text-white bg-black hover:bg-black/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    {isSubmitting && <CircleSpinner />}
                    {!isSubmitting && <p>{"Login"}</p>}
                  </button>
                </div>
              </form>
              <div className="flex text-sm font-medium text-gray-500text-black">
                Not registered?
                <p
                  className="text-blue-700 ml-2 hover:underline dark:text-blue-500"
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowRegisterModal(true);
                  }}
                >
                  Create account
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Fragment />;
  }
}

export default LoginModal;
