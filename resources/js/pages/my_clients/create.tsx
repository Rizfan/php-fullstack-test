import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Clients',
        href: '/my_clients/create',
    },
];

type Client_Form = {
    name: string;
    is_project: boolean;
    self_capture: boolean;
    client_prefix: string;
    client_logo: File | null;
    address: string;
    phone_number: string;
    city: string;
}

export default function CreateClient() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<Client_Form>>({
        name: '',
        is_project: false,
        self_capture: false,
        client_prefix: '',
        client_logo: null,
        address: '',
        phone_number: '',
        city: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('my_clients.store'), {
            onFinish: () => reset('name', 'is_project', 'self_capture', 'client_prefix', 'client_logo', 'address', 'phone_number', 'city'),
        });
    };

    return(
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Client" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <Card>
                    <CardContent>
                        
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Client Name</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Client name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="client_prefix">Client Prefix</Label>
                        <Input
                            id="client_prefix"
                            type="text"
                            required
                            tabIndex={2}
                            autoComplete="client_prefix"
                            value={data.client_prefix}
                            onChange={(e) => setData('client_prefix', e.target.value)}
                            disabled={processing}
                            placeholder="Client prefix"
                        />
                        <InputError message={errors.client_prefix} />
                        </div>
                    <div className="grid gap-2">
                        <Label htmlFor="client_logo">Client Logo</Label>
                        <Input
                            id="client_logo"
                            type="file"
                            required
                            tabIndex={3}
                            autoComplete="client_logo"
                            onChange={(e) => setData('client_logo', e.target.files ? e.target.files[0] : null)}
                            disabled={processing}
                        />
                        <InputError message={errors.client_logo} />
                        </div>
                    <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                            id="address"
                            type="text"
                            required
                            tabIndex={4}
                            autoComplete="address"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            disabled={processing}
                            placeholder="Client address"
                        />
                        <InputError message={errors.address} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone_number">Phone Number</Label>
                        <Input
                            id="phone_number"
                            type="text"
                            required
                            tabIndex={5}
                            autoComplete="phone_number"
                            value={data.phone_number}
                            onChange={(e) => setData('phone_number', e.target.value)}
                            disabled={processing}
                            placeholder="Client phone number"
                        />
                        <InputError message={errors.phone_number} />
                        </div>
                    <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                            id="city"
                            type="text"
                            required
                            tabIndex={6}
                            autoComplete="city"
                            value={data.city}
                            onChange={(e) => setData('city', e.target.value)}
                            disabled={processing}
                            placeholder="Client city"
                        />
                        <InputError message={errors.city} />
                        </div>
                    <div className="grid gap-2">
                        <Label htmlFor="is_project">Is Project</Label>
                        <Input
                            id="is_project"
                            type="checkbox"
                            tabIndex={7}
                            checked={data.is_project}
                            onChange={(e) => setData('is_project', e.target.checked)}
                            disabled={processing}
                        />
                        <InputError message={errors.is_project} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="self_capture">Self Capture</Label>
                        <Input
                            id="self_capture"
                            type="checkbox"
                            tabIndex={8}
                            checked={data.self_capture}
                            onChange={(e) => setData('self_capture', e.target.checked)}
                            disabled={processing}
                        />
                        <InputError message={errors.self_capture} />
                    </div>
                </div>
                <Button type="submit" disabled={processing}>
                    {processing ? <LoaderCircle className="animate-spin" /> : 'Create Client'}
                </Button>
                    </CardContent>
                </Card>
            </form>
            </div>
        </AppLayout>
    )
}