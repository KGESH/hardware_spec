import { invokeSystemCommand } from '@/services/tauri/invoke/invoke';

export async function getWindowsSystemInfo(): Promise<string> {
  const response = await invokeSystemCommand<string>('get_windows_system_info');

  console.log(`====================`);
  console.log(response);

  return response;
}
