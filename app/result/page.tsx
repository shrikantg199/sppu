import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SPPU Result",
  description: "View and download your SPPU result.",
};

const page = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <a
        href="/result.pdf"
        download
        className="absolute top-4 right-4 px-4 py-2 bg-[#2aa6b3] text-white rounded hover:bg-[#1a8a99] transition"
      >
        Download
      </a>
      <Image src="/result1.jpg" alt="result" width={600} height={600} />
    </div>
  );
};

export default page;
