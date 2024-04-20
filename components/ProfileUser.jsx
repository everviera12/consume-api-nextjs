import Link from "next/link";
import React from "react";

// components
import Image from "next/image";

const UserProfile = ({ user }) => {
  const { id, name, email } = user;

  return (
    <section className="grid gap-5 py-3">
      <div className="flex justify-center">
        <Image
          className="rounded-full h-[100px]"
          src={`https://avatars.githubusercontent.com/u/${id}`}
          width={"100"}
          height={"100"}
          alt={name}
        />
      </div>

      <div className="grid gap-2">
        <span className="font-bold text-lg w-[150px] flex text-white">
          {name}
        </span>

        <address className="text-purple-300 font-medium text-sm">
          {email}
        </address>

        <Link
          href={`/user/${id}`}
          className="font-mono text-sm font-light text-white"
        >
          View Profile
        </Link>
      </div>
    </section>
  );
};

export default UserProfile;
