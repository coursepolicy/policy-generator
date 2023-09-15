import Link from "next/link";

type Props = {
  id: string;
};

export default function DownloadPdfSection({ id }: Props) {
  return (
    <div className="mb-[40px] flex flex-col items-center">
      <h1>Preview Page</h1>
      <a
        href={`${process.env.LAMBDAS_API_BASE_URL}/generated-pdf?generatedId=${id}`}
        target="_blank"
      >
        <strong>Download PDF</strong>
      </a>
      <button>
        <a>
          <strong>Publish policy</strong>
        </a>
      </button>
      <Link href="">
        <strong>View published policy</strong>
      </Link>
    </div>
  );
}
