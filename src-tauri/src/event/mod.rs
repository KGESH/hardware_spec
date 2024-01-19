use crate::system;

#[tauri::command]
pub fn get_system_info() -> system::dto::SystemInfo {
    system::get_system_info()
}