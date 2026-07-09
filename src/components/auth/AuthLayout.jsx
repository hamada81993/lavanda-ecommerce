import logo from "../../assets/img/headerLogo.png";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      bg-[#F7F7FB]
      px-5
    "
    >
      {/* Background */}

      <div
        className="
        absolute
        inset-0
        bg-[url('/images/auth-bg.png')]
        bg-cover
        bg-center
        opacity-15
      "
      />

      {/* Card */}

      <div
        className="
        relative
        z-10
m-6
        w-full
        max-w-[470px]

        bg-white

        rounded-[28px]

        shadow-[0_20px_60px_rgba(48,34,69,.08)]

        px-10
        py-12
      "
      >
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Lavanda"
            className="h-10"
          />
        </div>

        <div className="text-center mb-8">
          <h1
            className="
            text-[30px]
            font-bold
            text-[#302245]
          "
          >
            {title}
          </h1>

          <p
            className="
            mt-2
            text-[#A4A0B1]
            text-[15px]
          "
          >
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}