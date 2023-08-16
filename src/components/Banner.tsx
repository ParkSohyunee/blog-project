export interface BannerData {
  message: string;
  state: string;
}

//prettier-ignore
export default function Banner({banner: { message, state }}: {banner: BannerData}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "🔥";

  return (
    <p
      className={`p-4 rounded-md text-lg text-center font-bold mb-4 ${
        state === "success" ? "bg-green-300" : "bg-red-300"
      }`}
    >
      {`${icon}  ${message}`}
    </p>
  );
}
