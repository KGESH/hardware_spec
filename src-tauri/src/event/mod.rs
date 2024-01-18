use crate::system::os::get_os_info;

#[tauri::command]
pub fn get_system_info() -> String {
    get_os_info()
}