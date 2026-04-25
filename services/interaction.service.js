import { db } from "../assets/app.js";

export async function getTimeline() {
  return db
    .from("interactions")
    .select("*")
    .order("interaction_date", { ascending: false })
    .limit(50);
}
