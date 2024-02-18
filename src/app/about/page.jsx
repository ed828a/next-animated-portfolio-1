"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2 }}
    >
      {/* container */}
      <div className="">
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 ">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">Biography</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              totam dolore eligendi dolor? Eos odio labore animi suscipit harum
              rerum consequatur placeat assumenda illo, recusandae et
              aspernatur, voluptate accusamus doloremque?
            </p>
            <span className="italic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>

            <Image
              src={"/signature.png"}
              width={240}
              height={24}
              alt="mysign"
              className="ml-auto"
            />
          </div>

          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">Skills</h1>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React,js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Scss
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Prisma
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebHooks
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Stripe
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                RestAPI
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 justify-center mb-48">
            <h1 className="font-bold text-2xl">Experiences</h1>
            {/* experience list */}
            <div className="">
              {/* exprience list item */}
              <div className="flex justify-between h-48 border">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white font-semibold rounded-md">
                    Senior JavaScript Enginer
                  </div>
                  {/* job description */}
                  <div className="">
                    My current employment. Way better than the position before.
                  </div>
                  {/* job date */}
                  <div className="">2024 - Present</div>
                  {/* job company */}
                  <div className="">Apple</div>
                </div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="">
                    {/* line circle */}
                    <div className=""></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
              <div className="">
                {/* left */}
                <div className=""></div>
                {/* center */}
                <div className="">
                  {/* line */}
                  <div className="">
                    {/* line circle */}
                    <div className=""></div>
                  </div>
                </div>
                {/* right */}

                <div className="">
                  {/* job title */}
                  <div className="">Senior JavaScript Enginer</div>
                  {/* job description */}
                  <div className="">
                    My current employment. Way better than the position before.
                  </div>
                  {/* job date */}
                  <div className="">2024 - Present</div>
                  {/* job company */}
                  <div className="">Apple</div>
                </div>
              </div>
              <div className="">
                {/* left */}
                <div className="">
                  {/* job title */}
                  <div className="">Senior JavaScript Enginer</div>
                  {/* job description */}
                  <div className="">
                    My current employment. Way better than the position before.
                  </div>
                  {/* job date */}
                  <div className="">2024 - Present</div>
                  {/* job company */}
                  <div className="">Apple</div>
                </div>
                {/* center */}
                <div className="">
                  {/* line */}
                  <div className="">
                    {/* line circle */}
                    <div className=""></div>
                  </div>
                </div>
                {/* right */}
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG container */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
