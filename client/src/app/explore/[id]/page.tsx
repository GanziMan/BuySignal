import PageContainer from "@/components/PageContainer";
import ExploreSearchForm from "./ExploreSearchForm";
import NavBar from "@/components/NavBar";

export async function generateMeta() {
  return {
    title: "",
  };
}

export default async function ExploreSearchPage() {
  return (
    <>
      <PageContainer children={<ExploreSearchForm />} /> <NavBar />
    </>
  );
}
