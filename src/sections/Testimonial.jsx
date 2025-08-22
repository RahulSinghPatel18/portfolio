import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-56 sm:w-64 cursor-pointer overflow-hidden rounded-xl border p-3 sm:p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10 w-8 h-8 sm:w-8 sm:h-8"
          width="32"
          height="32"
          alt={`${name}'s profile`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-20 md:mt-25 lg:mt-35 section-spacing px-4 sm:px-6 lg:px-8">
      <h2 className="text-heading">Hear From My Clients</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-8 sm:mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
