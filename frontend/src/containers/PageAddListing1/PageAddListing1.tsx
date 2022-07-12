import React, { FC } from "react";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
import FormItem from "./FormItem";
import Checkbox from "shared/Checkbox/Checkbox";
import Textarea from "shared/Textarea/Textarea";

export interface PageAddListing1Props {}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  return (
    <CommonLayout
      index="01"
      backtHref="/add-listing-1"
      nextHref="/add-listing-10"
    >
      <>
        <h2 className="text-2xl font-semibold">Add hotel details</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-8">
          <FormItem label="Hotel name">
            <Input placeholder="Hotel name" />
          </FormItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5">
            <FormItem label="Phone number">
              <Input />
            </FormItem>
            <FormItem label="Email address">
              <Input />
            </FormItem>
            <FormItem label="Average price">
              <Input />
            </FormItem>
          </div>
        </div>
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
        <>
          <div>
            <h2 className="text-2xl font-semibold">Amenities </h2>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Many customers have searched for accommodation based on amenities
              criteria
            </span>
          </div>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          {/* FORM */}
          <div className="space-y-8">
            {/* ITEM */}
            <div>
              <label className="text-lg font-semibold" htmlFor="">
                General amenities
              </label>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <Checkbox label="Wifi" name="Wifi" defaultChecked />
                <Checkbox label="Internet" name="Internet" />
                <Checkbox label="TV" name="TV" defaultChecked />
                <Checkbox label="Air conditioning" name="Air conditioning" />
                <Checkbox label="Fan" name="Fan" />
                <Checkbox label="Private entrance" name="Private entrance" />
                <Checkbox label="Dryer" name="Dryer" defaultChecked />
                <Checkbox label="Heater" name="Heater" />
                <Checkbox label="Washing machine" name="Washing machine" />
                <Checkbox label="Detergent" name="Detergent" defaultChecked />
                <Checkbox label="Clothes dryer" name="Clothes dryer" />
                <Checkbox label="Baby cot" name="Baby cot" />
                <Checkbox label="Desk" name="Desk " defaultChecked />
                <Checkbox label="Fridge" name="Fridge" />
                <Checkbox label="Dryer" name="Dryer" defaultChecked />
              </div>
            </div>

            {/* ITEM */}
            <div>
              <label className="text-lg font-semibold" htmlFor="">
                Other amenities
              </label>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <Checkbox label="Wardrobe" name="Wardrobe" defaultChecked />
                <Checkbox label="Cloth hook" name="Cloth hook" />
                <Checkbox
                  label="Extra cushion"
                  name="Extra cushion"
                  defaultChecked
                />
                <Checkbox label="Gas stove" name="Gas stove" />
                <Checkbox label="Toilet paper" name="Toilet paper" />
                <Checkbox
                  label="Free toiletries"
                  name="Free toiletries"
                  defaultChecked
                />
                <Checkbox label="Makeup table" name="Makeup table" />
                <Checkbox label="Hot pot" name="Hot pot" />
                <Checkbox label="Bathroom heaters" name="Bathroom heaters" />
                <Checkbox label="Kettle" name="Kettle" defaultChecked />
                <Checkbox label="Dishwasher" name="Dishwasher" />
                <Checkbox label="BBQ grill" name="BBQ grill" defaultChecked />
                <Checkbox label="Toaster" name="Toaster" defaultChecked />
                <Checkbox label="Towel" name="Towel" />
                <Checkbox label="Dining table" name="Dining table" />
              </div>
            </div>

            {/* ITEM */}
            <div>
              <label className="text-lg font-semibold" htmlFor="">
                Safe amenities
              </label>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <Checkbox label="Fire siren" name="Fire siren" defaultChecked />
                <Checkbox label="Fire extinguisher" name="Fire extinguisher" />
                <Checkbox label="Anti-theft key" name="Anti-theft key" />
                <Checkbox label="Safe vault" name="Safe vault" />
              </div>
            </div>
          </div>
        </>
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
        <>
          <div>
            <h2 className="text-2xl font-semibold">
              Your place description for client
            </h2>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Mention the best features of your accommodation, any special
              amenities like fast Wi-Fi or parking, as well as things you like
              about the neighborhood.
            </span>
          </div>

          <Textarea placeholder="..." rows={14} />
        </>
        <>
          <div>
            <h2 className="text-2xl font-semibold">
              Your place description for client
            </h2>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Mention the best features of your accommodation, any special
              amenities like fast Wi-Fi or parking, as well as things you like
              about the neighborhood.
            </span>
          </div>

          <Textarea placeholder="..." rows={14} />
        </>
        <>
          <div>
            <h2 className="text-2xl font-semibold">Pictures of the place</h2>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              A few beautiful photos will help customers have more sympathy for
              your property.
            </span>
          </div>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          {/* FORM */}
          <div className="space-y-8">
            <div>
              <span className="text-lg font-semibold">Cover image</span>
              <div className="mt-5 ">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------------- */}
            <div>
              <span className="text-lg font-semibold">Hotel pictures</span>
              <div className="mt-5 ">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="file-upload-2"
                        className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload-2"
                          name="file-upload-2"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    </CommonLayout>
  );
};

export default PageAddListing1;
