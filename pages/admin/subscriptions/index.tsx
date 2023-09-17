import AdminBlogList from "@components/Blogs/Admin/BlogList";
import BlogList from "@components/Blogs/BlogList";
import React from "react";
import { useAdminAppContext } from "../../../context/AdminAppContext";
import SubscriptionList from "@components/Admin/Subscriptions/SubscriptionList";

export default function AdminSubscriptionIndex() {
  const { isExpanded } = useAdminAppContext();
  return (
    <div>
      <div
        className={`${
          isExpanded ? "lg:t-w-[calc(100vw-190px)]" : "lg:t-w-[calc(100vw-110px)]"
        } t-m-auto lg:t-px-16`}
      >
        <div className="t-grid t-place-items-center t-pt-4 t-mb-6">
          <p className="t-text-[#030627] t-text-[36px] t-leading-9">All Subscriptions</p>
        </div>
        <SubscriptionList />
      </div>
    </div>
  );
}
