import { db } from "../assets/app.js";

export async function getRiskPeople() {
  return db
    .from("people_priority_view")
    .select("*")
    .order("priority_score", { ascending: false });
}
