mod os;
mod cpu;
mod memory;
mod disk;
pub mod dto;

use sysinfo::System;
use os::get_os_info;
use cpu::get_cpu_info;
use memory::get_memory_info;
use disk::get_disks_info;


// Todo: extract
fn get_os_type() -> dto::OsType {
    match System::name() {
        Some(os_type) => {
            match os_type.as_str() {
                "Windows" => dto::OsType::Windows,
                "Darwin" => dto::OsType::Mac,
                _ => panic!("Unsupported OS type: {}", os_type),
            }
        }
        None => panic!("Unsupported OS type: Unknown"),
    }
}

pub fn get_system_info() -> dto::SystemInfo {
    let mut sys = System::new_all();
    sys.refresh_all();

    match get_os_type() {
        dto::OsType::Windows => {
            let os_info = get_os_info();
            let cpu_info = get_cpu_info(&sys);
            let memory_info = get_memory_info(&sys);
            let disks_info = get_disks_info();

            dto::SystemInfo {
                os_type: dto::OsType::Windows.to_string(),
                os: os_info,
                cpu: cpu_info,
                rams: memory_info,
                disks: disks_info,
            }
        }
        dto::OsType::Mac => {
            let os_info = get_os_info();
            let cpu_info = get_cpu_info(&sys);
            let memory_info = get_memory_info(&sys);
            let disks_info = get_disks_info();

            dto::SystemInfo {
                os_type: dto::OsType::Mac.to_string(),
                os: os_info,
                cpu: cpu_info,
                rams: memory_info,
                disks: disks_info,
            }
        }
    }
}