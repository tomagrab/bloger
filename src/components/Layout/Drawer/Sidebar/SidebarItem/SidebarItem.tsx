import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type SidebarItemProps = {
  href: string;
  icon: IconProp;
  itemTitle: string;
};

export default function SidebarItem({
  href,
  icon,
  itemTitle,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="flex flex-col items-center justify-center group relative"
      >
        <FontAwesomeIcon
          icon={icon}
          className="h-8 w-8 group-hover:opacity-0 transition-opacity duration-300"
        />
        <span className="absolute align-middle tooltip-content opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {itemTitle}
        </span>
      </Link>
    </li>
  );
}
