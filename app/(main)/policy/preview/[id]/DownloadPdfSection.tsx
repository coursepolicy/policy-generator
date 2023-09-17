import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  id: string;
  publishId?: string;
  mutate: () => void;
  isLoading: boolean;
};

export default function DownloadPdfSection({
  id,
  publishId,
  mutate,
  isLoading,
}: Props) {
  return (
    <div className="mb-[40px] flex flex-col items-center">
      <h1>Preview Page</h1>
      <Button asChild variant="link">
        <a
          href={`${process.env.LAMBDAS_API_BASE_URL}/generated-pdf?generatedId=${id}`}
          target="_blank"
        >
          <strong>Download PDF</strong>
        </a>
      </Button>
      <Button
        variant="link"
        onClick={() => {
          mutate();
        }}
        loading={isLoading}
      >
        {publishId ? (
          <strong>Republish policy</strong>
        ) : (
          <strong>Create Publishable link</strong>
        )}
      </Button>
      {publishId && (
        <Button asChild variant="link">
          <Link href={`/${publishId}`}>
            <strong>View published policy</strong>
          </Link>
        </Button>
      )}
    </div>
  );
}
