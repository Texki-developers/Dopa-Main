import Center from "@/Components/BasicComponents/Center/Center";
import React from "react";
import FacultyCardV2 from "@/Components/Cards/FacultyCardV2/FacultyCardV2";

export default function DopaFacultiesSection({ faculties }) {
  return (
    <Center>
      <div className="common-space-x grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-[100%] gap-[1rem] gap-y-[1.5rem]">
        {faculties?.map((faculty) => (
          <FacultyCardV2 {...faculty} key={faculty.name} />
        ))}
      </div>
    </Center>
  );
}
