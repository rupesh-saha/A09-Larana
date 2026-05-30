import DashboardClient from "@/Components/DashboardClient";
import { headers } from "next/headers";
import { auth } from "@/lib/auth"; 
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Dashboard - Larana",
  description: "Manage your appointments and profile on Larana.",
};


export default async function DashboardPage() {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    return <div>Please log in</div>; 
  }

  const user = session.user;
  const email = session.user.email;

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/appointments/${email}`, {cache: 'no-store'});
  const appointments = await response.json();

  return <DashboardClient appointments={appointments} session={session} />;
}