"use client";

import Image from "next/image";

import mobile from "@/assets/crew/background-crew-mobile.jpg";
import tablet from "@/assets/crew/background-crew-tablet.jpg";
import desktop from "@/assets/crew/background-crew-desktop.jpg";

import anousheh from "@/assets/crew/image-anousheh-ansari.png";
import douglas from "@/assets/crew/image-douglas-hurley.png";
import mark from "@/assets/crew/image-mark-shuttleworth.png";
import victor from "@/assets/crew/image-victor-glover.png";
import { usePrevious } from "@mantine/hooks";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SLIDE_LEFT, SLIDE_RIGHT } from "@/lib/data";
import MotionDiv from "@/components/MotionDiv";
import Background from "@/components/Background";
import PageTitle from "@/components/PageTitle";
import { AnimatePresence } from "framer-motion";

// Data
const members = [
  {
    name: "Douglas Hurley",
    image: douglas,
    role: "Commander",
    description: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
  },
  {
    name: "Mark Shuttleworth",
    image: mark,
    role: "Mission Specialist",
    description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
  },
  {
    name: "Victor Glover",
    image: victor,
    role: "Pilor",
    description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`,
  },
  {
    name: "Anousheh Ansari",
    image: anousheh,
    role: "Flight Engineer",
    description: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
  },
];

function CrewPage() {
  let [actual, setActual] = useState(0);
  const previous = usePrevious(actual);

  const member = useMemo(() => members[actual], [actual]);
  const variant = useMemo(() => {
    if (previous === undefined) return SLIDE_RIGHT;
    if (actual > previous) return SLIDE_LEFT;
    return SLIDE_RIGHT;
  }, [actual]);

  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />

      <main className="relative z-10 flex flex-col-reverse p-6 md:px-24 lg:pt-12 lg:min-h-[80vh] lg:grid lg:grid-cols-2">
        <div className="flex flex-col-reverse relative z-10 lg:flex-col lg:justify-between">
          <div className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10 hidden lg:block">
            <PageTitle number={2} title="Meet Your crew" />
          </div>
          <div className="text-secondary text-center lg:text-left">
            <h4 className="uppercase mb-4  text-[16px] lg:text-[32px] ">
              {" "}
              {member.role}{" "}
            </h4>
            <h3 className="uppercase text-white mb-7 text-[24px] lg:text-[56px] ">
              {" "}
              {member.name}{" "}
            </h3>
            <p className="leading-relaxed lg:text-[18px] ">
              {" "}
              {member.description}{" "}
            </p>
          </div>
          <div className="flex gap-x-6 my-8 justify-center lg:justify-start">
            {members.map(({ name }, index) => (
              <div
                onClick={() => setActual(index)}
                key={index}
                className={`w-3 aspect-square rounded-full transition cursor-pointer opacity-40 bg-white [&.active]:opacity-100 [&:not(.active)]:hover:opacity-75 ${
                  member.name === name && "active"
                }`}
              />
            ))}
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            key={member.name}
            variants={variant}
            className="border-b border-white/50 w-full md:fixed md:bottom-0 md:right-0 md:w-screen md:h-[532px]  lg:h-[712px] "
          >
            <Image
              src={member.image}
              alt={member.role}
              className="block mx-auto w-auto h-[222px] md:h-full lg:mx-0 lg:ml-auto lg:mr-20"
            />
          </motion.div>
        </AnimatePresence>
        <div className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10 lg:hidden">
          <PageTitle number={2} title="Meet Your crew" />
        </div>
      </main>
    </MotionDiv>
  );
}

export default CrewPage;
