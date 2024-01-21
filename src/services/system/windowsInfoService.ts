import { invokeSystemCommand } from '@/services/tauri/invoke/invoke';
import { ISystemInfo } from '@/types/dto/commonDto';

export async function getWindowsSystemInfo(): Promise<string> {
  // const response = await invokeSystemCommand<string>('get_windows_system_info');
  const response = await invokeSystemCommand<ISystemInfo>('get_system_info');

  console.log(`====================`);
  console.log(response);

  try {
    return JSON.stringify(response);
  } catch (e) {
    return `stringify error: ${e}\n\n${response}`;
  }
}
