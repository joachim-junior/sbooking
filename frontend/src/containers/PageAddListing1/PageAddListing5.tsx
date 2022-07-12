import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import CommonLayout from "./CommonLayout";
import Textarea from "shared/Textarea/Textarea";

export interface PageAddListing5Props {}

const PageAddListing5: FC<PageAddListing5Props> = () => {
  const renderRadio = (
    name: string,
    id: string,
    label: string,
    defaultChecked?: boolean
  ) => {
    return (
      <div className="flex items-center">
        <input
          defaultChecked={defaultChecked}
          id={id + name}
          name={name}
          type="radio"
          className="focus:ring-primary-500 h-6 w-6 text-primary-500 border-neutral-300 !checked:bg-primary-500 bg-transparent"
        />
        <label
          htmlFor={id + name}
          className="ml-3 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </label>
      </div>
    );
  };

  const renderNoInclude = (text: string) => {
    return (
      <div className="flex items-center justify-between py-3">
        <span className="text-neutral-6000 dark:text-neutral-400 font-medium">
          {text}
        </span>
        <i className="text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"></i>
      </div>
    );
  };

  return (
    <CommonLayout
      index="04"
      backtHref="/add-listing-4"
      nextHref="/add-listing-6"
    >
      <>
        <div>
          <h2 className="text-2xl font-semibold">
            Set house rules for your guests{" "}
          </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Guests must agree to your house rules before they book.
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <>
          <div>
            <h2 className="text-2xl font-semibold">Hotel policy</h2>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Mention hotel's policies, like no smoking, no pets, etc.
            </span>
          </div>
          <Textarea placeholder="..." rows={5} />
        </>
        <>
          <div>
            <h2 className="text-2xl font-semibold">Special note</h2>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Add additional information
            </span>
          </div>
          <Textarea placeholder="..." rows={5} />
        </>
      </>
    </CommonLayout>
  );
};

export default PageAddListing5;
