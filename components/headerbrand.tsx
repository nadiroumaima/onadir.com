import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StatusDot } from "./icons";

const HeaderBrand = () => {
  return (
    <div className="brix---header-left-col flex items-center">
      <Link
        href="/"
        aria-label="home"
        className="brix---header-logo-link-left flex items-center gap-3 transition-transform duration-200 hover:translate-y-[2px] hover:scale-95"
      >
<div className="w-14 h-14 p-1 rounded-full" style={{backgroundColor: 'rgba(55, 65, 81, 0.7)'}}>
<div className="w-12 h-12 relative overflow-hidden rounded-full border-2 border-gray-300">
  <Image
  src="/assets/images/cartoon_profile2.jpg"
  alt="Profile"
  width={96}
  height={96}
  className="object-cover rounded-full"
  priority
/>

</div>
</div>



        <div className="navbar_work">
          <div className="navbar_name text-sm font-medium font-sans">
      <span className="hidden md:inline-flex font-extrabold tracking-tight">
  Oumaima NADIR
</span>
</div>

          <div className="navbar__available flex items-center gap-1">
  <StatusDot
    className="hero__badge-circle animate-pulse"
    style={{
      opacity: 0.27767,
      willChange: 'opacity',
    }}
  />

            <div className={cn(
  'flex items-center rounded px-2.5 py-1.5 text-sm font-medium transition-colors duration-200',
  'text-muted-foreground '
)}>
  Software &amp; Cloud Consultant
</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default HeaderBrand;

