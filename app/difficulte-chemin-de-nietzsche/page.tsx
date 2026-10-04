import type { Metadata } from "next";
import TopicPage from "../components/TopicPage";
import { getTopicMetadata } from "../content/topicPages";

export const metadata: Metadata = getTopicMetadata("difficulte");

export default function DifficulteCheminDeNietzschePage() {
  return <TopicPage topicKey="difficulte" />;
}
