import { db } from "../assets/app.js";

export async function getTasks() {
  return db
    .from("tasks")
    .select("*, people(name)")
    .order("priority_score", { ascending: false });
}

export async function completeTask(id) {
  return db
    .from("tasks")
    .update({ status: "done" })
    .eq("id", id);
}
