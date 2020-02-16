/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import styles from "./Note.module.scss";

const options = [
  { title: "อาหารค่ำ" },
  { title: "น้ำปั่น" },
  { title: "ส้มตำ" },
  { title: "หมูกระทะ" },
  { title: "ทางด่วน" },
  { title: "ค่าโรงแรม" },
  { title: "เติมน้ำมัน" },
  { title: "อื่นๆ" }
];

const filter = createFilterOptions();
export default function Note() {
  const [value, setValue] = React.useState({
    title: options[0].title
  });
  return (
    <Autocomplete
      style={{ width: 300 }}
      value={value}
      onChange={(event, newValue) => {
        if (newValue && newValue.inputValue) {
          setValue({
            title: newValue.inputValue
          });

          return;
        }

        setValue(newValue);
      }}
      options={options}
      getOptionLabel={option => {
        if (typeof option === "string") {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        if (params.inputValue !== "") {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`
          });
        }

        return filtered;
      }}
      renderInput={params => (
        <TextField
          {...params}
          // label="จ่ายค่าอะไร"
          fullWidth
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
}
