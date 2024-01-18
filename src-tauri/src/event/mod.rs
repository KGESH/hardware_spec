use crate::system;

#[tauri::command]
pub fn get_system_info() -> String {
    system::get_system_info()
}