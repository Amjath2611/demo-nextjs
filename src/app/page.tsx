import 'tailwindcss/tailwind.css'

import DataTable from '@/shared/components/ui/dataTable';
import { PetApi } from '@/api/index';


async function getPets() {
  try {
    const status: ("available" | "pending" | "sold")[] = ["available"];
    const Pet:any = new PetApi(); // Ensure that PetApi is properly imported
    const res =  await Pet.findPetsByStatus(status);
    return res.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error; 
  }
}

export default async function Home() {

  const pets = await getPets()

  
 return (
    <main className="flex flex-col align-middle justify-between p-5">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Pets Store </span>Admin</h1>
      <DataTable data={pets} isFilter={true}/>
    </main>
  );
}
