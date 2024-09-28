import React from "react";
import { Link } from "gatsby";
import { Icon } from "./Icon";

export const Footer = () => {
  return (
    <footer className="bg-fuchsia-950 text-white p-4">
      <div className="flex flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap text-sm">
          <p>Copyright PureAesthetic© 2024. All rights reserved.</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 xs:mt-0">
          <Link to="https://www.facebook.com/profile.php?id=100090671270044">
            <Icon icon="facebook" />
          </Link>
          <Link to="https://instagram.com/pure.aesthetic.ro?igshid=MzRlODBiNWFlZA==">
            <Icon icon="instagram"/>
          </Link>
        </div>
      </div>
    </footer>
  );
};
