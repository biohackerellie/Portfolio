import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	bash,
	tailwind,
	nodejs,
	ableton,
	git,
	ruby,
	docker,
	bb,
	cpr,
	cpp,
	BunMailLogo,
	laurel,
	docs,
	facilities,
	rds,
	app4,
	python,
	terminal,
	Site,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'TypeScript FullStack Developer',
		icon: web,
	},
	{
		title: 'Master of CI/CD',
		icon: mobile,
	},
	{
		title: 'Windows Administrator',
		icon: backend,
	},
	{
		title: 'Linux Administrator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Bash',
		icon: bash,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'Ableton',
		icon: ableton,
	},
	{
		name: 'Python',
		icon: python,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'CPP',
		icon: cpp,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'IT Systems Administrator',
		company_name: 'Laurel Public Schools',
		icon: laurel,
		iconBg: '#ffffff',
		date: '2021 - Present',
		points: [
			'Developed a full stack facility reservation application for the district using NextJS, React, and Prisma.',
			'Developed and Maintained Windows RDS on premises for students to use Windows from their chromebooks.',
			'Developed internal CI/CD pipelines for automating the deployment of web applications and services.',
			"Lead the redesign of the school district's new website, laurel.k12.mt.us, and educated all end users on the new site management system.",
			'Spearheaded the modernization of several district systems, such as Jira Cloud for IT and Facility project management.',
			'Developed automation scripts with Powershell, Python, and Bash for handling student and staff enrollment, and security badge access, web app development pipelines, and more.',
			'Managed Windows and Linux based server and network environments across all district buildings.',
		],
	},
	{
		title: 'IT Help Desk',
		company_name: 'Laurel & Billings Public Schools',
		icon: laurel,
		iconBg: '#ffffff',
		date: '2019 - 2021',
		points: [
			'Assisted end users with ticket requests ranging from hardware and software problems to general education on systems.',
			'Assisted in hardware installation for new desktop and laptop stations and cat cable pulls for new networking installations.',
			'Maintained inventory of district hardware, repair parts, and software licenses. ',
		],
	},
	{
		title: 'Lead Repair Technician / Store Manager',
		company_name: 'CPR Cell Phone Repair',
		icon: cpr,
		iconBg: '#8f0100',
		date: '2016 - 2019',
		points: [
			'Managed retail and repair employees.',
			'Performed advanced level repairs that came into our shop. I.E. Game Console repair, micro solder phone motherboard repairs ( iphone IC Chips, USB-C charging ports) and more.',
			'Maintained inventory on repair parts, device accessories, and used devices.',
		],
	},
	{
		title: 'Geek Squad Agent, Home Theater Installer',
		company_name: 'Best Buy',
		icon: bb,
		iconBg: '#00385f',
		date: '2013 - 2016',
		points: [
			'Provided Customer Service to advanced level issues in store and in home.',
			'Worked on in store device services such as data transfers and virus removals.',
			'Installed a wide range of home theater products in customers homes.',
		],
	},
];

const projects = [
	{
		name: 'Open Source Facility Reservation App',
		description:
			'Full stack application written with Typescript. Features  React server components, Supabase, and NextAuth',
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'Next JS',
				color: 'green-text-gradient',
			},
			{
				name: 'Typescript',
				color: 'pink-text-gradient',
			},
		],
		image: facilities,
		source_code_link: 'https://gitub.com/biohackerellie/OpenFacilities',
		image_link: 'https://facilities.laurel.k12.mt.us',
	},
	{
		name: 'Full Stack Music App',
		description:
			'A full stack music app built entirely with React, Express, and SQLite. As a musician, I wanted a site to keep track of my music and lyrics, so I built one! The app is customizable so any artist can use it to keep track of their music.',
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'Express',
				color: 'green-text-gradient',
			},
			{
				name: 'SQLite',
				color: 'pink-text-gradient',
			},
		],
		image: Site,
		source_code_link: 'https://github.com/biohackerellie/music-app',
		image_link: 'https://music.epklabs.com',
	},
	{
		name: 'React-Terminal',
		description:
			'Following the inspiration of others on the internet, I created a terminal emulator in React with support for nested commands! This project is still in development, but I plan to add more features and make it more customizable.',
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'Tailwind CSS',
				color: 'green-text-gradient',
			},
			{
				name: 'Vite',
				color: 'pink-text-gradient',
			},
		],
		image: terminal,
		source_code_link: 'https://github.com/biohackerellie/react-terminal',
		image_link: 'https://terminal.epklabs.com',
	},
	{
		name: 'BunMail',
		description:
			'BunMail is a simple http server running on Bun. It allows you to send emails from any app or command line with a POST request. It is written in Typescript and uses the Bun runtime to run the server. It is available as a Docker image and can be run on any machine that supports Docker.',
		tags: [
			{
				name: 'Docker',
				color: 'blue-text-gradient',
			},
			{
				name: 'Bun',
				color: 'green-text-gradient',
			},

			{
				name: 'SQL',
				color: 'purple-text-gradient',
			},
		],
		image: BunMailLogo,
		source_code_link: 'https://github.com/biohackerellie/Bunmail',
		image_link: 'https://docs.epklabs.com/BunMail',
	},
	{
		name: 'Active Directory Tools',
		description:
			'A Windows desktop app written in Powershell to give quick access to most used Active Directory functions such as password resets and Security Group assignments',
		tags: [
			{
				name: 'powershell',
				color: 'blue-text-gradient',
			},
		],
		image: app4,
		source_code_link:
			'https://github.com/biohackerellie/AppDev/tree/main/Powershell/ADUserGroups',
	},
];

export { services, technologies, experiences, projects };
