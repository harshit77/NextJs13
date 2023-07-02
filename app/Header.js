"use client";
import Image from "next/image"
import Input from "@/_components/Input"
import Button from "@/_components/Button";

export default function Header() {
    return (
      <div className="flex justify-between items-center px-4 py-2">
        <Image
          src="/images/goInidiaStocks.png"
          width="80"
          height="80"
          style={{ objectFit: "contain" }}
        />
        <div className="flex items-center space-x-6 flex-1 ml-6">
          <Input
            className="!w-11/12 md:!w-1/2"
            suffix={<i className="ri-search-line ri-xl"></i>}
            autoFocus
          />
        </div>
        <div className="hidden md:flex flex-end text-black  space-x-4">
          <Button label="Contact Us" variant="text" />
          <Button label="SIGN UP" variant="bordered" />
          <Button label="SIGN IN" variant="bordered" />
        </div>
        <div className="flex justify-center items-center px-3 py-4 rounded-full border border-gray-600 bg-slate-100 md:hidden">
          <i class="ri-user-2-line ri-xl"/>
        </div>
      </div>
    );
}