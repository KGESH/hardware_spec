use sysinfo::System;

use crate::system::dto;

pub fn get_os_info() -> dto::OS {
    let name = System::name().unwrap_or_else(|| "Unknown".to_string());
    let kernel_version = System::kernel_version().unwrap_or_else(|| "Unknown".to_string());
    let version = System::os_version().unwrap_or_else(|| "Unknown".to_string());
    let hostname = System::host_name().unwrap_or_else(|| "Unknown".to_string());

    // Display system information:
    println!("System name:             {:?}", name);
    println!("System kernel version:   {:?}", System::kernel_version());
    println!("System OS version:       {:?}", System::os_version());
    println!("System host name:        {:?}", System::host_name());

    // format!("System name: {}\nSystem kernel version: {}\nSystem OS version: {}\nSystem host name: {}", os_type, System::kernel_version().unwrap(), System::os_version().unwrap(), System::host_name().unwrap())

    dto::OS {
        name,
        kernel_version,
        version,
        hostname,
    }
}