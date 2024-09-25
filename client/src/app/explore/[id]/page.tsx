import PageContainer from "@/components/PageContainer";
import ExploreSearchForm from "./ExploreSearchForm";

export async function generateMeta() {
  return {
    title: "",
  };
}

export default async function ExploreSearchPage() {
  return <PageContainer children={<ExploreSearchForm></ExploreSearchForm>} />;
}
