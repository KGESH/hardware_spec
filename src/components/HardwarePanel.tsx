/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NEzDg5tukOh
 */
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import Link from 'next/link';
import { IHardware } from '@/types/model/computer/commonType';
import { IComputer } from '@/types/model/computer/computerType';

type Props = IComputer;

export function HardwarePanel({ cpu, motherboard, gpu, rams, disks }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="lg:hidden" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">
            Hardware Information
          </h1>
        </div>
        <div className="border shadow-sm rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Hardware</TableHead>
                <TableHead className="max-w-[150px]">Name</TableHead>
                <TableHead className="hidden md:table-cell">Vendor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/*** CPU ***/}
              {createRow(cpu)}

              {/*** Motherboard ***/}
              {motherboard && createRow(motherboard)}

              {/*** GPU ***/}
              {gpu && createRow(gpu)}

              {/*** RAM ***/}
              {rams.map((ram, idx) => createRow(ram, idx))}

              {/*** Disks ***/}
              {disks.map((disk, idx) => createRow(disk, idx))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 1-2 2H5a2 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 1 7.24 3h9.52a2 1.8 1.1L21" />
      <path d="M12 3v6" />
    </svg>
  );
}

function createRow(hardware: IHardware, key?: string | number) {
  return (
    <TableRow key={key}>
      <TableCell>{hardware.type}</TableCell>
      <TableCell className="font-medium">{hardware.displayName}</TableCell>
      <TableCell className="hidden md:table-cell">
        {hardware.vendorName}
      </TableCell>
    </TableRow>
  );
}
