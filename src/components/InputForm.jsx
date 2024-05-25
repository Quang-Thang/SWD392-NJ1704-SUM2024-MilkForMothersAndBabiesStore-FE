import React from "react";

const InputForm = ({
  placeholder,
  label,
  refer,
  validationErrors,
  type = "text",
  ...otherProps
}) => {
  return (
    <div className="w-full mb-5">
      <label htmlFor={label} className="flex items-start text-lg font-bold">
        {placeholder}
      </label>
      <input
        ref={refer}
        placeholder={placeholder}
        {...otherProps}
        className="w-full px-4 py-2 border border-blue-500 border-solid rounded-md outline-none focus:border-blue-700"
        type={label}
      />
    </div>
  );
};

export default InputForm;
