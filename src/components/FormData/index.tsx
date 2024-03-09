"use client"

// !! Types
import { DatesType } from "@/components/Datepicker/index.types";

// !! Hooks
import { useState } from "react";

// !! Components
import Datepicker from "@/components/Datepicker";

export const FormData = ()=> {
  const [dates, setDates] = useState<DatesType>({
    start: "",
    end: "",
  });

  return (
    <div className="my-[42px]">
      <Datepicker
        end={dates.end}
        start={dates.start}
        handleFormData={({ end, start }) => setDates({ end, start })}
        label="Date picker"
        isUtc={false}
      />
    </div>
  );
}
