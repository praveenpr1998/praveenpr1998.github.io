// @flow strict
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import BlogCard from "./blog-card";




function Blog() {
  const blogs = [
  {
    title: "Optimizing Long Lists in React with Virtualization: A Practical Guide",
    link: "https://medium.com/@praveenpr1998/optimizing-long-lists-in-react-with-virtualization-a-practical-guide-3d8f744f5370",
    published: 1713523200000, // example timestamp (19 Apr 2025)
    content: `<p>When rendering a list with 10,000+ items in React...</p><img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*sample-image1.png" />`,
    category: ["React", "Performance"]
  },
  {
    title: "Multithreading in JavaScript: Harnessing the Power of Web Workers",
    link: "https://medium.com/@praveenpr1998/multithreading-in-javascript-harnessing-the-power-of-web-workers-abc123def456",
    published: 1720560000000, // example timestamp
    content: `<p>JavaScript is inherently single-threaded...</p><img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*sample-image2.png" />`,
    category: ["JavaScript", "Web Workers"]
  },
  {
    title: "Virtualized List in React Using Intersection Observer for Lazy Loading",
    link: "https://medium.com/@praveenpr1998/virtualized-list-in-react-using-intersection-observer-for-lazy-loading-ghi789jkl012",
    published: 1716940800000,
    content: `<p>Efficient rendering of large lists...</p><img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*sample-image3.png" />`,
    category: ["React", "Lazy Loading"]
  },
  {
    title: "Watching Object Changes in JavaScript with Proxies",
    link: "https://medium.com/@praveenpr1998/watching-object-changes-in-javascript-with-proxies-mno345pqr678",
    published: 1715731200000,
    content: `<p>React has hooks, but what if you want to...</p><img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*sample-image4.png" />`,
    category: ["JavaScript", "Proxies"]
  }
];
  
  return (
    <div
      id="blogs"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs
          .slice(0, 6)
          .map((blog, i) => blog?.title && <BlogCard blog={blog} key={i} />)}
      </div>
      {blogs.length > 6 && (
        <div className="flex justify-center  mt-5 lg:mt-12">
          <Link
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            href="/blog"
          >
            <span>View More</span>
            <FaArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Blog;
