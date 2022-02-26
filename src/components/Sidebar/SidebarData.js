import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";

export const SidebarData = [
{
	title: "productos",
	path: "/about-us",
	icon: <FaIcons.FaBoxOpen />,
	// iconClosed: <RiIcons.RiArrowDownSFill />,
	// iconOpened: <RiIcons.RiArrowUpSFill />,

	// subNav: [
	// {
	// 	title: "recetas",
	// 	path: "/about-us/aim",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	// {
	// 	title: "info & tips",
	// 	path: "/about-us/vision",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	// ],
},
{
	title: "recetas",
	path: "/about-us/aim",
	icon: <FaIcons.FaReceipt />,
},
{
	title: "info & tips",
	path: "/about-us/vision",
	icon: <TiIcons.TiInfo />,
},
{
	title: "regalos",
	path: "/services",
	icon: <AiIcons.AiFillGift />,
	// iconClosed: <RiIcons.RiArrowDownSFill />,
	// iconOpened: <RiIcons.RiArrowUpSFill />,

	// subNav: [
	// {
	// 	title: "Service 1",
	// 	path: "/services/services1",
	// 	icon: <IoIcons.IoIosPaper />,
	// 	cName: "sub-nav",
	// },
	// {
	// 	title: "Service 2",
	// 	path: "/services/services2",
	// 	icon: <IoIcons.IoIosPaper />,
	// 	cName: "sub-nav",
	// },
	// {
	// 	title: "Service 3",
	// 	path: "/services/services3",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	// ],
},
{
	title: "contacto",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},
// {
// 	title: "Events",
// 	path: "/events",
// 	icon: <FaIcons.FaEnvelopeOpenText />,

// 	iconClosed: <RiIcons.RiArrowDownSFill />,
// 	iconOpened: <RiIcons.RiArrowUpSFill />,

// 	subNav: [
// 	{
// 		title: "Event 1",
// 		path: "/events/events1",
// 		icon: <IoIcons.IoIosPaper />,
// 	},
// 	{
// 		title: "Event 2",
// 		path: "/events/events2",
// 		icon: <IoIcons.IoIosPaper />,
// 	},
// 	],
// },
// {
// 	title: "Support",
// 	path: "/support",
// 	icon: <IoIcons.IoMdHelpCircle />,
// },
];
