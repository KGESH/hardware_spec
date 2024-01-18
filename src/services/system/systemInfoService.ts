'use client';
import { invokeSystemCommand } from '@/services/tauri/invoke/invoke';

export async function getSystemInfo() {
  const response = await invokeSystemCommand<string>('get_system_info');
  // console.log(`[osService] getSystemInfo response: ${response}`);
  return response;
}
