import { ADMIN_NAV_ITEMS } from '@constants/adminNavItems'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
export default function Dashboard() {
    const router = useRouter();
    const [activeItem, setActiveItem] = React.useState('');

    const handleItem = (item: any) => {
        if (item.childrenItems?.length === 0) {
            router.push(item.href);
        } else {
            if (item.content == activeItem) {
                setActiveItem('');
            } else {
                setActiveItem(item.content);
            }
        }
    }
    return (
        <div>
            {/* <div className='t-w-[180px] t-h-[100vh] t-bg-[#DBECFF] t-rounded-r-[35px] t-p-4'>
                <div className=''>
                    <Image src='/images/admin_nav_logo.png' width={180} height={55} alt="logo" />
                </div>

                <div className='t-mt-4'>
                    {
                        ADMIN_NAV_ITEMS.map((item, index) =>
                            <div key={index} className=''>
                                <div onClick={() => handleItem(item)} className='t-flex t-gap-2 t-cursor-pointer hover:t-bg-[#C9E2FF] t-pt-1 t-pb-1.5 t-px-5 t-mt-2 t-rounded-[10px]'>
                                    <div className=''>
                                        <div
                                            className={`
                                        ${item?.content === 'Blogs' && "t-mt-[3px]"}
                                        ${item?.content === 'Dashboard' && "t-mt-[7px]"}
                                        ${item?.content === 'Career' && "t-mt-[4px]"}
                                        ${item?.content === 'Teams' && "t-mt-[5px]"}
                                        `}
                                            dangerouslySetInnerHTML={{ __html: item?.icon }} />
                                    </div>
                                    <div className='t-flex t-justify-between t-w-full'>
                                        <p className='t-text-[15px] t-font-[plain-medium] t-text-[#2B79D3]'>{item.content}</p>
                                        {
                                            item.childrenItems &&
                                            item.childrenItems?.length > 0 &&
                                            <div className=''>
                                                {
                                                    item.content === activeItem ?
                                                        <svg className='t-mt-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2B79D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg> :
                                                        <svg className='t-mt-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2B79D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                                {
                                    item.content === activeItem &&
                                    <div className="t-text-[12px] t-font-[plain-medium]">
                                        {
                                            item.childrenItems?.map((childItem, index) =>
                                                <div onClick={() => handleItem(childItem)} key={index} className='t-cursor-pointer t-text-[#2B79D3] t-pt-[4.5px] t-pb-1.5 hover:t-bg-[#C9E2FF] t-pl-10 t-rounded-[10px]'>
                                                    {childItem.content}
                                                </div>
                                            )
                                        }
                                    </div>
                                }
                            </div>

                        )
                    }
                </div>
            </div> */}
        </div>
    )
}
