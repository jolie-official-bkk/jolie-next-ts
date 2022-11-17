import { XIcon } from "@heroicons/react/outline";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ILogin } from "../../interfaces/user.interface";
import { handleLogin } from "../../api/auth";
import TextInput from "../input/TextInput";
import CircleSpinner from "../loading/CircleSpinner";
import { UserContext } from "../../contexts/UserContext";
import Button from "../buttons/Button";
import { useRouter } from "next/router";

type PropsType = {
  setShowOrderResponseModal: Dispatch<SetStateAction<boolean>>;
};

function OrderResponseModal({ setShowOrderResponseModal }: PropsType) {
  const router = useRouter();
  const { setIsAuthenticated } = useContext(UserContext);
  const [submission, setSubmission] = useState<ILogin>({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

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

    await handleLogin(requestBody)
      .then((response) => {
        if (response && response.status === "OK") {
          setHasError(false);
          localStorage.setItem("jolie-token", response.data.token);
          setIsAuthenticated(true);
          setShowOrderResponseModal(false);
        } else {
          setHasError(true);
        }
        setIsSubmitting(false);
      })
      .catch((error: any) => {
        console.error(error.message);
      });
  }

  function handleCloseModal(): void {
    setShowOrderResponseModal(false);
    setHasError(false);
  }

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden flex flex-col items-center absolute top-0 z-50 w-full h-screen bg-opacity-30 bg-black"
    >
      <div className="relative flex flex-col justify-center h-full">
        <div className="relative h-44 bg-white rounded-[20px] shadow">
          <div className="flex flex-col h-full items-center justify-between p-8">
            <p className="text-xl font-medium">Great job!</p>
            <button
              className={`flex min-w-[200px] h-10 px-8 justify-center items-center sticky bottom-0 bg-black text-white text-sm shadow-md shadow-black/50`}
              onClick={() => {
                setShowOrderResponseModal(false);
                router.push("/");
              }}
            >
              GO BACK TO HOMEPAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderResponseModal;
