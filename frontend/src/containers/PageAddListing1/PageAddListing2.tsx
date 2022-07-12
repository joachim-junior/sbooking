import { LocationMarkerIcon } from "@heroicons/react/solid";
import LocationMarker from "components/AnyReactComponent/LocationMarker";
import Label from "components/Label/Label";
import GoogleMapReact from "google-map-react";
import React, { FC } from "react";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
import FormItem from "./FormItem";

export interface PageAddListing2Props {}

const PageAddListing2: FC<PageAddListing2Props> = () => {
  return (
    <CommonLayout
      index="02"
      nextHref="/add-listing-4"
      backtHref="/add-listing-1"
    >
      <>
        <h2 className="text-2xl font-semibold">Location details</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-8">
          <FormItem label="Street address">
            <Input placeholder="Ex: Razel street" />
          </FormItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
            <FormItem label="City">
              <Input />
            </FormItem>
            <FormItem label="State">
              <Input />
            </FormItem>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
            <FormItem label="Longitude">
              <Input />
            </FormItem>
            <FormItem label="Latitude">
              <Input />
            </FormItem>
          </div>
        </div>
      </>
    </CommonLayout>
  );
};

export default PageAddListing2;
