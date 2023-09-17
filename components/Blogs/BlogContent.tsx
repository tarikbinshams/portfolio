import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function BlogContent({ content, id, data }: any) {
  const router = useRouter();
  const [hashValue, setHashValue] = React.useState<string>("");

  useEffect(() => {
    if (router.asPath !== router.route) {
      setHashValue(router.asPath.split("#")[1]);
    }
  }, [router]);

  return (
    <div className="">
      <div className="t-mt-8 lg:t-block t-hidden">
        <div className="t-my-8">
          <div className="blog-content t-font-[sans-regular]" dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </div>

      <div className="t-block lg:t-hidden t-mt-5">
        <div className="t-mt-5">
          <div className="t-mb-6">
            <div className=" t-font-[sans-regular]" dangerouslySetInnerHTML={{ __html: data }} />
          </div>
        </div>
      </div>
    </div>
  );
}
