import { db, ChatbotsTable } from "astro:db";
import { getNanoId } from "../src/lib/nanoid";

export default async function () {
  await db.insert(ChatbotsTable).values([
    {
      id: getNanoId(),
      title: "New Chatbot",
      subtitle: "New Chatbot Description",
      steps: [],
    },
  ]);
}
