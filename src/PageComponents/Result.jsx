import React from "react";
import ComponentHeader from "./ComponentHeader";
import Image from "next/image";

export default function Result() {
  return (
    <div className="flex flex-col p-4 md:px-16">
      <ComponentHeader heading="Results" url="/Assets/icons/result.png" />
      <div className="gap-4 flex flex-col lg:grid lg:grid-cols-[1fr,2fr]">
        <div className="relative aspect-[4/3] lg:aspect-[1/0] lg:order-2">
          <Image
            className="object-cover lg:object-contain"
            src="/Assets/homeV2/dopa_neet_coaching_aims.png"
            fill
            alt="Best neet coaching center in kerala"
          />
        </div>
        <div className="relative aspect-square  ">
          <Image
            className="object-cover lg:object-contain"
            src="/Assets/homeV2/dopa_neet_coaching_results_stack.png"
            fill
            alt="Best neet coaching center in calicut"
          />
        </div>
      </div>
    </div>
  );
}
