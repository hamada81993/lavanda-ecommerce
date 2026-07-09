
import {
  FiX,
  FiChevronDown,
  FiUser,
  FiGlobe,
  FiBell,
} from "react-icons/fi";

import { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../../config/navigation";

export default function MobileMenu({
  isOpen,
  onClose,
}) {
  const [openItem, setOpenItem] =
    useState(null);

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0
          bg-black/30
          backdrop-blur-sm
          z-40
          transition-all duration-300

          ${
            isOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Drawer */}

      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[360px]
          max-w-[90vw]
          bg-white
          z-50
          shadow-2xl
          overflow-y-auto
          transition-transform
          duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div
          className="
            px-6
            py-5
            border-b
            border-[#EEE8F5]
            flex
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                w-12
                h-12
                rounded-full
                bg-[#F5F1FA]
                flex
                items-center
                justify-center
              "
            >
              <FiUser
                size={20}
                className="text-[#8F7AAE]"
              />
            </div>

            <div>
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[2px]
                  text-[#A79AB8]
                  font-medium
                "
              >
                Welcome
              </p>

              <h3
                className="
                  text-lg
                  font-semibold
                  text-[#302245]
                "
              >
                View Profile
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="
              w-10
              h-10
              rounded-full
              bg-[#F5F1FA]
              text-[#8F7AAE]
              flex
              items-center
              justify-center
              hover:bg-[#EEE8F6]
              transition
            "
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}

        <div className="pb-28">
          {navigation.map((item) => {
            const isOpenItem =
              openItem === item.label;

            return (
              <div
                key={item.label}
                className="
                  border-b
                  border-[#F3EFF8]
                "
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className="
                      flex
                      items-center
                      justify-between
                      h-[58px]
                      px-6
                      text-[14px]
                      font-medium
                      text-[#4B4260]
                      hover:bg-[#FAF8FC]
                      transition
                    "
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setOpenItem(
                          isOpenItem
                            ? null
                            : item.label
                        )
                      }
                      className="
                        w-full
                        h-[58px]
                        px-6
                        flex
                        items-center
                        justify-between
                        text-[14px]
                        font-medium
                        text-[#4B4260]
                        hover:bg-[#FAF8FC]
                        transition
                      "
                    >
                      {item.label}

                      <FiChevronDown
                        size={18}
                        className={`
                          text-[#A99BBC]
                          transition-transform

                          ${
                            isOpenItem
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>

                    {isOpenItem && (
                      <div
                        className="
                          bg-[#FCFBFD]
                          border-t
                          border-[#F1EDF5]
                        "
                      >
                        {item.megaMenu?.columns?.map(
                          (column) => (
                            <div
                              key={column.title}
                              className="
                                px-6
                                py-4
                              "
                            >
                              <h4
                                className="
                                  text-[11px]
                                  font-semibold
                                  tracking-wider
                                  uppercase
                                  text-[#8F7AAE]
                                  mb-3
                                "
                              >
                                {column.title}
                              </h4>

                              {column.links.map(
                                (link) => (
                                  <Link
                                    key={
                                      link.label
                                    }
                                    to={
                                      link.path
                                    }
                                    onClick={
                                      onClose
                                    }
                                    className="
                                      block
                                      py-2
                                      text-[13px]
                                      text-[#6B647C]
                                      hover:text-[#8F7AAE]
                                      transition
                                    "
                                  >
                                    {
                                      link.label
                                    }
                                  </Link>
                                )
                              )}
                            </div>
                          )
                        )}

                        {item.tabs?.map(
                          (tab) => (
                            <div
                              key={
                                tab.label
                              }
                              className="
                                px-6
                                py-4
                                border-t
                                border-[#F1EDF5]
                              "
                            >
                              <h3
                                className="
                                  text-[12px]
                                  font-semibold
                                  text-[#8F7AAE]
                                  mb-3
                                "
                              >
                                {tab.label}
                              </h3>

                              {tab.columns.map(
                                (
                                  column
                                ) => (
                                  <div
                                    key={
                                      column.title
                                    }
                                    className="
                                      mb-4
                                    "
                                  >
                                    <h4
                                      className="
                                        text-[11px]
                                        uppercase
                                        text-gray-400
                                        mb-2
                                      "
                                    >
                                      {
                                        column.title
                                      }
                                    </h4>

                                    {column.links.map(
                                      (
                                        link
                                      ) => (
                                        <Link
                                          key={
                                            link.label
                                          }
                                          to={
                                            link.path
                                          }
                                          onClick={
                                            onClose
                                          }
                                          className="
                                            block
                                            py-2
                                            text-[13px]
                                            text-[#6B647C]
                                            hover:text-[#8F7AAE]
                                            transition
                                          "
                                        >
                                          {
                                            link.label
                                          }
                                        </Link>
                                      )
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}

        <div
          className="
            sticky
            bottom-0
            bg-white
            border-t
            border-[#F1EDF5]
            p-4
            flex
            gap-3
          "
        >
          <button
            className="
              flex-1
              h-12
              rounded-2xl
              border
              border-[#ECE6F4]
              bg-[#FAF8FC]
              text-[#4B4260]
              text-sm
              font-medium
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <FiGlobe />
            العربية
          </button>

          <button
            className="
              flex-1
              h-12
              rounded-2xl
              border
              border-[#ECE6F4]
              bg-[#FAF8FC]
              text-[#4B4260]
              text-sm
              font-medium
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <FiBell />
            Notifications
          </button>
        </div>
      </div>
    </>
  );
}

