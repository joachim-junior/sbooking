import StayCard from "components/StayCard/StayCard";
import { DEMO_STAY_LISTINGS } from "data/listings";
import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import CommonLayout from "./CommonLayout";

export interface PageAddListing10Props {}

const PageAddListing10: FC<PageAddListing10Props> = () => {
  return (
    <CommonLayout
      nextBtnText="Publish listing"
      index="02"
      backtHref="/add-listing-1"
      nextHref="/"
    >
      <>
        <div>
          <h2 className="text-2xl font-semibold">Congratulations 🎉</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Excellent, congratulations on completing the listing, it is waiting
            to be reviewed for publication
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
      </>
    </CommonLayout>
  );
};

export default PageAddListing10;
