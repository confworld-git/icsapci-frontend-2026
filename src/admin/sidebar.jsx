import { IoMdHome } from "react-icons/io";
import { GrUserNew } from "react-icons/gr";
import { FaWpforms } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { GiOrganigram } from "react-icons/gi";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";

export default function AdminSidebar() {
  return (
    <>
      <div className="sidebar  sticky left-0 top-0 h-screen w-1/5 bg-white shadow-lg flex flex-col justify-between">
        <ul className="">
          <FaBars
            size={20}
            className="text-red-500 ms-auto m-3 cursor-pointer"
          />
          <li className="active">
            {/* <img src="/icons/home.png" alt="" width={20} height={20} /> */}
            <a href="#">
              <IoMdHome size={20} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#registration">
              <GrUserNew size={20} />
              <span>Registration</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaWpforms size={20} />
              <span>Submission</span>
            </a>
          </li>
          <li>
            <a href="#">
              <IoPeople size={20} />
              <span>Committee Member</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaPhoneAlt size={20} />
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="#">
              <MdFileDownload size={20} />
              <span>Downloads</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaMailBulk size={20} />
              <span>Enquiries</span>
            </a>
          </li>
          <li>
            <a href="#">
              <RiUserVoiceFill size={20} />
              <span>Speaker</span>
            </a>
          </li>
          <li>
            <a href="#">
              <GiOrganigram size={20} />
              <span>Ocm</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <RiLogoutCircleRFill size={20} />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
