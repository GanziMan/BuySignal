import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const DialogComponent = () => (
  <Dialog.Root>
    
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60 animate-fadeIn" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-contentShow">
        <Dialog.Title className="text-lg font-medium text-gray-900">
          Edit profile
        </Dialog.Title>
        <Dialog.Description className="mt-2 mb-5 text-sm text-gray-700">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset className="flex gap-4 items-center mb-4">
          <label
            className="text-sm text-violet-700 w-24 text-right"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="flex-1 h-9 px-3 text-sm text-violet-700 border border-violet-300 rounded-md focus:ring-2 focus:ring-violet-500 focus:outline-none"
            id="name"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldset className="flex gap-4 items-center mb-4">
          <label
            className="text-sm text-violet-700 w-24 text-right"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="flex-1 h-9 px-3 text-sm text-violet-700 border border-violet-300 rounded-md focus:ring-2 focus:ring-violet-500 focus:outline-none"
            id="username"
            defaultValue="@peduarte"
          />
        </fieldset>
        <div className="flex justify-end mt-6">
          <Dialog.Close asChild>
            <button className="inline-flex items-center justify-center rounded-md bg-green-200 text-green-700 px-4 py-2 text-sm font-medium hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500">
              Save changes
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full w-6 h-6 bg-transparent text-violet-700 hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-500">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogComponent;
