use serde::{Serialize, Deserialize};

use crate::system::windows::{Win32Processor, Win32OperatingSystem, Win32BaseBoard, Win32PhysicalMemory, Win32VideoController, Win32DiskDrive};


#[derive(Serialize, Deserialize)]
pub struct WindowsSystem {
    pub os: Vec<Win32OperatingSystem>,
    pub cpu: Vec<Win32Processor>,
    pub motherboard: Vec<Win32BaseBoard>,
    pub gpu: Vec<Win32VideoController>,
    pub rams: Vec<Win32PhysicalMemory>,
    pub disks: Vec<Win32DiskDrive>,
}


#[derive(Serialize, Deserialize)]
pub struct OS {
    pub name: String,
    pub kernel_version: String,
    pub version: String,
    pub hostname: String,
}


#[derive(Serialize, Deserialize)]
pub struct Cpu {
    pub frequency: u64,
    pub vendor_id: String,
    pub brand: String,
    pub core_count: usize,
}


#[derive(Serialize, Deserialize)]
pub struct Ram {
    pub total_memory: u64,
    pub free_memory: u64,
    pub used_memory: u64,
}


#[derive(Serialize, Deserialize)]
pub struct Disk {
    pub name: String,
    // "SSD" or "HDD"
    pub kind: String,
    pub file_system: String,
    pub total_space: u64,
    pub removable: bool,
}
