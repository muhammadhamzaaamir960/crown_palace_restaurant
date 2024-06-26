import { getSocialLinks } from "@/config/getData";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export async function generateStaticParams() {
  const data = await getSocialLinks();
  return data;
}

async function SocialLinks() {
  const data = await getSocialLinks();
  return (
    <div className="flex flex-col justify-center gap-y-4 mt-5 sm:mt-10 h-full p-4">
      <h3 className="text-secondary font-semibold text-2xl">Social Links</h3>
      <p className="text-gray-300 max-w-[200px] ">
        Follow us on social media for more updates!
      </p>
      <div className="flex gap-x-2">
        <Link
          className="p-2 bg-gray-300 rounded-full hover:bg-secondary"
          href={`${data.fields.facebookLink}`}
        >
          <FaFacebook className="text-2xl  text-[#4267B2]" />
        </Link>
        <Link
          className="p-2 bg-gray-300 rounded-full hover:bg-secondary"
          href={`${data.fields.instagramLink}`}
        >
          <FaInstagramSquare className="text-2xl  text-[#C13584]" />
        </Link>
        <Link
          className="p-2 bg-gray-300 rounded-full hover:bg-secondary"
          href={`${data.fields.youtubeLink}`}
        >
          <FaYoutube className="text-2xl  text-[#FF0000]" />
        </Link>
        <Link
          className="p-2 bg-gray-300 rounded-full hover:bg-secondary"
          href={`${data.fields.twitterLink}`}
        >
          <FaTwitter className="text-2xl  text-[#1DA1F2]" />
        </Link>
      </div>
    </div>
  );
}

export default SocialLinks;

//
