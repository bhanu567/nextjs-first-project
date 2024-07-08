import Link from "next/link";
import "./page.scss";

export default function AboutUs() {
  return (
    <div className="link-div">
      <Link href="/about-us/1" className="lnk">
        Yash
      </Link>
      <Link href="/about-us/2" className="lnk">
        Vaibhav
      </Link>
      <Link href="/about-us/3" className="lnk">
        Suresh
      </Link>
    </div>
  );
}
