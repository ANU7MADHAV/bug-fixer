import { z } from "zod";

// creating a schema for strings
export const formSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(3).max(100),
  tags: z.string().min(3),
});
