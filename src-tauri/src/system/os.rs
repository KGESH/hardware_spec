use sysinfo::{System};

pub fn get_os_info() -> String {
    let mut sys = System::new_all();
    sys.refresh_all();

    // Display system information:
    println!("System name:             {:?}", System::name());
    println!("System kernel version:   {:?}", System::kernel_version());
    println!("System OS version:       {:?}", System::os_version());
    println!("System host name:        {:?}", System::host_name());

    System::name().unwrap()
}