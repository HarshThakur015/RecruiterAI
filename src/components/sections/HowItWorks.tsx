"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
    FileText,
    Calendar,
    Video,
    CheckCircle,
    XCircle,
    Clock,
    Mail,
    Search,
    ArrowDown,
    BrainCircuit,
    Sparkles,
    Zap,
    TrendingUp,
    Briefcase
} from "lucide-react";

// --- Types & Data ---

type StepColor = "blue" | "green" | "red" | "purple" | "amber" | "slate";

interface WorkflowStepData {
    icon: React.ElementType;
    label: string;
    subLabel?: string;
    color: StepColor;
    productUi?: React.ReactNode;
}

interface DecisionData {
    label: string;
    condition: string;
}

interface WorkflowData {
    title: string;
    description: string;
    impactBadge: string;
    steps: {
        input: WorkflowStepData;
        aiAction: WorkflowStepData;
        decision: DecisionData;
        outcomeYes: WorkflowStepData;
        outcomeNo: WorkflowStepData;
    };
    finalImpact: string;
}

// --- Micro UI Components (Product Simulation) ---

const ResumeThumbnail = () => (
    <div className="w-10 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-md p-1.5 flex flex-col gap-1 shadow-sm opacity-90">
        <div className="w-1/2 h-1.5 bg-slate-300 dark:bg-slate-500 rounded-full mb-1" />
        <div className="w-full h-0.5 bg-slate-200 dark:bg-slate-600 rounded-full" />
        <div className="w-full h-0.5 bg-slate-200 dark:bg-slate-600 rounded-full" />
        <div className="w-3/4 h-0.5 bg-slate-200 dark:bg-slate-600 rounded-full" />
    </div>
);

const AiScoreBadge = ({ score }: { score: number }) => (
    <div className="relative w-12 h-12 flex items-center justify-center bg-slate-900 rounded-full shadow-lg border border-slate-800">
        <svg className="w-full h-full -rotate-90 p-1">
            <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-slate-700" />
            <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="3" fill="transparent" strokeDasharray="100" strokeDashoffset={100 - score} className="text-blue-500" />
        </svg>
        <span className="absolute text-xs font-bold text-white">{score}</span>
    </div>
);

const VideoPreview = () => (
    <div className="w-12 h-9 bg-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden ring-1 ring-slate-700 shadow-lg">
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse z-10" />
        <div className="w-6 h-6 bg-slate-700 rounded-full flex items-end justify-center overflow-hidden border border-slate-600">
            <div className="w-4 h-3 bg-slate-500 rounded-t-full" />
        </div>
    </div>
);

const EmailPreview = () => (
    <div className="w-12 h-9 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center relative shadow-sm">
        <Mail className="w-5 h-5 text-emerald-500" />
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-slate-900">
            <CheckCircle className="w-2.5 h-2.5 text-white" />
        </div>
    </div>
);

// --- Layout Components ---

function VerticalConnector({ height = "h-12" }) {
    return (
        <div className={`flex flex-col items-center justify-center ${height} w-full py-1`}>
            <div className={`w-[2px] flex-1 bg-slate-200 dark:bg-slate-700 relative overflow-hidden rounded-full`}>
                <motion.div
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-full bg-blue-500 opacity-60"
                />
            </div>
            <ArrowDown className="w-4 h-4 text-slate-300 dark:text-slate-600 -mt-0.5" />
        </div>
    );
}

