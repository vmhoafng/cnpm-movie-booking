import React from "react";
import clsx from "clsx";

const Input = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder,
  borderWhite,
  col,
}) => {
  return (
    <div className={clsx(col && "flex-col")}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div>
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeholder}
          // {...register(id, { required })}
          className={clsx(
            `
            form-input
            block
            w-full
            min-w-[200px]
            rounded
            border
            px-4
            text-white
            shadow-sm
            bg-white/10
            border-borderPrimary
            outline-0
            h-10
            placeholder:text-white/40
            sm:text-sm
            sm:leading-6
           focus:ring-rose-500
          `,
            // errors[id] && "focus:ring-rose-500",
            borderWhite && "border-white",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};
export default Input;
