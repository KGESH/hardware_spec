'use client';
import { ReactNode } from 'react';
export const queryClient = new QueryClient();

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export default function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
