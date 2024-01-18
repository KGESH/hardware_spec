use sysinfo::System;

pub fn get_os_info() -> String {
    let os_type = System::name().unwrap();

    // Display system information:
    println!("System name:             {:?}", os_type);
    println!("System kernel version:   {:?}", System::kernel_version());
    println!("System OS version:       {:?}", System::os_version());
    println!("System host name:        {:?}", System::host_name());

    format!("System name: {}\nSystem kernel version: {}\nSystem OS version: {}\nSystem host name: {}", os_type, System::kernel_version().unwrap(), System::os_version().unwrap(), System::host_name().unwrap())
}