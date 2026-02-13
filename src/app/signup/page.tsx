import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SignupClient from "./SignupClient";

export default async function SignupPage() {
    const token = (await cookies()).get("token")?.value;

    if (token) redirect("/");

    return <SignupClient />;
}
