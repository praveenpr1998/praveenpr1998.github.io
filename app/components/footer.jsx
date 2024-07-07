// @flow strict
import Link from "next/link";
import Image from "next/image";
import { skillsImage } from "@/utils/skill-image";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm flex items-center justify-center">
            Developed with
            <div className="flex items-center justify-center">
              <Link
                target="_blank"
                href="https://nextjs.org/"
                className="text-[#16f2b3] ml-2"
              >
                Next.js
              </Link>
              <p className="mx-2"> and </p>
              <Link
                target="_blank"
                href="https://www.mongodb.com/"
                className="text-[#16f2c3]"
              >
                MongoDB
              </Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
