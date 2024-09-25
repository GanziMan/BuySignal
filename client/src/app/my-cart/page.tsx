import PageContainer from "@/components/PageContainer";
import MyCartForm from "./MyCartForm";
import NavBar from "@/components/NavBar";

export default function MyCartPage() {
  return (
    <>
      <PageContainer children={<MyCartForm />} />
      <NavBar />
    </>
  );
}
