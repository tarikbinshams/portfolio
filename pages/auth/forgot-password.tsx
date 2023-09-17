import { AuthServiceInstance } from "@app/auth/service/AuthService";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useMutation } from "react-query";

export default function ForgotPassword() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const [isEmailFocused, setIsEmailFocused] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e: any) => {
    setEmail(e);
    if (!pattern.test(e)) {
      setEmailError("Please enter a valid email address!");
    } else {
      setEmailError("");
    }
  };

  useEffect(() => {
    const handleClickInside = () => {
      setIsEmailFocused(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (emailRef.current && !emailRef.current.contains(event.target as Node)) {
        setIsEmailFocused(false);
      }
    };

    const divElement = emailRef.current;

    if (divElement) {
      divElement.addEventListener("click", handleClickInside);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      if (divElement) {
        divElement.removeEventListener("click", handleClickInside);
      }

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = () => {
    if (email === "") {
      setEmailError("Email cannot be empty");
      return;
    }
    if (email && !pattern.test(email)) {
      setEmailError("Please enter a valid email address!");
      return;
    }
    const data = {
      email: email,
    };
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationFn: async (data: any) => await AuthServiceInstance.forgotPassword(data),
    onMutate: (variables) => {
      setIsLoading(true);
    },
    onError: (error, variables, context) => {
      console.log(error);
      setIsLoading(false);
    },
    onSuccess: async (data) => {
      setIsLoading(false);
    },
  });

  return (
    <div className="t-grid t-place-items-center t-mt-20 t-mb-32 lg:t-my-20">
      <div className="t-rounded-[15px] t-border t-border-[#2B79D3] t-h-[380px] sm:t-w-[380px] t-w-[355px] lg:t-w-[440px]">
        <div className="t-flex t-justify-left t-ml-4 t-mt-6">
          <img src="/images/admin-panel-vts.png" className="t-h-[115px] t-w-[115px]" alt="" />
          <p className="t-text-[#1B1617] t-text-[22px] t-font-[plain-light] t-text-left t-mt-4 t-ml-4 t-w-[200px]">
            Reset your password
          </p>
        </div>
        <p className="t-text-[#2B79D3] t-text-[11px] t-font-[plain-ultralight] t-text-center t-mt-2">
          Please enter your email to get your new password.
        </p>

        <div className="t-mt-8 t-grid t-place-items-center">
          <div className="t-relative ">
            <input
              ref={emailRef}
              id="emailField"
              type="text"
              className={`t-w-[340px] lg:t-w-[370px] t-h-[45px] t-pl-4 t-border t-border-[#7E7982] focus:t-border-[#2B79D3] focus:t-outline-none focus:t-ring-1  t-rounded-lg t-px-2 t-py-1 t-bg-white `}
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <label
              htmlFor="emailField"
              className={`t-absolute t-left-3 t-top-[-12px] t-bg-white ${
                isEmailFocused ? "t-text-[#2B79D3]" : "t-text-[#7E7982]"
              } t-px-1`}
            >
              Email
            </label>
            {emailError && (
              <p className="t-absolute t-left-2 t-top-[48px] t-text-[#FF0000] t-text-[12px] t-font-[plain-ultralight]">
                {emailError}
              </p>
            )}
          </div>
          <div className="t-mt-4 t-flex t-justify-end t-w-[340px] lg:t-w-[370px]">
            <Link href="/auth/login">
              <a className="t-mb-1 t-text-[12px] t-text-[#2B79D3] t-text-right t-cursor-pointer">
                Back to Login
              </a>
            </Link>
          </div>

          <div className="t-mt-4">
            <div
              onClick={handleSubmit}
              className="t-bg-[#2B79D3] t-rounded-lg t-text-white t-font-[plain-light] t-pt-2 t-pb-2.5 t-w-[340px] lg:t-w-[370px] t-text-center t-cursor-pointer"
            >
              {isLoading ? "Loading..." : "Reset Password"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