function WorkflowNode({ data, isSmall = false }: { data: WorkflowStepData; isSmall?: boolean }) {
    const colorStyles = {
        slate: "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400",
        blue: "bg-blue-50 dark:bg-[#0f172a] border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 shadow-[0_0_20px_-5px_rgba(59,130,246,0.2)]",
        green: "bg-emerald-50 dark:bg-[#022c22] border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400",
        red: "bg-red-50 dark:bg-[#450a0a] border-red-200 dark:border-red-900 text-red-700 dark:text-red-400",
        purple: "bg-purple-50 dark:bg-[#3b0764] border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400",
        amber: "bg-amber-50 dark:bg-[#451a03] border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400",
    };

    return (
        <div className={`relative w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${colorStyles[data.color]} ${isSmall ? 'py-3 px-3 min-w-[140px]' : ''}`}>
            {/* Icon / Product UI Area */}
            <div className="flex-shrink-0">
                {data.productUi ? (
                    data.productUi
                ) : (
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${data.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/40' : 'bg-slate-100 dark:bg-slate-800'} ${isSmall ? 'w-8 h-8 rounded-lg' : ''}`}>
                        <data.icon className={`${isSmall ? 'w-4 h-4' : 'w-6 h-6'}`} />
                    </div>
                )}
            </div>

            {/* Labels */}
            <div className="min-w-0 flex-1 overflow-hidden">
                <p className={`font-bold ${isSmall ? 'text-xs' : 'text-base'} text-slate-900 dark:text-white truncate`}>
                    {data.label}
                </p>
                {data.subLabel && (
                    <div className="flex items-center gap-1.5 mt-0.5 overflow-hidden w-full mask-linear-fade">
                        {data.color === 'blue' && <Sparkles className="w-3 h-3 text-blue-500 animate-pulse flex-shrink-0" />}

                        {/* Marquee effect for sublabels */}
                        <div className="flex-1 overflow-hidden relative group">
                            {data.subLabel.length > 20 ? (
                                <motion.div
                                    className="flex whitespace-nowrap gap-4"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatDelay: 0
                                    }}
                                >
                                    <p className={`text-[10px] opacity-90 ${isSmall ? 'text-[9px]' : ''}`}>{data.subLabel}</p>
                                    <p className={`text-[10px] opacity-90 ${isSmall ? 'text-[9px]' : ''}`}>{data.subLabel}</p>
                                    <p className={`text-[10px] opacity-90 ${isSmall ? 'text-[9px]' : ''}`}>{data.subLabel}</p>
                                    <p className={`text-[10px] opacity-90 ${isSmall ? 'text-[9px]' : ''}`}>{data.subLabel}</p>
                                </motion.div>
                            ) : (
                                <p className={`text-[10px] opacity-90 truncate ${isSmall ? 'text-[9px]' : ''}`}>
                                    {data.subLabel}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Active Indicator for AI steps */}
            {data.color === 'blue' && !isSmall && (
                <div className="absolute right-3 top-3">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                </div>
            )}
        </div>
    );
}

function DecisionDiamond({ label, condition }: DecisionData) {
    return (
        <div className="py-3 flex flex-col items-center relative z-10 w-full">
            <div className="relative z-10 group">
                {/* Glow behind */}
                <div className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rotate-45 rounded-2xl shadow-xl shadow-purple-900/40 flex items-center justify-center border-[3px] border-white dark:border-[#0F172A] ring-2 ring-purple-500/30 transition-transform hover:scale-110">
                    <div className="-rotate-45">
                        <BrainCircuit className="w-7 h-7 text-white" />
                    </div>
                </div>
            </div>

            <div className="mt-5 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-md relative z-10 max-w-[90%]">
                <p className="text-[11px] font-bold text-slate-800 dark:text-purple-200 uppercase tracking-wider text-center whitespace-nowrap">
                    {condition}
                </p>
            </div>
        </div>
    );
}

function WorkflowColumn({ workflow, delay }: { workflow: WorkflowData; delay: number }) {
    return (
        <AnimatedSection delay={delay} className="h-full">
            <div className="h-full flex flex-col bg-white dark:bg-[#0f172a] rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-black/50 group hover:-translate-y-1">

                {/* Header Badge */}
                <div className="pt-8 pb-4 px-8 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 text-[11px] font-extrabold uppercase tracking-wide mb-3">
                        <Zap className="w-3.5 h-3.5 fill-current" />
                        {workflow.impactBadge}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {workflow.title}
                    </h3>
                </div>

                {/* Vertical Workflow */}
                <div className="flex-1 p-8 flex flex-col items-center relative">
                    {/* Background Line Guide */}
                    <div className="absolute top-6 bottom-6 left-1/2 w-[2px] bg-slate-100 dark:bg-slate-800 -translate-x-1/2 -z-10" />

                    {/* Stage 1: Input */}
                    <WorkflowNode data={workflow.steps.input} />
                    <VerticalConnector />

                    {/* Stage 2: AI Action (Hero) */}
                    <WorkflowNode data={workflow.steps.aiAction} />
                    <VerticalConnector />

                    {/* Stage 3: Decision */}
                    <DecisionDiamond {...workflow.steps.decision} />

                    {/* Stage 4: Split Outcomes (Branches) */}
                    <div className="w-full grid grid-cols-2 gap-4 mt-8 relative">
                        {/* Connecting Lines for Branches */}
                        <div className="absolute -top-6 w-1/2 left-0 h-[26px] border-t-2 border-l-2 border-slate-300 dark:border-slate-700 rounded-tl-2xl pointer-events-none translate-x-[50%]" />
                        <div className="absolute -top-6 w-1/2 right-0 h-[26px] border-t-2 border-r-2 border-slate-300 dark:border-slate-700 rounded-tr-2xl pointer-events-none -translate-x-[50%]" />

                        {/* No Path */}
                        <div className="flex flex-col items-center relative pt-2">
                            <div className="absolute -top-3 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded text-[10px] font-black text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 z-10">NO</div>
                            <WorkflowNode data={workflow.steps.outcomeNo} isSmall />
                        </div>

                        {/* Yes Path */}
                        <div className="flex flex-col items-center relative pt-2">
                            <div className="absolute -top-3 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded text-[10px] font-black text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50 z-10">YES</div>
                            <WorkflowNode data={workflow.steps.outcomeYes} isSmall />
                        </div>
                    </div>
                </div>

                {/* Footer Impact */}
                <div className="bg-slate-50 dark:bg-[#020617] p-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center flex-shrink-0 border border-emerald-200 dark:border-emerald-900/50">
                            <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Business Impact</p>
                            <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">{workflow.finalImpact}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}

// --- Data Definition ---

const workflows: WorkflowData[] = [
    {
        title: "Screening Automation",
        description: "",
        impactBadge: "Reduce Screening Time by 85%",
        finalImpact: "Review 1000+ resumes in 10 mins",
        steps: {
            input: {
                icon: FileText,
                label: "App Received",
                subLabel: "Resume & Portfolio",
                color: "slate",
                productUi: <ResumeThumbnail />
            },
            aiAction: {
                icon: BrainCircuit,
                label: "AI Analysis",
                subLabel: "Contextual Matching",
                color: "blue",
                productUi: <div className="flex items-center gap-3"><div className="text-right"><p className="text-[10px] text-blue-500 dark:text-blue-300 font-medium">Match Score</p><p className="text-sm font-bold text-slate-900 dark:text-white">92/100</p></div><AiScoreBadge score={92} /></div>
            },
            decision: {
                label: "Threshold",
                condition: "Score > 80%?"
            },
            outcomeYes: {
                icon: Calendar,
                label: "Auto-Schedule",
                subLabel: "Link Sent Instantly",
                color: "green",
                productUi: <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded flex items-center justify-center border border-emerald-200 dark:border-emerald-700"><Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /></div>
            },
            outcomeNo: {
                icon: Mail,
                label: "Regret Email",
                subLabel: "After 48h delay",
                color: "slate",
            },
        }
    },
    {
        title: "Smart Interviewing",
        description: "",
        impactBadge: "100% Interview Automation",
        finalImpact: "3x Faster Time-to-Hire",
        steps: {
            input: {
                icon: Search,
                label: "Candidate Ready",
                subLabel: "Pre-screen passed",
                color: "slate",
            },
            aiAction: {
                icon: Video,
                label: "AI Interview Agent",
                subLabel: "Conducts Phase 1",
                color: "blue",
                productUi: <VideoPreview />
            },
            decision: {
                label: "Quality Check",
                condition: "Pass Verified?"
            },
            outcomeYes: {
                icon: CheckCircle,
                label: "Final Round",
                subLabel: "Manager Notified",
                color: "green",
            },
            outcomeNo: {
                icon: XCircle,
                label: "Feedback Sent",
                subLabel: "Growth Plan",
                color: "red",
            },
        }
    },
    {
        title: "Passive Re-engagement",
        description: "",
        impactBadge: "Increase Pipeline by 3.2x",
        finalImpact: "Zero Candidate Ghosting",
        steps: {
            input: {
                icon: Briefcase,
                label: "Silver Medalist",
                subLabel: "In ATS > 90 days",
                color: "slate",
            },
            aiAction: {
                icon: React.Fragment,
                label: "Pipeline Scan",
                subLabel: "Matching New Roles",
                color: "blue",
                productUi: <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" /><span className="text-xs font-bold text-blue-200">Scanning...</span></div>
            },
            decision: {
                label: "Relevance",
                condition: "Role Match?"
            },
            outcomeYes: {
                icon: Mail,
                label: "Re-activate",
                subLabel: "Invite Sent",
                color: "green",
                productUi: <EmailPreview />
            },
            outcomeNo: {
                icon: Clock,
                label: "Snooze",
                subLabel: "Check in 30d",
                color: "amber",
            },
        }
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
            {/* Simple Background Decor */}
            <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
                <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <Container className="max-w-[1400px] relative z-10">
                <AnimatedSection className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 shadow-sm mb-6">
                        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-bold text-blue-900 dark:text-blue-200 tracking-wide">
                            INTELLIGENT WORKFLOWS
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        Hiring on{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Autopilot
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        Replace manual busywork with intelligent agents that screen, schedule, and engage candidates 24/7.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    {workflows.map((workflow, index) => (
                        <WorkflowColumn
                            key={index}
                            workflow={workflow}
                            delay={index * 0.15}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
