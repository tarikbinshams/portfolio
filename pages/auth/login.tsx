import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import Link from "next/link";
import { AuthServiceInstance } from "@app/auth/service/AuthService";
import { isLoggedIn } from "@helpers/authHelper";

export default function Login() {
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/admin/blogs");
    } else {
      setPageLoading(false);
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [itemOneChecked, setItemOneChecked] = useState<boolean>(false);

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

  useEffect(() => {
    const handleClickInside = () => {
      setIsPasswordFocused(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (passwordRef.current && !passwordRef.current.contains(event.target as Node)) {
        setIsPasswordFocused(false);
      }
    };

    const divElement = passwordRef.current;

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

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handlePasswordChange = (e: any) => {
    setPassword(e);
    if (e.length < 8) {
      setPasswordError("Password must be at least 8 characters long!");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e: any) => {
    setEmail(e);
    if (!pattern.test(e)) {
      setEmailError("Please enter a valid email address!");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    if (email === "" && password === "") {
      setEmailError("Email cannot be empty");
      setPasswordError("Password cannot be empty");
      return;
    }
    if (email && !pattern.test(email)) {
      setEmailError("Please enter a valid email address!");
      return;
    }

    if (email && pattern.test(email) && password === "") {
      setPasswordError("Password cannot be empty");
      return;
    }
    if (email === "" && password) {
      setEmailError("Email cannot be empty");
      setPasswordError("");
      return;
    }

    if (email && pattern.test(email) && emailError === "" && password && passwordError === "") {
      const data = {
        email: email,
        password: password,
      };
      mutation.mutate(data);
    }
  };

  const mutation = useMutation({
    mutationFn: async (data: any) => await AuthServiceInstance.login(data),
    onMutate: (variables) => {
      setIsLoading(true);
    },
    onError: (error, variables, context) => {
      console.log(error);
      setIsLoading(false);
    },
    onSuccess: async (data) => {
      router.push("/admin/blogs");
    },
  });

  if (pageLoading) {
    return (
      <div className="t-grid t-place-items-center t-mt-20 t-mb-32 lg:t-my-20">
        <div className="t-h-[420px] t-w-[380px] lg:t-w-[440px]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="t-grid t-place-items-center t-mt-20 t-mb-32 lg:t-my-20">
      <div className="t-rounded-[15px] t-border t-border-[#2B79D3] t-h-[460px] sm:t-w-[380px] t-w-[355px] lg:t-w-[440px]">
        <div className="t-flex t-justify-left t-ml-4 t-mt-6">
          <img src="/images/admin-panel-vts.png" className="t-h-[115px] t-w-[115px]" alt="" />
          <p className="t-text-[#1B1617] t-text-[22px] t-font-[plain-light] t-text-left t-mt-4 t-ml-4 t-w-[200px]">
            VTS BLOCKCHAIN ENGINEERS
            <span className="t-block t-text-[15px] t-text-[#277AF7] t-font-[700]">
              - Admin Panel
            </span>
          </p>
        </div>

        <p className="t-text-[#1B1617] t-text-[20px] t-font-[200] t-text-center t-mt-2">
          Sign in with your email and password
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

          <div className="t-relative t-mt-10">
            <input
              ref={passwordRef}
              id="passwordField"
              type="password"
              className="t-w-[340px] lg:t-w-[370px] t-h-[45px] t-pl-4 t-border t-border-[#7E7982] t-rounded-lg t-px-2 t-py-1 t-bg-white focus:t-outline-none focus:t-ring-1 focus:t-border-[#2B79D3]"
              placeholder="************"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <label
              htmlFor="passwordField"
              className={`t-absolute t-left-3 t-top-[-12px] t-bg-white ${
                isPasswordFocused ? "t-text-[#2B79D3]" : "t-text-[#7E7982]"
              } t-px-1`}
            >
              Password
            </label>
            {passwordError && (
              <p className="t-mt-1.5 t-ml-2 t-text-[#FF0000] t-text-[12px] t-font-[plain-ultralight] t-leading-3">
                {passwordError}
              </p>
            )}
          </div>

          <div className="t-mt-6">
            <div
              onClick={handleSubmit}
              className="t-rounded-lg t-font-[plain-light] t-pt-2 t-pb-2.5 t-w-[340px] lg:t-w-[370px] t-text-center t-cursor-pointer
                      t-border-[#ffffff] t-text-[#ffffff] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]"
            >
              {isLoading ? "Loading..." : "Sign in"}
            </div>

            <div className="t-mt-4">
              <Link href="/auth/forgot-password">
                <a>
                  <p className="t-mb-1 t-text-[14px] t-text-[#277AF7] t-text-center t-cursor-pointer">
                    Forgot password?
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
