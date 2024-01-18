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
import { useOsInfo } from '@/components/hooks/useOsInfo';

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
  const { osInfo, fetchOsInfo } = useOsInfo();

  return (
    <main>
      <HardwarePanel {...hardwareSpecs} />

      {/*Todo: Replace url*/}
      <Link
        href="https://www.naver.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          type="button"
          onClick={fetchOsInfo}
          className="px-4 py-2"
          variant="default"
        >
          Send
        </Button>
        <Button type="button" className="px-4 py-2" variant="secondary">
          Your OS {osInfo}
        </Button>
      </Link>
    </main>
  );
}
