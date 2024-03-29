import Link from "next/link";
import React, { useState } from "react";

const Socialcontacts = ({ item }) => {
  const [tip, setTip] = useState(false);
  return (
    <div
      className="p-3 shadow-xl shadow-black/30 rounded-full cursor-pointer transition-transform hover:scale-125 z-50"
      onMouseEnter={() => setTip(!tip)}
      onMouseLeave={() => setTip(!tip)}
      key={item.id}
    >
      <p
        className={
          tip
            ? "absolute bottom-10 right-0 text-xs bg-white p-1 rounded-xl text-black"
            : "hidden"
        }
      >
        {item.name}
      </p>
      <Link href={item.link}>
        <item.icon size={20} color={[item.color]} />
      </Link>
    </div>
  );
};

export default Socialcontacts;
