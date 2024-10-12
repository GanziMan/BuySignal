import PageContainer from "@/components/PageContainer";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const data = await fetch("http://150.230.251.153:8000/items/item/")
    .then((res) => res.json()) // Parse the response as JSON
    .then((data) => {
      console.log(data); // Log the actual data
      return data; // Return the data if needed elsewhere
    })
    .catch((error) => {
      console.error("Error fetching data:", error); // Handle errors
    });

  return (
    <PageContainer
      children={
        <>
          <LoginForm />
        </>
      }
    />
  );
}
