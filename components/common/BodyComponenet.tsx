import React from "react";
interface Props {
  body: string | undefined;
}
export const BodyComponenet: React.FC<Props> = ({ body }) => {
  return <div dangerouslySetInnerHTML={{ __html: body as string }} />;
};
