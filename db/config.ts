import { column, defineDb, defineTable, NOW } from "astro:db";

const ChatbotsTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    subtitle: column.text(),
    steps: column.json({ default: {} }),
    created: column.date({ default: NOW }),
    updated: column.date({ default: NOW }),
    deleted: column.date({ optional: true }),
  },
});

export default defineDb({
  tables: {
    ChatbotsTable,
  },
});
