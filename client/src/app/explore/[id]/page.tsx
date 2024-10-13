import PageContainer from "@/components/PageContainer";
import ExploreSearchForm from "./ExploreSearchForm";
import NavBar from "@/components/NavBar";

export default async function ExploreSearchPage() {
  return (
    <>
      <PageContainer children={<ExploreSearchForm />} /> <NavBar />
    </>
  );
}
