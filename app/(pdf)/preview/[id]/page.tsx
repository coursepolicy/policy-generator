import PolicyPreview from "@/app/_components/PolicyPreview";
import { AiPolicy, getPolicy } from "@/app/_utils";
import React from "react";

interface Props {
  params: { id: string };
}
export default async function Preview({ params: { id } }: Props) {
  const { data }: { data: AiPolicy } = await getPolicy(id);

  return <PolicyPreview data={data} />;
}
