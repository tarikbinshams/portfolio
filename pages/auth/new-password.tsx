import { AuthServiceInstance } from "@app/auth/service/AuthService";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useMutation } from "react-query";

export default function NewPassword() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [isNewPasswordFocused, setIsNewPasswordFocused] = React.useState<boolean>(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = React.useState<boolean>(false);
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [newPasswordError, setNewPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  const newPasswordValidity = (e: any) => {
    if (e === "") {
      setNewPasswordError("New Password cannot be empty!");
      return false;
    }
    if (e.length < 8) {
      setNewPasswordError("New Password must be at least 8 characters long!");
      return false;
    }
    if (e.length > 20) {
      setNewPasswordError("New Password must be at most 20 characters long!");
      return false;
    }
    setNewPasswordError("");
    return true;
  };

  const confirmPasswordValidity = (e: any) => {
    if (e === "") {
      setConfirmPasswordError("Confirm Password cannot be empty!");
      return false;
    }
    if (e.length < 8) {
      setConfirmPasswordError("Confirm Password must be at least 8 characters long!");
      return false;
    }

    if (e.length > 20) {
      setConfirmPasswordError("Confirm Password must be at most 20 characters long!");
      return false;
    }

    if (e !== newPassword) {
      setConfirmPasswordError("Confirm Password must match New Password!");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  useEffect(() => {
    const handleClickInside = () => {
      setIsNewPasswordFocused(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (newPasswordRef.current && !newPasswordRef.current.contains(event.target as Node)) {
        setIsNewPasswordFocused(false);
      }
    };

    const divElement = newPasswordRef.current;

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

  useEffect(() => {
    const handleClickInside = () => {
      setIsConfirmPasswordFocused(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        confirmPasswordRef.current &&
        !confirmPasswordRef.current.contains(event.target as Node)
      ) {
        setIsConfirmPasswordFocused(false);
      }
    };

    const divElement = confirmPasswordRef.current;

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

  const handleNewPasswordChange = (e: any) => {
    setNewPassword(e);
    newPasswordValidity(e);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e);
    confirmPasswordValidity(e);
  };

  const handleSubmit = () => {
    // setIsLoading(true);
    newPasswordValidity(newPassword);
    confirmPasswordValidity(confirmPassword);

    if (router.query.email && router.query.token) {
      if (newPasswordValidity(newPassword) && confirmPasswordValidity(confirmPassword)) {
        const data = {
          email: router.query.email,
          token: router.query.token,
          password: newPassword,
        };
        mutation.mutate(data);
      }
    } else {
      console.log("invalid");
    }
  };

  const mutation = useMutation({
    mutationFn: async (data: any) => await AuthServiceInstance.setNewPassword(data),
    onMutate: (variables) => {
      setIsLoading(true);
    },
    onError: (error, variables, context) => {
      console.log(error);
      setIsLoading(false);
    },
    onSuccess: async (data) => {
      router.push("/auth/login");
      setIsLoading(false);
    },
  });

  return (
    <div className="t-grid t-place-items-center t-mt-20 t-mb-32 lg:t-my-20">
      <div className="t-rounded-[15px] t-border t-border-[#2B79D3] t-h-[450px] sm:t-w-[380px] t-w-[355px] lg:t-w-[440px]">
        <div className="t-flex t-justify-left t-ml-4 t-mt-6">
          <img src="/images/admin-panel-vts.png" className="t-h-[115px] t-w-[115px]" alt="" />
          <p className="t-text-[#1B1617] t-text-[22px] t-font-[plain-light] t-text-left t-mt-4 t-ml-4 t-w-[200px]">
            Set your new Password
          </p>
        </div>
        <p className="t-text-[#2B79D3] t-text-[11px] t-font-[plain-ultralight] t-text-center t-mt-2">
          Please enter your new password to confirm reset.
        </p>

        <div className="t-mt-8 t-grid t-place-items-center">
          <div className="t-relative ">
            <input
              ref={newPasswordRef}
              id="newField"
              type="text"
              className={`t-w-[340px] lg:t-w-[370px] t-h-[45px] t-pl-4 t-border t-border-[#7E7982] focus:t-border-[#2B79D3] focus:t-outline-none focus:t-ring-1  t-rounded-lg t-px-2 t-py-1 t-bg-white `}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => handleNewPasswordChange(e.target.value)}
            />
            <label
              htmlFor="newField"
              className={`t-absolute t-left-3 t-top-[-12px] t-bg-white ${
                isNewPasswordFocused ? "t-text-[#2B79D3]" : "t-text-[#7E7982]"
              } t-px-1`}
            >
              New Password
            </label>
            {newPasswordError && (
              <p className="t-absolute t-left-2 t-top-[48px] t-text-[#FF0000] t-text-[12px] t-font-[plain-ultralight]">
                {newPasswordError}
              </p>
            )}
          </div>

          <div className="t-relative t-mt-10">
            <input
              ref={confirmPasswordRef}
              id="newField"
              type="text"
              className={`t-w-[340px] lg:t-w-[370px] t-h-[45px] t-pl-4 t-border t-border-[#7E7982] focus:t-border-[#2B79D3] focus:t-outline-none focus:t-ring-1  t-rounded-lg t-px-2 t-py-1 t-bg-white `}
              placeholder="Enter confirm password"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
            />
            <label
              htmlFor="newField"
              className={`t-absolute t-left-3 t-top-[-12px] t-bg-white ${
                isConfirmPasswordFocused ? "t-text-[#2B79D3]" : "t-text-[#7E7982]"
              } t-px-1`}
            >
              Confirm Password
            </label>
            {confirmPasswordError && (
              <p className="t-absolute t-left-2 t-top-[48px] t-text-[#FF0000] t-text-[12px] t-font-[plain-ultralight]">
                {confirmPasswordError}
              </p>
            )}
          </div>

          <div className="t-mt-4 t-flex t-justify-end t-w-[340px] lg:t-w-[370px]">
            <Link href="/auth/login">
              <a className="t-mb-1 t-text-[12px] t-text-[#2B79D3] t-text-right t-cursor-pointer">
                Go to Login
              </a>
            </Link>
          </div>

          <div className="t-mt-4">
            <div
              onClick={handleSubmit}
              className="t-bg-[#2B79D3] t-rounded-lg t-text-white t-font-[plain-light] t-pt-2 t-pb-2.5 t-w-[340px] lg:t-w-[370px] t-text-center t-cursor-pointer"
            >
              {isLoading ? "Loading..." : "Submit"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
