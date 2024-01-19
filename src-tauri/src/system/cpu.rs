use sysinfo::System;
use crate::system::dto::Cpu;

pub fn get_cpu_info(system: &System) -> Cpu {
    // let name = system.global_cpu_info().name();
    // let frequency = system.global_cpu_info().frequency();
    // let vendor_id = system.global_cpu_info().vendor_id();
    // let brand = system.global_cpu_info().brand();
    // let logical_core_count = system.cpus().len();

    let cpu = &system.cpus()[0];
    let cpu_name = cpu.name();
    let cpu_frequency = cpu.frequency();
    let cpu_vendor_id = cpu.vendor_id().to_string();
    let cpu_brand = cpu.brand().to_string();
    let core_count = system.physical_core_count().unwrap();


    println!("CPU name: {cpu_name}");
    println!("CPU frequency: {cpu_frequency}");
    println!("CPU vendor ID: {cpu_vendor_id}");
    println!("CPU brand: {cpu_brand}");
    println!("CPU core count: {core_count}");

    // format!("CPU name: {cpu_name}\nCPU frequency: {cpu_frequency}\nCPU vendor ID: {cpu_vendor_id}\nCPU brand: {cpu_brand}\nCPU core count: {core_count}\nCPU logical core count: {logical_core_count}")
    Cpu {
        frequency: cpu_frequency,
        vendor_id: cpu_vendor_id,
        brand: cpu_brand,
        core_count,
    }
}