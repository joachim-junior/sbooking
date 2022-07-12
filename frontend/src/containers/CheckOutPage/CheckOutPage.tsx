import { Tab } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/outline";
import React, { FC, Fragment, useState } from "react";
import visaPng from "images/vis.png";
import mastercardPng from "images/mastercard.svg";
import Input from "shared/Input/Input";
import Label from "components/Label/Label";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import NcImage from "shared/NcImage/NcImage";
import StartRating from "components/StartRating/StartRating";
import NcModal from "shared/NcModal/NcModal";
import image from "images/marithon/274176499_1813555455496684_2607867805103293293_n.jpg";
import axios from "axios";

export interface CheckOutPageProps {
  className?: string;
}

const CheckOutPage: FC<CheckOutPageProps> = ({ className = "" }) => {
  const renderSidebar = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-8 px-0 sm:p-6 xl:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex-shrink-0 w-full sm:w-40">
            <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
              <NcImage src={image} />
            </div>
          </div>
          <div className="py-5 sm:px-5 space-y-3">
            <div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                Marithon Hotel
              </span>
              <span className="text-base font-medium mt-1 block">
                Standard room
              </span>
            </div>
            <span className="block  text-sm text-neutral-500 dark:text-neutral-400">
              2 beds · 2 baths
            </span>
            <div className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>
            <StartRating />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold">Price detail</h3>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>FCFA1000 x 1 day</span>
            <span>FCFA1000</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>Service charge</span>
            <span>FCFA0</span>
          </div>

          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>FCFA1000</span>
          </div>
        </div>
      </div>
    );
  };

  const RenderMain = () => {
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const baseURL = "https://short-sms.herokuapp.com/sendsms/";
    const message = `Hello ${username} Thank you for booking with Sbooking. Your reservation code is #SB09F172T5. Enjoy your stay with us.`;
    const code = "7843";
    const handleClick = () => {
      axios
        .post(baseURL, {
          code,
          phones: `+237${phone}`,
          message,
        })
        .then(function (response) {
          console.log(code + phone + message + response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Confirm and payment
        </h2>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <div>
            <h3 className="text-2xl font-semibold">Your trip</h3>
            <NcModal
              renderTrigger={(openModal) => (
                <span
                  onClick={() => openModal()}
                  className="block lg:hidden underline  mt-1 cursor-pointer"
                >
                  View booking details
                </span>
              )}
              renderContent={renderSidebar}
            />
          </div>
          <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700">
            <div className="flex-1 p-5 flex justify-between space-x-5">
              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">Date</span>
                <span className="mt-1.5 text-lg font-semibold">
                  July 12 - 13, 2022
                </span>
              </div>
              <PencilAltIcon className="w-6 h-6 text-neutral-300 dark:text-neutral-6000" />
            </div>
            <div className="flex-1 p-5 flex justify-between space-x-5">
              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">Guests</span>
                <span className="mt-1.5 text-lg font-semibold">1 Guest</span>
              </div>
              <PencilAltIcon className="w-6 h-6 text-neutral-300 dark:text-neutral-6000" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Pay with</h3>
          <div className="mt-6">
            <Tab.Group>
              <Tab.List className="flex">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full focus:outline-none ${
                        selected
                          ? "bg-neutral-800 text-white"
                          : "text-neutral-6000 dark:text-neutral-400"
                      }`}
                    >
                      Fapshi
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <div className="w-14 border-b border-neutral-200 my-5"></div>
              <Tab.Panels>
                <Tab.Panel className="space-y-5">
                  <div className="space-y-1">
                    <Label>Full names </Label>
                    <Input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Valid email </Label>
                    <Input
                      type="email"
                      defaultValue="okoriesarah90@gmail.com"
                    />
                  </div>
                  <div className="flex space-x-5  ">
                    <div className="flex-1 space-y-1">
                      <Label>Phone number</Label>
                      <Input
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <Label>Address </Label>
                      <Input />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label>Additional note(optional) </Label>
                    <Textarea placeholder="..." />
                    <span className="text-sm text-neutral-500 block">
                      Add a special note.
                    </span>
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://checkout.fapshi.com/link/39762191"
                      target="_blank"
                    >
                      <ButtonPrimary onClick={handleClick}>
                        Confirm and pay
                      </ButtonPrimary>
                    </a>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="space-y-5">
                  <div className="space-y-1">
                    <Label>Email </Label>
                    <Input type="email" defaultValue="example@gmail.com" />
                  </div>
                  <div className="space-y-1">
                    <Label>Password </Label>
                    <Input type="password" defaultValue="***" />
                  </div>
                  <div className="space-y-1">
                    <Label>Messager for author </Label>
                    <Textarea placeholder="..." />
                    <span className="text-sm text-neutral-500 block">
                      Write a few sentences about yourself.
                    </span>
                  </div>
                  <div className="pt-4">
                    <a href="https://checkout.fapshi.com/link/39762191">
                      <ButtonPrimary onClick={handleClick}>
                        Confirm
                      </ButtonPrimary>
                    </a>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-CheckOutPage ${className}`} data-nc-id="CheckOutPage">
      <main className="container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{RenderMain()}</div>
        <div className="hidden lg:block flex-grow">{renderSidebar()}</div>
      </main>
    </div>
  );
};

export default CheckOutPage;
