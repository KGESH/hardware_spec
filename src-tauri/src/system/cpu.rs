use sysinfo::System;

pub fn get_cpu_info(system: &System) -> String {
    let name = system.global_cpu_info().name();
    let frequency = system.global_cpu_info().frequency();
    let vendor_id = system.global_cpu_info().vendor_id();
    let brand = system.global_cpu_info().brand();
    let core_count = system.physical_core_count().unwrap();
    let logical_core_count = system.cpus().len();

    let cpu = &system.cpus()[0];
    let cpu_name = cpu.name();
    let cpu_frequency = cpu.frequency();
    let cpu_vendor_id = cpu.vendor_id();
    let cpu_brand = cpu.brand();


    println!("CPU name: {}", name);
    println!("CPU frequency: {}", frequency);
    println!("CPU vendor ID: {}", vendor_id);
    println!("CPU brand: {}", brand);
    println!("CPU core count: {}", core_count);

    format!("CPU name: {cpu_name}\nCPU frequency: {cpu_frequency}\nCPU vendor ID: {cpu_vendor_id}\nCPU brand: {cpu_brand}\nCPU core count: {core_count}\nCPU logical core count: {logical_core_count}")
}