import PageContainer from "@/components/PageContainer";
import MainForm from "./MainForm";
import NavBar from "@/components/NavBar";

export default function MainPage() {
  return (
    <>
      <PageContainer>
        <MainForm />
      </PageContainer>
      <NavBar />
    </>
  );
}
