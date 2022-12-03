import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { BsCamera } from "react-icons/bs";

const Profile = (effect: any, deps: any) => {
  const [profile, setProfile] = useState({
    picture: null,
    first_name: "Mark",
    last_name: "Jonas",
    phone_number: 71545454,
    address: "New York - St. 200",
    country: "USA",
    region: "New York",
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [visibility, setVisibility] = useState({
    current: false,
  });

  const [editImage, setEditImage] = useState(false);

  const [errors, setErrors] = useState({
    current_password: {
      error: false,
      message: "Current password is incorrect",
    },
    confirm_password: {
      error: false,
      message: "Password & Confirm Password are not equals",
    },
  });

  const editPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (profile.current_password !== "mark@123") {
      setErrors({
        ...errors,
        current_password: {
          ...errors.current_password,
          error: true,
        },
      });
      alert(errors.current_password.message);
    } else if (profile.new_password !== profile.confirm_password) {
      setErrors({
        ...errors,
        confirm_password: {
          ...errors.confirm_password,
          error: true,
        },
      });
      alert(errors.confirm_password.message);
    }
  };

  return (
    <>
      <div className="mt-4">
        <ul className=" flex items-center">
          <ol className="text-gray-400">
            <AiFillHome />
          </ol>
          <ol className="px-2 text-xs text-gray-400">/</ol>
          <ol className="text-gray-500">Profile</ol>
        </ul>
        <div className="text-lg font-bold text-gray-800">Profile</div>
      </div>
      <div className="py-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] md:flex-row md:items-stretch">
        <div className="basis-1/3 my-5 px-5 border-r-0 border-gray-300 flex flex-col items-center justify-start md:my-0 lg:px-10 md:border-r-[1px]">
          <label
            htmlFor="edit_image"
            className="relative w-52 h-64 cursor-pointer overflow-hidden rounded-full xl:w-72 md:h-96 lg:h-[30rem] md:w-full"
            onMouseEnter={() => setEditImage(true)}
            onMouseLeave={() => setEditImage(false)}
          >
            <AnimatePresence>
              {editImage && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute inset-0 z-10 bg-[#201fb133] flex items-center justify-center"
                >
                  <BsCamera className="text-white text-7xl" />
                </motion.div>
              )}
            </AnimatePresence>
            <Image
              src="/images/profilePic.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
            <input
              type="file"
              id="edit_image"
              className="hidden"
              onChange={(e) =>
                setProfile({ ...profile, [e.target.id]: e.target.files![0] })
              }
            />
          </label>
          <h3 className="font-bold mt-5 text-xl">{profile.first_name}</h3>
          <p className="text-gray-500">mark@example.com</p>
        </div>
        <form className="basis-1/3 my-5 px-5 border-r-0 flex flex-col justify-start border-gray-300 md:my-0 lg:px-10 md:border-r-[1px]">
          <h1 className="font-bold text-2xl mb-0 sm:text-3xl sm:mb-5">
            Profile Settings
          </h1>
          <div className="flex flex-col items-center justify-center my-0 xl:flex-row xl:my-3">
            <div className="w-full mr-0 my-2 flex flex-col xl:mr-2 lg:my-3 xl:my-0">
              <label
                className="text-sm text-gray-600 mb-1"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                required
                type="text"
                className="w-full p-2 outline-[#201fb1] border-2 border-[#201fb177] rounded lg:px-5"
                id="first_name"
                value={profile.first_name}
                onChange={(e) =>
                  setProfile({ ...profile, [e.target.id]: e.target.value })
                }
                placeholder="first name"
              />
            </div>
            <div className="w-full ml-0 my-2 flex flex-col xl:ml-2 lg:my-3 xl:my-0">
              <label className="text-sm text-gray-600 mb-1" htmlFor="last_name">
                Last Name
              </label>
              <input
                required
                type="text"
                className="w-full p-2 outline-[#201fb1] border-2 border-[#201fb177] rounded lg:px-5"
                id="last_name"
                value={profile.last_name}
                onChange={(e) =>
                  setProfile({ ...profile, [e.target.id]: e.target.value })
                }
                placeholder="first name"
              />
            </div>
          </div>
          <div className="flex flex-col my-2 lg:my-3">
            <label
              className="text-sm text-gray-600 mb-1"
              htmlFor="phone_number"
            >
              Phone Number
            </label>
            <input
              required
              type="number"
              className="w-full p-2 outline-[#201fb1] border-2 border-[#201fb177] rounded lg:px-5"
              id="phone_number"
              value={profile.phone_number}
              onChange={(e) =>
                setProfile({ ...profile, [e.target.id]: e.target.value })
              }
              placeholder="enter phone number"
            />
          </div>
          <div className="flex flex-col my-2 lg:my-3">
            <label className="text-sm text-gray-600 mb-1" htmlFor="address">
              Address
            </label>
            <input
              required
              type="text"
              className="w-full p-2 outline-[#201fb1] border-2 border-[#201fb177] rounded lg:px-5"
              id="address"
              value={profile.address}
              onChange={(e) =>
                setProfile({ ...profile, [e.target.id]: e.target.value })
              }
              placeholder="enter your address"
            />
          </div>
          <div className="flex flex-col items-center justify-center my-0 xl:flex-row xl:my-3">
            <div className="w-full mr-0 my-2 flex flex-col xl:mr-2 lg:my-3 xl:my-0">
              <label className="text-sm text-gray-600 mb-1" htmlFor="country">
                Country
              </label>
              <input
                required
                type="text"
                className="w-full p-2 outline-[#201fb1] border-2 border-[#201fb177] rounded lg:px-5"
                id="country"
                value={profile.country}
                onChange={(e) =>
                  setProfile({ ...profile, [e.target.id]: e.target.value })
                }
                placeholder="country"
              />
            </div>
            <div className="w-full ml-0 my-2 flex flex-col xl:ml-2 lg:my-3 xl:my-0">
              <label className="text-sm text-gray-600 mb-1" htmlFor="region">
                State/Region
              </label>
              <input
                required
                type="text"
                className="w-full p-2 outline-[#201fb1] border-2 border-[#201fb177] rounded lg:px-5"
                id="region"
                value={profile.region}
                onChange={(e) =>
                  setProfile({ ...profile, [e.target.id]: e.target.value })
                }
                placeholder="state/region"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Save Profile"
            className="w-fit mx-auto mt-2 px-5 py-2 rounded-lg cursor-pointer bg-[#201fb1aa] text-white transition-all hover:bg-[#201fb1] sm:mt-5"
          />
        </form>
        <form
          className="basis-1/3 my-5 px-5 flex flex-col justify-start md:my-0 lg:px-10"
          onSubmit={editPassword}
        >
          <h1 className="font-bold text-2xl mb-0 sm:text-3xl sm:mb-5">
            Privacy Settings
          </h1>
          <div className="flex flex-col my-2 lg:my-3">
            <label
              className="text-sm text-gray-600 mb-1"
              htmlFor="current_password"
            >
              Current Password
            </label>
            <div className="relative">
              <input
                required
                type={visibility.current ? "text" : "password"}
                className={`w-full p-2 pr-12 ${
                  errors.current_password.error
                    ? "outline-[#e22323] border-[#e2232377]"
                    : "outline-[#201fb1] border-[#201fb177]"
                } border-2 rounded lg:pl-5`}
                id="current_password"
                value={profile.current_password}
                onChange={(e) => {
                  setErrors({
                    ...errors,
                    current_password: {
                      ...errors.current_password,
                      error: false,
                    },
                  });
                  setProfile({ ...profile, [e.target.id]: e.target.value });
                }}
                placeholder="current password"
              />
              {visibility.current ? (
                <AiOutlineEyeInvisible
                  className="cursor-pointer absolute right-3 text-3xl top-1/2 translate-y-[-50%]"
                  onClick={() =>
                    setVisibility({ ...visibility, current: false })
                  }
                />
              ) : (
                <AiOutlineEye
                  className="cursor-pointer absolute right-3 text-3xl top-1/2 translate-y-[-50%]"
                  onClick={() =>
                    setVisibility({ ...visibility, current: true })
                  }
                />
              )}
            </div>
          </div>
          <div className="flex flex-col my-2 lg:my-3">
            <label
              className="text-sm text-gray-600 mb-1"
              htmlFor="new_password"
            >
              New Password
            </label>
            <div className="relative">
              <input
                required
                type="password"
                className={`w-full p-2 ${
                  errors.confirm_password.error
                    ? "outline-[#e22323] border-[#e2232377]"
                    : "outline-[#201fb1] border-[#201fb177]"
                }
                } border-2 rounded lg:px-5`}
                id="new_password"
                value={profile.new_password}
                onChange={(e) => {
                  setErrors({
                    ...errors,
                    confirm_password: {
                      ...errors.confirm_password,
                      error: false,
                    },
                  });
                  setProfile({ ...profile, [e.target.id]: e.target.value });
                }}
                placeholder="enter new password"
              />
            </div>
          </div>
          <div className="flex flex-col my-2 lg:my-3">
            <label
              className="text-sm text-gray-600 mb-1"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                required
                type="password"
                className={`w-full p-2 ${
                  errors.confirm_password.error
                    ? "outline-[#e22323] border-[#e2232377]"
                    : "outline-[#201fb1] border-[#201fb177]"
                }
                } border-2 rounded lg:px-5`}
                id="confirm_password"
                value={profile.confirm_password}
                onChange={(e) => {
                  setErrors({
                    ...errors,
                    confirm_password: {
                      ...errors.confirm_password,
                      error: false,
                    },
                  });
                  setProfile({ ...profile, [e.target.id]: e.target.value });
                }}
                placeholder="re-enter your password"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Edit Password"
            className="w-fit mx-auto mt-2 px-5 py-2 rounded-lg cursor-pointer bg-[#201fb1aa] text-white transition-all hover:bg-[#201fb1] sm:mt-5"
          />
        </form>
      </div>
    </>
  );
};

export default Profile;
