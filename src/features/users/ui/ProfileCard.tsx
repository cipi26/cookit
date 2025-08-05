import Image from "next/image";
import React from "react";
import { getUserProfileHeader } from "../actions/getUserProfileHeader";

const ProfileCard = async ({ username }: { username: string }) => {
  const user = await getUserProfileHeader(username);

  return (
    <section className="bg-card rounded-4xl shadow-md overflow-hidden">
      <div className="bg-border w-[1200px] h-56" />

      <div className="space-y-5 pl-9 pb-9 -mt-[6.78rem]">
        <Image
          src={user.avatar}
          alt=""
          width={225}
          height={225}
          className="rounded-full border-8 border-card"
        />
        <div className="">
          <h2 className="text-3xl font-bold">{user.full_name}</h2>
          <p className="text-lg text-copy-lighter">@{user.username}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
