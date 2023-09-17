interface INavItem {
  href?: any;
  content: string;
  childrenItems?: INavItem[];
  icon?: any;
  cover?: string;
  active?: boolean;
}

export const ADMIN_NAV_ITEMS: INavItem[] = [
  // {
  //   content: "Dashboard",
  //   href: "/admin/dashboard",
  //   childrenItems: [],
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"> <path d="M0.833333 8.33333H5.83333C6.29167 8.33333 6.66667 7.95833 6.66667 7.5V0.833333C6.66667 0.375 6.29167 0 5.83333 0H0.833333C0.375 0 0 0.375 0 0.833333V7.5C0 7.95833 0.375 8.33333 0.833333 8.33333ZM0.833333 15H5.83333C6.29167 15 6.66667 14.625 6.66667 14.1667V10.8333C6.66667 10.375 6.29167 10 5.83333 10H0.833333C0.375 10 0 10.375 0 10.8333V14.1667C0 14.625 0.375 15 0.833333 15ZM9.16667 15H14.1667C14.625 15 15 14.625 15 14.1667V7.5C15 7.04167 14.625 6.66667 14.1667 6.66667H9.16667C8.70833 6.66667 8.33333 7.04167 8.33333 7.5V14.1667C8.33333 14.625 8.70833 15 9.16667 15ZM8.33333 0.833333V4.16667C8.33333 4.625 8.70833 5 9.16667 5H14.1667C14.625 5 15 4.625 15 4.16667V0.833333C15 0.375 14.625 0 14.1667 0H9.16667C8.70833 0 8.33333 0.375 8.33333 0.833333Z" fill="#2B79D3"/> </svg>',
  // },
  {
    content: "Blogs",
    href: "/admin/blogs",
    childrenItems: [],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"> <path d="M12.1869 0.259936L13.424 1.49705C13.7662 1.83923 13.7662 2.39198 13.424 2.73416L9.65123 6.51569V15H0V1.83923H9.3617L10.941 0.259936C11.2919 -0.0822444 11.8447 -0.0910183 12.1869 0.259936ZM7.22088 7.70016L11.9324 2.99738L10.6865 1.75149L5.98376 6.46305L5.36082 8.3231L7.22088 7.70016Z" fill="#2B79D3"/> </svg>',
  },
  {
    content: "Appointments",
    href: "/admin/appointments",
    childrenItems: [],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"> <path d="M12.1869 0.259936L13.424 1.49705C13.7662 1.83923 13.7662 2.39198 13.424 2.73416L9.65123 6.51569V15H0V1.83923H9.3617L10.941 0.259936C11.2919 -0.0822444 11.8447 -0.0910183 12.1869 0.259936ZM7.22088 7.70016L11.9324 2.99738L10.6865 1.75149L5.98376 6.46305L5.36082 8.3231L7.22088 7.70016Z" fill="#2B79D3"/> </svg>',
  },
  {
    content: "Subscription",
    href: "/admin/subscriptions",
    childrenItems: [],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"> <path d="M12.1869 0.259936L13.424 1.49705C13.7662 1.83923 13.7662 2.39198 13.424 2.73416L9.65123 6.51569V15H0V1.83923H9.3617L10.941 0.259936C11.2919 -0.0822444 11.8447 -0.0910183 12.1869 0.259936ZM7.22088 7.70016L11.9324 2.99738L10.6865 1.75149L5.98376 6.46305L5.36082 8.3231L7.22088 7.70016Z" fill="#2B79D3"/> </svg>',
  },
  // {
  //   content: "Career",
  //   href: "#/admin/career",
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"> <path d="M14.1264 10.2523L7.49563 13.8449L0.864831 10.2523C0.733545 10.1916 0.582283 10.1796 0.441834 10.2188C0.301384 10.2581 0.182303 10.3456 0.108829 10.4635C0.0353544 10.5814 0.0130085 10.7209 0.0463394 10.8536C0.0796703 10.9863 0.166173 11.1022 0.28824 11.1778L7.20733 14.9277C7.2955 14.9755 7.39573 15.0007 7.49779 15.0007C7.59985 15.0007 7.70008 14.9755 7.78825 14.9277L14.7073 11.1778C14.7738 11.1428 14.8321 11.096 14.8789 11.0399C14.9257 10.9839 14.9601 10.9198 14.98 10.8513C15 10.7828 15.005 10.7113 14.995 10.641C14.9849 10.5707 14.96 10.5029 14.9215 10.4416C14.883 10.3803 14.8318 10.3268 14.7709 10.284C14.71 10.2412 14.6405 10.2102 14.5665 10.1925C14.4926 10.1749 14.4156 10.1712 14.34 10.1814C14.2645 10.1917 14.1919 10.2158 14.1264 10.2523Z" fill="#2B79D3"/> <path d="M14.1264 7.03747L7.49563 10.6301L0.864831 7.03747C0.733545 6.97673 0.582283 6.96477 0.441834 7.004C0.301384 7.04323 0.182303 7.13071 0.108829 7.24864C0.0353544 7.36657 0.0130085 7.50608 0.0463394 7.63878C0.0796703 7.77147 0.166173 7.88738 0.28824 7.96291L7.20733 11.7129C7.2955 11.7607 7.39573 11.7858 7.49779 11.7858C7.59985 11.7858 7.70008 11.7607 7.78825 11.7129L14.7073 7.96291C14.7738 7.92798 14.8321 7.88113 14.8789 7.82508C14.9257 7.76904 14.9601 7.70491 14.98 7.63643C15 7.56794 15.005 7.49646 14.995 7.42614C14.9849 7.35581 14.96 7.28804 14.9215 7.22676C14.883 7.16548 14.8318 7.11191 14.7709 7.06915C14.71 7.0264 14.6405 6.99532 14.5665 6.97771C14.4926 6.9601 14.4156 6.95631 14.34 6.96657C14.2645 6.97683 14.1919 7.00093 14.1264 7.03747Z" fill="#2B79D3"/> <path d="M0.286035 4.74837L7.20513 8.49836C7.29329 8.54613 7.39352 8.5713 7.49559 8.5713C7.59765 8.5713 7.69788 8.54613 7.78604 8.49836L14.7051 4.74837C14.7922 4.70119 14.8644 4.63364 14.9146 4.55246C14.9648 4.47127 14.9912 4.37928 14.9912 4.28565C14.9912 4.19203 14.9648 4.10003 14.9146 4.01885C14.8644 3.93766 14.7922 3.87011 14.7051 3.82293L7.78604 0.0729376C7.69788 0.0251695 7.59765 0 7.49559 0C7.39352 0 7.29329 0.0251695 7.20513 0.0729376L0.286035 3.82293C0.198995 3.87011 0.126783 3.93766 0.0765964 4.01885C0.0264094 4.10003 0 4.19203 0 4.28565C0 4.37928 0.0264094 4.47127 0.0765964 4.55246C0.126783 4.63364 0.198995 4.70119 0.286035 4.74837Z" fill="#2B79D3"/> </svg>',
  //   childrenItems: [
  //     {
  //       content: "Manage Jobs",
  //       href: "/admin/career/allJobs",
  //       active: true,
  //       childrenItems: [],
  //     },
  //     {
  //       content: "Post Jobs",
  //       href: "/admin/career/create-job",
  //       active: true,
  //       childrenItems: [],
  //     },
  //   ],
  // },
  // {
  //   content: "Employers",
  //   href: "/admin/employers",
  //   childrenItems: [],
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"> <path d="M9.84375 2.34375C9.84375 2.96535 9.59682 3.56149 9.15728 4.00103C8.71774 4.44057 8.1216 4.6875 7.5 4.6875C6.8784 4.6875 6.28226 4.44057 5.84272 4.00103C5.40318 3.56149 5.15625 2.96535 5.15625 2.34375C5.15625 1.72215 5.40318 1.12601 5.84272 0.686468C6.28226 0.24693 6.8784 0 7.5 0C8.1216 0 8.71774 0.24693 9.15728 0.686468C9.59682 1.12601 9.84375 1.72215 9.84375 2.34375ZM14.5312 2.8125C14.5312 3.30978 14.3337 3.78669 13.9821 4.13833C13.6304 4.48996 13.1535 4.6875 12.6562 4.6875C12.159 4.6875 11.6821 4.48996 11.3304 4.13833C10.9788 3.78669 10.7812 3.30978 10.7812 2.8125C10.7812 2.31522 10.9788 1.83831 11.3304 1.48667C11.6821 1.13504 12.159 0.9375 12.6562 0.9375C13.1535 0.9375 13.6304 1.13504 13.9821 1.48667C14.3337 1.83831 14.5312 2.31522 14.5312 2.8125ZM2.34375 4.6875C2.84103 4.6875 3.31794 4.48996 3.66958 4.13833C4.02121 3.78669 4.21875 3.30978 4.21875 2.8125C4.21875 2.31522 4.02121 1.83831 3.66958 1.48667C3.31794 1.13504 2.84103 0.9375 2.34375 0.9375C1.84647 0.9375 1.36956 1.13504 1.01792 1.48667C0.666294 1.83831 0.46875 2.31522 0.46875 2.8125C0.46875 3.30978 0.666294 3.78669 1.01792 4.13833C1.36956 4.48996 1.84647 4.6875 2.34375 4.6875ZM3.75 6.79688C3.75 6.15 4.275 5.625 4.92188 5.625H10.0781C10.725 5.625 11.25 6.15 11.25 6.79688V11.25C11.25 12.2446 10.8549 13.1984 10.1517 13.9016C9.44839 14.6049 8.49456 15 7.5 15C6.50544 15 5.55161 14.6049 4.84835 13.9016C4.14509 13.1984 3.75 12.2446 3.75 11.25V6.79688ZM2.8125 6.79688C2.8125 6.36281 2.94375 5.96063 3.16781 5.625H1.17188C0.525 5.625 1.67232e-08 6.15 1.67232e-08 6.79688V10.3125C-4.37492e-05 10.7139 0.0858174 11.1106 0.251814 11.476C0.417811 11.8414 0.660098 12.1671 0.962395 12.4311C1.26469 12.6951 1.62 12.8914 2.00444 13.0067C2.38888 13.122 2.79354 13.1537 3.19125 13.0997C2.94042 12.5153 2.81154 11.8859 2.8125 11.25V6.79688ZM12.1875 11.25C12.1875 11.9062 12.0525 12.5325 11.8087 13.0997C12.2065 13.1537 12.6111 13.122 12.9956 13.0067C13.38 12.8914 13.7353 12.6951 14.0376 12.4311C14.3399 12.1671 14.5822 11.8414 14.7482 11.476C14.9142 11.1106 15 10.7139 15 10.3125V6.79688C15 6.15 14.475 5.625 13.8281 5.625H11.8322C12.0572 5.96063 12.1875 6.36281 12.1875 6.79688V11.25Z" fill="#2B79D3"/> </svg>',
  // },
  // {
  //   content: "Poaching",
  //   href: "/admin/employee-poaching",
  //   childrenItems: [],
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"> <path d="M0.833333 8.33333H5.83333C6.29167 8.33333 6.66667 7.95833 6.66667 7.5V0.833333C6.66667 0.375 6.29167 0 5.83333 0H0.833333C0.375 0 0 0.375 0 0.833333V7.5C0 7.95833 0.375 8.33333 0.833333 8.33333ZM0.833333 15H5.83333C6.29167 15 6.66667 14.625 6.66667 14.1667V10.8333C6.66667 10.375 6.29167 10 5.83333 10H0.833333C0.375 10 0 10.375 0 10.8333V14.1667C0 14.625 0.375 15 0.833333 15ZM9.16667 15H14.1667C14.625 15 15 14.625 15 14.1667V7.5C15 7.04167 14.625 6.66667 14.1667 6.66667H9.16667C8.70833 6.66667 8.33333 7.04167 8.33333 7.5V14.1667C8.33333 14.625 8.70833 15 9.16667 15ZM8.33333 0.833333V4.16667C8.33333 4.625 8.70833 5 9.16667 5H14.1667C14.625 5 15 4.625 15 4.16667V0.833333C15 0.375 14.625 0 14.1667 0H9.16667C8.70833 0 8.33333 0.375 8.33333 0.833333Z" fill="#2B79D3"/> </svg>',
  // },
  // {
  //   content: "Appointments",
  //   href: "/admin/appointments",
  //   childrenItems: [],
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"> <path d="M12.1869 0.259936L13.424 1.49705C13.7662 1.83923 13.7662 2.39198 13.424 2.73416L9.65123 6.51569V15H0V1.83923H9.3617L10.941 0.259936C11.2919 -0.0822444 11.8447 -0.0910183 12.1869 0.259936ZM7.22088 7.70016L11.9324 2.99738L10.6865 1.75149L5.98376 6.46305L5.36082 8.3231L7.22088 7.70016Z" fill="#2B79D3"/> </svg>',
  // },
  // {
  //   content: "Quotes",
  //   href: "/admin/quotes",
  //   childrenItems: [],
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"> <path d="M12.1869 0.259936L13.424 1.49705C13.7662 1.83923 13.7662 2.39198 13.424 2.73416L9.65123 6.51569V15H0V1.83923H9.3617L10.941 0.259936C11.2919 -0.0822444 11.8447 -0.0910183 12.1869 0.259936ZM7.22088 7.70016L11.9324 2.99738L10.6865 1.75149L5.98376 6.46305L5.36082 8.3231L7.22088 7.70016Z" fill="#2B79D3"/> </svg>',
  // },
];
