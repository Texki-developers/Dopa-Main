import Image from "next/image";
import React from "react";

export default function DopaUpdates() {
  const updates = ["/Assets/homeV2/updates.png", "/Assets/homeV2/updates.png"];
  return (
    <div className="p-4 md:px-16">
      <div className="flex flex-col gap-2 pb-8">
        <h1 className="font-bold">Dopa Updates</h1>
        <p>Explore what's been happening?</p>
      </div>

      {updates &&
        updates.map((items) => (
          <div className="w-full">
            <div className="w-full h-[20rem] relative ">
              <Image
                fill
                src={items}
                alt="best entrance coaching center in kerala"
              />
            </div>
          </div>
        ))}
    </div>
  );
}
