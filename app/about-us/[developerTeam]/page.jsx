"use client";
import { useParams } from "next/navigation";

export default function DeveloperTeam() {
  const Team = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const params = useParams();
  const id = params.developerTeam;

  let content = "";

  if (id < 4 && id > 0) {
    content = `Name : ${Team[id - 1].name}, Role : ${Team[id - 1].role}`;
  } else {
    content = "Developer Not Found";
  }
  return <h1> {content}</h1>;
}
