import { Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function FormError({ show, className }: { show: boolean, className?: string }) {
  return (
    <Transition
      as={Fragment}
      show={show}
      enter="transform duration-200 transition ease-in-out"
      enterFrom="opacity-0 scale-95 "
      enterTo="opacity-100 rotate-0 scale-100 "
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className={`flex bottom-0 left-0 gap-2 bg-danger-light md:rounded-lg ${className || ''}`}>
        <span className="leading-[1.625rem] font-bold">
          Sorry, we ran into an issue.
        </span>
      </div>
    </Transition>
  );
}
