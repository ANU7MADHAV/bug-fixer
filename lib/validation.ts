import { z } from "zod";

// creating a schema for strings
export const formSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(50).max(1000),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
