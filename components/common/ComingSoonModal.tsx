import React, { useEffect, useRef, useState } from 'react'
import { useMutation } from 'react-query';
import { AppointmentServiceInstance } from '@app/appointment/services/AppointmentService'
import toast from 'react-hot-toast';

export default function ComingSoon({ show }: any) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    useEffect(() => {
        //outside click modal ref close modal
        const handleOutsideClick = (event: any) => {
            if (!modalRef.current?.contains(event.target)) {
                show(null);
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleRegister = () => {
        if (!email) {
            setEmailError('Email is required');
            return;
        }
        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        setEmailError('');

        const data = {
            email
        }
        mutation.mutate(data);
    }

    const mutation = useMutation({
        mutationFn: async (data: any) => await AppointmentServiceInstance.subscribe(data),
        onMutate: (variables) => {
            setIsLoading(true);
        },
        onError: (error, variables, context) => {
            console.log(error);
            setIsLoading(false);
            toast.error('Something went wrong, please try again');
        },
        onSuccess: async (data) => {
            setIsLoading(false);
            show(null);
            toast.success('You have successfully subscribed.');

        },
    });


    return (
        <div>
            <div className='t-bg-[#0e0e0e79] t-fixed t-top-0 t-left-0 t-right-0 t-bottom-0 t-z-50 t-w-full t-overflow-hidden t-inset-0 t-h-[calc(100%)]'>
                <div className='lg:t-h-[100vh] t-grid t-place-items-center t-py-10 lg:t-py-0'>
                    <div ref={modalRef} className='t-min-h-[420px] t-w-[350px] lg:t-w-[420px] t-bg-[#ffffff] t-rounded-[26px] t-relative'>
                        <div className='t-mt-4 t-px-4 sm:t-px-8'>
                            <div className='t-flex t-justify-center'>
                                <img
                                    className='t-w-[290px] t-h-[240px]'
                                    src='/images/coming-soon.png'
                                    alt='coming soon'
                                />
                            </div>
                            <div className='t-grid t-place-items-center'>
                                <div className='t-relative t-mt-4'>
                                    <input
                                        id="inputField"
                                        type="text"
                                        className="t-w-[300px] t-h-[48px] t-border t-border-[#7E7982] t-rounded-lg t-pl-4 t-pr-2 t-py-1 t-bg-white focus:t-outline-none focus:t-ring-1 focus:t-border-[#2B79D3]"
                                        placeholder='example@email.com'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label
                                        htmlFor="inputField"
                                        className="t-absolute t-left-3 t-top-[-9px] t-font-[sans-regular] t-text-[12px] t-bg-white t-text-[#7E7982] t-px-1"
                                    >
                                        Email
                                    </label>
                                    {
                                        emailError &&
                                        <p className='t-text-red-500 t-font-[sans-regular] t-text-[12px]'>{emailError}</p>
                                    }
                                </div>
                                <div className='t-mt-4'>
                                    <button
                                        onClick={handleRegister}
                                        className='t-w-[300px] t-h-[50px] t-font-[sans-regular] t-rounded-lg t-pl-4 t-pr-2 t-py-1 t-bg-gradient-to-b t-to-[#0A4EFE] t-from-[#479DFF] t-text-[#ffffff]'>
                                        {
                                            isLoading ? 'Loading...' : 'Register'
                                        }
                                    </button>
                                </div>
                            </div>
                            <div className='t-absolute t-top-[-35px] t-left-[-40px]'>
                                <img src='/images/rocket.PNG' alt='ellipse' className='t-w-[140px] t-h-[150px]' />
                            </div>
                            <div className='t-absolute t-top-[8px] t-right-[8px]'>
                                <svg onClick={() => show(null)} className='t-cursor-pointer' width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25.5007" cy="25.5" r="18.6673" transform="rotate(30 25.5007 25.5)" fill="#3191FF" fillOpacity="0.22" />
                                    <path d="M20 18L32.0783 32.5919M20 32.5919L32.0783 18" stroke="#277AF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
