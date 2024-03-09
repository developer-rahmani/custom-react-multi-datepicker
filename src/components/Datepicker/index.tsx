"use client"

// !! Types
import { DatePickerType } from "./index.types";

// !! Hooks
import { useEffect, useState } from "react";

// !! Packages
import DatePicker, { DateObject } from "react-multi-date-picker";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

// !! Components
import Header from "./Header";
import Input from "./Input";

const Datepicker = ({
  handleFormData,
  label,
  start,
  end,
  isUtc,
}: DatePickerType) => {
  const [portalTarget, setPortalTaget] = useState<HTMLDivElement>();

  const handleClearDates = () => {
    handleFormData({ start: "", end: "" });
  };

  useEffect(() => {
    const portalDiv: HTMLDivElement = document.createElement("div");

    portalDiv.id = "date-picker";

    document.body.appendChild(portalDiv);

    setPortalTaget(portalDiv);

    return () => {
      document.body.removeChild(portalDiv);
    };
  }, []);

  return (
    <>
      <DatePicker
        format="YYYY-MM-DD"
        value={start && end ? [new DateObject(start), new DateObject(end)] : []}
        onChange={(e: []) => {
          const dates = isUtc
            ? e.map((item: DateObject) => new Date(item.toDate()).toISOString())
            : e.map((item: DateObject) =>
                new Date(item.toDate()).toLocaleString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );

          if (dates[0] && dates[1]) {
            handleFormData({ start: dates[0], end: dates[1] });
          }
        }}
        range
        portal
        portalTarget={portalTarget}
        calendar={gregorian}
        weekDays={[]}
        locale={gregorian_en}
        containerClassName="w-full"
        inputClass="border-none w-full"
        className="datepicker_container"
        shadow={false}
        arrow={false}
        editable={false}
        render={<Input label={label} handleClearDates={handleClearDates} />}
        plugins={[
          <Header key={label} position="top" end={end} start={start} />,
        ]}
      />
    </>
  );
};

export default Datepicker;
