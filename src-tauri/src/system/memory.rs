use sysinfo::{System};

use crate::system::dto;

pub fn get_memory_info(system: &System) -> Vec<dto::Ram> {
    let total_memory = system.total_memory();
    let free_memory = system.free_memory();
    let used_memory = system.used_memory();
    // let formatted_total_memory = format_memory_size(34359738360);

    println!("Total memory: {}", total_memory);
    println!("Free memory: {}", free_memory);
    println!("Used memory: {}", used_memory);

    // format!("Formatted total memory: {formatted_total_memory}\nTotal memory: {total_memory}\nFree memory: {free_memory}\nUsed memory: {used_memory}\nTotal swap: {total_swap}\nFree swap: {free_swap}\nUsed swap: {used_swap}")
    vec![dto::Ram {
        total_memory,
        free_memory,
        used_memory,
    }]
}

// fn format_memory_size(bytes: u64) -> String {
//     let kilobyte: u64 = 1024;
//     let megabyte = kilobyte * 1024;
//     let gigabyte = megabyte * 1024;
//     let terabyte = gigabyte * 1024;
//
//     if bytes >= terabyte {
//         format!("{:.2}TB", bytes as f64 / terabyte as f64)
//     } else if bytes >= gigabyte {
//         format!("{:.2}GB", bytes as f64 / gigabyte as f64)
//     } else if bytes >= megabyte {
//         format!("{:.2}MB", bytes as f64 / megabyte as f64)
//     } else if bytes >= kilobyte {
//         format!("{:.2}KB", bytes as f64 / kilobyte as f64)
//     } else {
//         format!("{}B", bytes)
//     }
// }