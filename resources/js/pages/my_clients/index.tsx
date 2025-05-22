import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { type BreadcrumbItem,  type Client } from '@/types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Clients',
        href: '/my_clients',
    },
];

export default function My_Clients(Clients: { clients: Client[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this client?')) {
            router.delete(route('my_clients.destroy', id), {
                onSuccess: () => {
                    router.reload();
                },
            });
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="My_Clients" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <Card>
                <CardHeader>
                    <CardTitle>My Clients</CardTitle>
                    <CardDescription>
                        List of all your clients
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Client Prefix</TableHead>
                                <TableHead>Client Logo</TableHead>
                                <TableHead>Address</TableHead>
                                <TableHead>Phone Number</TableHead>
                                <TableHead>City</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Clients.clients.map((client) => (
                                <TableRow key={client.id} className="hover:bg-muted">
                                    <TableCell className="w-[100px]">{client.id}</TableCell>
                                    <TableCell>{client.name}</TableCell>
                                    <TableCell>{client.client_prefix}</TableCell>
                                    <TableCell>
                                        {client.client_logo ? (
                                            <img
                                                src={'storage/' + client.client_logo}
                                                alt={client.name}
                                                className="w-10 h-10 rounded-full"
                                            />
                                        ) : (
                                            <span>No Logo</span>
                                        )}
                                    </TableCell>
                                    <TableCell>{client.address}</TableCell>
                                    <TableCell>{client.phone_number}</TableCell>
                                    <TableCell>{client.city}</TableCell>
                                    <TableCell className="text-right">
                                        <Link
                                            href={route('my_clients.edit', client.id)}
                                            className={buttonVariants({ variant: 'secondary' })}
                                        >
                                            Edit
                                        </Link>
                                        <Button
                                            variant="destructive"
                                            className="ml-2"
                                            onClick={() => handleDelete(client.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>

                <CardFooter className="flex justify-end">
                    <Link href={route('my_clients.create')} className={buttonVariants({ variant: 'default' })}>
                        Create Client
                    </Link>
                </CardFooter>
            </Card>
            </div>
        </AppLayout>
    );
}
