import Image from "next/image";

function Logo() {
  return (
    <div className="flex w-full items-center">
      <Image
        src={`${process.env.REACT_APP_S3_PREFIX}/logo.png`}
        alt="logo image"
        className="object-contain w-12 h-12 mr-2"
        width={48}
        height={48}
      />
      <div className="flex flex-grow flex-col text-center">
        <h4 className="relative top-1" style={{ fontSize: "1.4rem" }}>
          MADE BY HEART
        </h4>
        <div
          className="relative bottom-2 text-black/60"
          style={{ fontSize: "1.2rem" }}
        >
          avec amour et passion
        </div>
      </div>
    </div>
  );
}

export default Logo;
