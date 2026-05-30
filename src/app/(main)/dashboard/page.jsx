import DashboardClient from "@/Components/DashboardClient";
import { headers } from "next/headers";
import { auth } from "@/lib/auth"; 
import { revalidatePath } from "next/cache";


export default async function DashboardPage() {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    return <div>Please log in</div>; 
  }

  const user = session.user;
  const email = session.user.email;

  const response = await fetch(`http://localhost:5002/appointments/${email}`, {cache: 'no-store'});
  const appointments = await response.json();

  return <DashboardClient appointments={appointments} session={session} />;
}