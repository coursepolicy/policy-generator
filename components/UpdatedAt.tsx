import { format } from "date-fns";

export default function UpdatedAt({
  updatedAt,
  createdAt,
}: {
  updatedAt?: string;
  createdAt: string;
}) {
  return (
    <p className="mb-[20px] pl-[20px]">
      Last updated on{" "}
      {updatedAt
        ? format(new Date(updatedAt), "PPP")
        : format(new Date(createdAt), "PPP")}
    </p>
  );
}
