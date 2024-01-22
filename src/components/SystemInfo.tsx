'use client';
import { useSystemInfo } from '@/components/hooks/useSystemInfo';
import { HardwarePanel } from '@/components/HardwarePanel';
import { IComputer } from '@/types/model/computer/computerType';
import { IOperatingSystem } from '@/types/model/computer/osType';
import { ICpu } from '@/types/model/computer/cpuType';
import { IMotherboard } from '@/types/model/computer/motherboardType';
import { IGpu } from '@/types/model/computer/gpuType';
import { IRam } from '@/types/model/computer/ramType';
import { IDisk } from '@/types/model/computer/diskType';
import RedirectForm from '@/components/RedirectForm';
import { Button } from '@/components/ui/button';

function getHardwareSpecs(): IComputer {
  const os: IOperatingSystem = { name: 'Windows' };
  // Todo: get computer specs from windows api
  const cpu: ICpu = {
    type: 'CPU',
    displayName: 'Intel Core i7-8700K',
    vendorName: 'Intel',
  };
  const motherboard: IMotherboard = {
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
      displayName: '8GB DDR4',
      vendorName: 'MICRON',
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
      displayName: '512GB SSD',
      vendorName: 'WESTERN DIGITAL',
    },
    {
      type: 'DISK',
      displayName: '1TB SSD',
      vendorName: 'SAMSUMG',
    },
  ];

  return {
    os,
    cpu,
    motherboard,
    gpu,
    rams,
    disks,
  };
}

export default function SystemInfo() {
  const sampleSpecs = getHardwareSpecs();

  const {
    isPending,
    data: systemInfo,
    refetch: fetchSystemInfo,
  } = useSystemInfo();

  if (isPending) return <p>Loading...</p>;

  return (
    <div>
      {systemInfo ? (
        <HardwarePanel {...systemInfo} />
      ) : (
        <HardwarePanel {...sampleSpecs} />
      )}
      {systemInfo ? (
        <RedirectForm {...systemInfo} />
      ) : (
        <RedirectForm {...sampleSpecs} />
      )}

      <h3>Your system info</h3>
      {systemInfo && (
        <p className="text-red-500">{`${JSON.stringify(systemInfo, null, 4)}`}</p>
      )}

      <Button
        type="button"
        disabled={isPending}
        onClick={() => fetchSystemInfo()}
        className="px-4 py-2"
        variant="default"
        size="lg"
      >
        Fetch system info
      </Button>
    </div>
  );
}
