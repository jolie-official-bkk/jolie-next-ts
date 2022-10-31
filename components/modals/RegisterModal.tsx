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
import { handleRegister } from "../../api/auth";
import { UserContext } from "../../contexts/UserContext";
import { IRegister } from "../../interfaces/user.interface";
import Dropdown from "../inputs/Dropdown";
import TextInput from "../inputs/TextInput";
import CircleSpinner from "../loadings/CircleSpinner";

type PropsType = {
  showRegisterModal: boolean;
  setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
};

function RegisterModal({ showRegisterModal, setShowRegisterModal }: PropsType) {
  const { setIsAuthenticated } = useContext(UserContext)
  const [submission, setSubmission] = useState<IRegister>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    date_of_birth: new Date(new Date().toUTCString()),
    gender: "male",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  function onSubmissionChange(event: ChangeEvent<HTMLInputElement>): void {
    setSubmission({
      ...submission,
      [event.target.name]: event.target.name === "date_of_birth" ? new Date(new Date(event.target.value).toUTCString()) : event.target.value,
    });
  }

  async function handleFormSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    setIsSubmitting(true);
    const { confirm_password, ...rest } = submission;
    const request: IRegister = { ...rest }
    const requestBody = JSON.stringify(request)

    console.log(requestBody);

    try {
      await handleRegister(requestBody).then((response) => {
        if (response && response.status == "OK") {
          localStorage.setItem("token", response.data.token);
          setIsAuthenticated(true);
          setShowRegisterModal(false)
        }
        setIsSubmitting(false)
      })
    } catch (error: any) {
      console.error(error.message);
    }
  }

  if (showRegisterModal) {
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
                  onClick={() => setShowRegisterModal(false)}
                />
              </div>
              <form className="space-y-2" onSubmit={handleFormSubmit}>
                <div className="flex">
                  <TextInput
                    label="First Name"
                    name={"first_name"}
                    placeholder={"thanat"}
                    onChange={(event) => onSubmissionChange(event)}
                  />
                  <div className="w-4" />
                  <TextInput
                    label="Last Name"
                    name={"last_name"}
                    placeholder={"raktham"}
                    onChange={(event) => onSubmissionChange(event)}
                  />
                </div>
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
                <TextInput
                  label={"Confirm Your password"}
                  name={"confirm_password"}
                  type={"password"}
                  onChange={(event) => onSubmissionChange(event)}
                />
                <div className="flex pb-2">
                  <TextInput
                    label={"Date Of Birth"}
                    name={"date_of_birth"}
                    type={"date"}
                    onChange={(event) => onSubmissionChange(event)}
                  />
                  <div className="w-8" />
                  <Dropdown
                    label="Gender"
                    submission={submission}
                    setSubmission={setSubmission}
                    value={submission.gender}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {isSubmitting ?
                    <CircleSpinner /> :
                    <p>
                      Register
                    </p>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Fragment />;
  }
}

export default RegisterModal;
