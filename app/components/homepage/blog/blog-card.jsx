// @flow strict
import { timeConverter } from "../../../../utils/time-converter";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-FS4fVj3K1Igoop1A1Rstw.png"}
          height={1080}
          width={1920}
          alt=""
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <Link target="_blank" href={blog.link}>
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
            {blog.title}
          </p>
        </Link>
        <div className="flex flex-wrap gap-2">
          {blog.category?.map((cat, i) => (
            <div
              key={i + cat}
              className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
