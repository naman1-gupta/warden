import { z } from 'zod';
export const FixStatusSchema = z.enum(['not_attempted', 'attempted_failed', 'resolved']);
export const FixJudgeVerdictSchema = z.object({
    status: FixStatusSchema,
    reasoning: z.string(),
});
//# sourceMappingURL=types.js.map