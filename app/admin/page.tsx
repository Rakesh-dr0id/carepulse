import { DataTable } from '@/components/DataTable';
import Stat from '@/components/Stat';
import { columns } from '@/components/table/columns';
import { getRecentAppointmentList } from '@/lib/actions/appointment.actions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Admin = async () => {
  // const data = await getData();

  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href={'/'} className="cursor-pointer">
          <Image
            src={'/assets/icons/logo-full.svg'}
            alt="logo"
            height={32}
            width={162}
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointment
          </p>
        </section>

        <section className="admin-stat">
          <Stat
            type="appointments"
            count={appointments?.scheduledCount}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <Stat
            type="pending"
            count={appointments?.pendingCount}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <Stat
            type="cancelled"
            count={appointments?.cancelledCount}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable data={appointments.documents} columns={columns} />
        {/* <DataTable data={data} columns={columns} /> */}
      </main>
    </div>
  );
};

export default Admin;
