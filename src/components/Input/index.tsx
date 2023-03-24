import { HTMLInputTypeAttribute } from "react";

export default function Input({ type, label, name, placeholder, register, error, className }:
  { type?: HTMLInputTypeAttribute, label: string, name: string, placeholder: string, register: any, error?: any, className?: string }) {

  return (
    <div className="flex flex-col mb-2 xs:mb-4">
      <label className={`text-text-muted text-base mb-2`}>{label}</label>
      <input
        type={type ?? "text"}
        {...register(name)}
        placeholder={placeholder}
        className={
          `p-2 border bg-background2 text-text-muted border-transparent focus-visible:border-gray outline-none rounded-md
          ${error ? "border-danger outline-0 focus-visible:rounded-md" : ''} 
          ${className || ''}`
        }
      />
      {error && <p role="alert" className="text-xs m-0 text-red-600">{error}</p>}
    </div>);
}
