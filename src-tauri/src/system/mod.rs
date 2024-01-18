mod os;
mod cpu;
mod memory;
mod disk;

use sysinfo::System;
use os::get_os_info;
use cpu::get_cpu_info;
use memory::get_memory_info;
use disk::get_disks_info;

pub fn get_system_info() -> String {
    let mut sys = System::new_all();
    sys.refresh_all();


    let os_info = get_os_info();
    let cpu_info = get_cpu_info(&sys);
    let memory_info = get_memory_info(&sys);
    let disks_info = get_disks_info();

    format!("{os_info}\n\n\n{cpu_info}\n\n\n{memory_info}\n\n\n{disks_info}")
}