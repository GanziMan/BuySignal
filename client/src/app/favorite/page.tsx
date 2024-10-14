import PageContainer from "@/components/PageContainer";
import FavoriteForm from "./FavoriteForm";
import NavBar from "@/components/NavBar";

export default async function FavoritePage() {
  return (
    <>
      <PageContainer>
        <FavoriteForm />
      </PageContainer>
      <NavBar />
    </>
  );
}
