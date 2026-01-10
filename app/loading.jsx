import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-white gap-4">
      <Image
        src="/images/logo3.png"
        alt="Artisan Decor"
        width={80}
        height={80}
        className="animate-pulse"
      />
      <p className="text-sm tracking-wide text-gray-500">
        Loading...
      </p>
    </div>
  );
}
