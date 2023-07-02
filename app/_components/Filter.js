"use client"

import Typography from "./Typography";
import Button from "./Button";
import Input from "./Input";
import classnames from "classnames"

export default function Filter({ className, filterOptions, isSearchAble=false, onInputChange =()=>{}}) {
  return (
    <div
      className={classnames("flex flex-col space-y-4", {
        [className]: className,
      })}
    >
      <Typography component="h2">Filters</Typography>
      <div className="flex flex-wrap bg-white px-5 py-3 space-x-2 md:space-x-3 gap-y-3 rounded-md shadow-md">
        {filterOptions.map((option) => (
          <Button size="medium" {...option} />
        ))}
        {isSearchAble && (
          <Input
            className="!w-40 !rounded-full flex-1 md:flex-initial"
            prefix={<i className="ri-search-line ri-xl"></i>}
          />
        )}
      </div>
    </div>
  );
}