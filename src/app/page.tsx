'use client';
import { HardwarePanel } from '@/components/HardwarePanel';
import { Button } from '@/components/ui/button';
import { ICpu } from '@/components/types/hardwares/cpu.types';
import { IMotherBoard } from '@/components/types/hardwares/motherboard.types';
import { IGpu } from '@/components/types/hardwares/gpu.types';
import { IRam } from '@/components/types/hardwares/ram.types';
import { IDisk } from '@/components/types/hardwares/disk.types';
import { IComputer } from '@/components/types/hardwares/computer.types';
import Link from 'next/link';
import { useSystemInfo } from '@/components/hooks/useSystemInfo';
import RedirectButton from '@/components/RedirectButton';

function getHardwareSpecs(): IComputer {
  // Todo: get hardware specs from windows api
  const cpu: ICpu = {
    type: 'CPU',
    displayName: 'Intel Core i7-8700K',
    vendorName: 'Intel',
  };
  const motherBoard: IMotherBoard = {
    type: 'M/B',
    displayName: 'MSI Z370 GAMING PRO CARBON AC',
    vendorName: 'MSI',
  };
  const gpu: IGpu = {
    type: 'GPU',
    displayName: 'NVIDIA GeForce RTX 4090',
    vendorName: 'NVIDIA',
  };
  const rams: IRam[] = [
    {
      type: 'RAM',
      displayName: '16GB DDR4',
      vendorName: 'SAMSUMG',
    },
    {
      type: 'RAM',
      displayName: '16GB DDR4',
      vendorName: 'SAMSUMG',
    },
  ];
  const disks: IDisk[] = [
    {
      type: 'DISK',
      displayName: '1TB SSD',
      vendorName: 'SAMSUMG',
    },
    {
      type: 'DISK',
      displayName: '1TB SSD',
      vendorName: 'SAMSUMG',
    },
  ];

  return {
    cpu,
    motherBoard,
    gpu,
    rams,
    disks,
  };
}

export default function Home() {
  const hardwareSpecs = getHardwareSpecs();
  const { systemInfo, fetchSystemInfo } = useSystemInfo();

  console.log(systemInfo);

  return (
    <main>
      <HardwarePanel {...hardwareSpecs} />

      <Button
        type="button"
        onClick={fetchSystemInfo}
        className="px-4 py-2"
        variant="default"
        size="lg"
      >
        Fetch system info
      </Button>
      <RedirectButton
        cpu={hardwareSpecs.cpu}
        motherBoard={hardwareSpecs.motherBoard}
        gpu={hardwareSpecs.gpu}
        rams={hardwareSpecs.rams}
        disks={hardwareSpecs.disks}
      />
      <h3>Your system info</h3>
      <p className="text-red-500">{systemInfo}</p>
    </main>
  );
}
