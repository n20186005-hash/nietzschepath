import type { Metadata } from "next";
import TopicPage from "../components/TopicPage";
import { getTopicMetadata } from "../content/topicPages";
export const metadata: Metadata = getTopicMetadata("histoire");
export default function GuidePage() { return <TopicPage topicKey="histoire" />; }
