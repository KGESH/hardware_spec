use crate::system::common::{get_os_type, SystemInfo};

pub mod common;
#[cfg(target_os = "windows")]
mod windows;
#[cfg(target_os = "macos")]
mod mac;


#[cfg(target_os = "windows")]
pub fn get_system_info() -> SystemInfo {
    SystemInfo {
        os_type: get_os_type(),
        system: windows::get_windows_system_info().unwrap(),
    }
}


#[cfg(target_os = "macos")]
pub fn get_system_info() -> SystemInfo {
    SystemInfo {
        os_type: get_os_type(),
        system: mac::get_mac_system_info(),
    }
}
