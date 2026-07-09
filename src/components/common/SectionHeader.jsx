import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

export default function SectionHeader({
  title,
  showViewAll = true,
  showTimer = false,
  link = "#",
}) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    if (!showTimer) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 5;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [showTimer]);

//   const { t } = useTranslation("common");

  const isInternal =
    typeof link === "string" && link.startsWith("/");

  return (
    <div className="flex items-center justify-between mb-4 w-full">
      {/* Left */}
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>

        {showTimer && (
          <div className="flex items-center gap-1">
            <span className="bg-[#9b87bd] text-white px-2 py-1 rounded text-sm font-bold min-w-[32px] text-center">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>

            <span className="font-bold text-[#9b87bd]">
              :
            </span>

            <span className="bg-[#9b87bd] text-white px-2 py-1 rounded text-sm font-bold min-w-[32px] text-center">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>

            <span className="font-bold text-[#9b87bd]">
              :
            </span>

            <span className="bg-[#9b87bd] text-white px-2 py-1 rounded text-sm font-bold min-w-[32px] text-center">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>

      {/* Right */}
      {showViewAll &&
        (isInternal ? (
          <Link
            to={link}
            className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-[#9b87bd] transition"
          >
            {/* {t("viewAll")} */}
            view all
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        ) : (
          <a
            href={link}
            className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-[#9b87bd] transition"
          >
            {/* {t("viewAll")} */}
            view all 
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        ))}
    </div>
  );
}