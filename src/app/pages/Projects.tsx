import React from "react";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import { useAppSelector } from "../store/hooks";
import { ProjectType } from "../shared/types";
import { Link } from "react-router-dom";

function Projects() {
	const [open, toggleDropdown] = useState(false);
	const [filter, setFilter] = useState("all");
	const handleFilter = (key: string) => {
		setFilter(key);
		toggleDropdown(false);
	};

	let projects = useAppSelector((state) => state.data.projects);
	projects = filterProjects(projects, filter);
	return (
		<div className="my-8 min-h-screen">
			<header className="flex justify-between items-center flex-row">
				<div className="relative" id="dropdown">
					<button
						className="text-primary-900 hover:bg-secondary-50 py-2 px-4 border rounded-md"
						onClick={() => {
							toggleDropdown((open) => !open);
						}}
					>
						{updateDropdownLabel(filter)}{" "}
						<FaCaretDown className="inline" />
					</button>
					<div
						className="dropdown absolute z-50 top-full mt-2 rounded-md border border-purple-200 shadow-inner bg-white py-5 px-2 min-w-max"
						hidden={!open}
					>
						<ul className="text-slate-600 [&>*]:py-2 [&>*]:px-4 hover:[&>*]:bg-slate-100 [&>*]:rounded-md [&>*]:cursor-pointer">
							<li onClick={() => handleFilter("all")}>
								All Projects
							</li>
							<li onClick={() => handleFilter("design")}>
								Design Project
							</li>
							<li onClick={() => handleFilter("dev")}>
								Software Developmen
							</li>
						</ul>
					</div>
				</div>
				<div className="">
					<button className="text-slate-900 bg-secondary-900 hover:bg-secondary-700 rounded-md py-2 px-4 text-sm">
						<TbApps className="inline mr-1 align-center text-xl" />
						<span className="hidden sm:inline">Add project</span>
					</button>
				</div>
			</header>
			<div className="my-8">
				<table className="w-full text-left [&>*]:divide-y">
					<thead>
						<tr>
							<th className="px-2">Project Name</th>
							<th>Status</th>
							<th className="hidden md:table-cell">%</th>
							<th className="hidden md:table-cell">
								Contributors
							</th>
							<th className="hidden lg:table-cell">Start Date</th>
							<th className="hidden lg:table-cell">End Date</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{projects.map((project, key) => {
							return <Project key={key} project={project} />;
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

function Project(props: { project: ProjectType }) {
	return (
		<tr className="relative text-slate-800 [&>*]:py-5 hover:bg-slate-100">
			<td className="px-2 text-slate-900">{props.project.title}</td>
			<td>
				<span className="rounded-full py-1 px-4 text-sm bg-secondary-50 capitalize">
					{props.project.status}
				</span>
			</td>
			<td className="hidden md:table-cell">
				{props.project.percentageComplete}
			</td>
			<td className="hidden md:table-cell text-center">
				{props.project.contributors.length}
			</td>
			<td className="hidden lg:table-cell">{props.project.startDate}</td>
			<td className="hidden lg:table-cell">{props.project.endDate}</td>
			<Link
				to={"/projects/" + props.project.id}
				className="absolute left-0 top-0 h-full w-full "
			></Link>
		</tr>
	);
}

export default Projects;

function filterProjects(list: ProjectType[], key: string): ProjectType[] {
	switch (key) {
		case "design":
			return list.filter((project) => {
				return project.dept === "design";
			});

		case "dev":
			return list.filter((project) => {
				return project.dept === "dev";
			});

		case "all":
			return list;

		default:
			return list;
	}
}

function updateDropdownLabel(filter: string): string {
	switch (filter) {
		case "all":
			return "All Projects";
		case "dev":
			return "Software Projects";

		case "design":
			return "Design Projects";

		default:
			return "All Projects";
	}
}
