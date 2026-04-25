import { db } from "../assets/app.js";

export async function getPeople() {
  return db
    .from("people")
    .select("*")
    .order("created_at", { ascending: false });
}

export async function getPerson(id) {
  return db
    .from("people")
    .select("*")
    .eq("id", id)
    .single();
}
