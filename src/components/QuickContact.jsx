import React from "react";

export default function QuickContact() {
  return (
    <div className="max-lg:hidden lg:grid grid-rows-1 gap-0 ml-4">
      <div className="w-full bg-white rounded-lg p-2  h-fit">
        <div className="flex flex-row">
          <img src="image/ju10.png" className="w-10 h-auto" alt="Web Designs" />
          <div className="text-xs mt-2 ">
            <h5>Call For Web Designs</h5>
            <p>091-2002-6574</p>
          </div>
        </div>
        <div className="flex flex-row">
          <img
            src="image/ju12.png"
            className="w-10 h-auto"
            alt="Custom Designs"
          />
          <div className="text-xs mt-4">
            <h5>Get Custom Designs</h5>
          </div>
        </div>
        <div className="flex flex-row">
          <img src="image/ju11.png" className="w-10 h-auto" alt="Best Deals" />
          <div className="text-xs mt-3">
            <h5>Best Deals</h5>
          </div>
        </div>
      </div>
      <div className="">
        <img src="/image/ju9.png" className="rounded-md" />
      </div>
    </div>
  );
}
