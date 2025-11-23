import type { FC } from "react";
import cls from "./Checkbox.module.scss";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, disabled }) => {
  return (
    <label className={cls.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={cls.input}
      />
      <span className={cls.checkbox} />
    </label>
  );
};