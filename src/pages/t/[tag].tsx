import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Layout from "@habla/layouts/Wide";
import Metadata from "@habla/components/Metadata";
const TagFeeds = dynamic(() => import("@habla/components/TagFeeds"), {
  ssr: false,
});

export default function TagPage() {
  const router = useRouter();
  const { tag } = router.query;

  const url = `https://habla.news/t/${tag}`;
  const metadata = {
    title: `#${tag}`,
  };

  return (
    <>
      <Metadata url={url} metadata={metadata} />
      <Layout>{tag && <TagFeeds tag={tag} />}</Layout>
    </>
  );
}


