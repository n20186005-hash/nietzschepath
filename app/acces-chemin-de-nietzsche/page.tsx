import type { Metadata } from "next";
import TopicPage from "../components/TopicPage";
import { getTopicMetadata } from "../content/topicPages";

export const metadata: Metadata = getTopicMetadata("acces");

export default function AccesCheminDeNietzschePage() {
  return <TopicPage topicKey="acces" />;
}
