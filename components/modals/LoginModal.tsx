import { XIcon } from "@heroicons/react/outline";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  useState,
} from "react";
import { ILogin } from "../../interfaces/user.interface";
import TextInput from "../inputs/TextInput";
import CircleSpinner from "../loadings/CircleSpinner";

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

  async function handleLogin(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log(submission);
        setIsSubmitting(false);
      }, 1000);
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
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="py-5 px-5 lg:px-8">
              <div className="flex h-12 justify-between">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign up
                </h3>
                <XIcon
                  className="h-6 text-white cursor-pointer"
                  onClick={() => setShowLoginModal(false)}
                />
              </div>
              <form className="space-y-2" onSubmit={handleLogin}>
                <TextInput
                  label={"Your Email"}
                  name={"email"}
                  placeholder={"sun@jolie.co"}
                  type={"email"}
                  onChange={(event) => onSubmissionChange(event)}
                />
                <TextInput
                  label={"Your password"}
                  name={"password"}
                  type={"password"}
                  onChange={(event) => onSubmissionChange(event)}
                />
                <div className="py-2">
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {isSubmitting && <CircleSpinner />}
                    {!isSubmitting && <p>{"Login"}</p>}
                  </button>
                </div>
              </form>
              <div className="flex text-sm font-medium text-gray-500 dark:text-gray-300">
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
