use sysinfo::System;


mod cpu;
mod disk;
mod memory;
mod os;
pub mod dto;


pub fn get_mac_system_info() -> dto::MacSystem {
    let mut sys = System::new_all();
    sys.refresh_all();

    let os_info = os::get_os_info();
    let cpu_info = cpu::get_cpu_info(&sys);
    let memory_info = memory::get_memory_info(&sys);
    let disks_info = disk::get_disks_info();

    dto::MacSystem {
        os: os_info,
        cpu: cpu_info,
        rams: memory_info,
        disks: disks_info,
    }
}