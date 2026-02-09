import { z } from 'zod';
import type { UsageStats } from '../../types/index.js';
import type { ExistingComment } from '../../output/dedup.js';
export declare const FixStatusSchema: z.ZodEnum<{
    resolved: "resolved";
    not_attempted: "not_attempted";
    attempted_failed: "attempted_failed";
}>;
export type FixStatus = z.infer<typeof FixStatusSchema>;
export declare const FixJudgeVerdictSchema: z.ZodObject<{
    status: z.ZodEnum<{
        resolved: "resolved";
        not_attempted: "not_attempted";
        attempted_failed: "attempted_failed";
    }>;
    reasoning: z.ZodString;
}, z.core.$strip>;
export type FixJudgeVerdict = z.infer<typeof FixJudgeVerdictSchema>;
export interface FixJudgeResult {
    verdict: FixJudgeVerdict;
    usage: UsageStats;
    usedFallback: boolean;
}
/** Per-comment evaluation detail for structured reporting. */
export interface FixEvaluation {
    findingId?: string;
    path: string;
    line: number;
    title: string;
    verdict: FixStatus | 're_detected';
    reasoning?: string;
    durationMs: number;
    usage: UsageStats;
    usedFallback: boolean;
}
export interface EvaluateFixAttemptsResult {
    /** Comments where fix was successful and should be resolved */
    toResolve: ExistingComment[];
    /** Comments where fix failed and need a reply */
    toReply: {
        comment: ExistingComment;
        replyBody: string;
        commitSha: string;
    }[];
    /** Comments not evaluated (no patches, or over limit) */
    skipped: number;
    /** Comments sent to LLM for evaluation */
    evaluated: number;
    /** Evaluations that failed and used fallback (API errors, invalid responses) */
    failedEvaluations: number;
    /** Accumulated usage stats from all fix evaluations */
    usage: UsageStats;
    /** Per-comment evaluation details for logging/reporting */
    evaluations: FixEvaluation[];
}
export interface EvaluateFixAttemptsContext {
    owner: string;
    repo: string;
    baseSha: string;
    headSha: string;
}
//# sourceMappingURL=types.d.ts.map