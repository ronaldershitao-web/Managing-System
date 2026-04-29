import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

export const db = createClient(
  "https://qnxiuojefowyzeanfhdz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFueGl1b2plZm93eXplYW5maGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMjY0NjEsImV4cCI6MjA5MTkwMjQ2MX0.JoSrVaT4KewYWoESPkjG5_W65nKdLYdcX7BZeaYK_FM"
);
