import type { Metadata } from "next";
import TopicPage from "../components/TopicPage";
import { getTopicMetadata } from "../content/topicPages";

export const metadata: Metadata = getTopicMetadata("carte");

export default function CarteCheminDeNietzschePage() {
  return <TopicPage topicKey="carte" />;
}
