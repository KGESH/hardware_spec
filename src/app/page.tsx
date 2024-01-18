import { HardwarePanel } from '@/components/HardwarePanel';

export default function Home() {
  return (
    <main>
      <HardwarePanel
        cpu={{
          type: 'CPU',
          displayName: 'Intel Core i7-8700K',
          vendorName: 'Intel',
        }}
        motherboard={{
          type: 'M/B',
          displayName: 'MSI Z370 GAMING PRO CARBON AC',
          vendorName: 'MSI',
        }}
        gpu={{
          type: 'GPU',
          displayName: 'NVIDIA GeForce RTX 4090',
          vendorName: 'NVIDIA',
        }}
        rams={[
          {
            type: 'RAM',
            displayName: '16GB DDR4',
            vendorName: 'SAMSUMG',
          },
        ]}
        disks={[
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
        ]}
      />
    </main>
  );
}
