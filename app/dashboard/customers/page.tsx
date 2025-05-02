import { fetchFilteredCustomers, fetchInvoicesPages } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export default async function Page(props: { searchParams?: Promise<{ query?: string }> }) {
      const searchParams = await props.searchParams
      const query = searchParams?.query || ''
      const customers = await fetchFilteredCustomers(query)

    return (
        <main>
            <CustomersTable customers={customers} />
        </main>
    )
}