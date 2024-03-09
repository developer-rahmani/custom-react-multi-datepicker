import React from "react";

export type DatesType = {
  start : string;
  end : string;
}

export type DatePickerType = {
  handleFormData: (e: { start: string; end: string }) => void;
  label: string;
  start: string;
  end: string;
  isUtc: boolean;
};

export type InputType = {
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  handleClearDates: () => void;
};

export type HeaderType = {
  position: string;
  start: string;
  end: string;
};
