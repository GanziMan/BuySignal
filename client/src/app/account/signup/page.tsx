import PageContainer from "@/components/PageContainer";
import LoginForm from "./LoginForm";

export default function SignUpPage() {
  return <PageContainer children={<LoginForm></LoginForm>} />;
}
