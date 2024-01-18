'use client';
import { invokeSystemCommand } from '@/services/tauri/invoke/invoke';

export async function getOsInfo() {
  const response = await invokeSystemCommand<string>('get_system_info');
  console.log(`[osService] getOsInfo response: ${response}`);
  return response;
}
