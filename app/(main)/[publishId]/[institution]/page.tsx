import React from "react";

import { getPublishPolicy } from "@/lib";
import PublishPolicyContainer from "../PublishPolicyContainer";

interface Props {
  params: { publishId: string };
}
export default async function Page({ params: { publishId } }: Props) {
  const data = await getPublishPolicy(publishId);

  return <PublishPolicyContainer aiPolicy={data} publishId={publishId} />;
}
