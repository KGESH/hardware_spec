use serde::{Serialize, Deserialize};


#[derive(Serialize, Deserialize)]
pub struct MacSystem {
    pub os: OS,
    pub cpu: Cpu,
    pub rams: Vec<Ram>,
    pub disks: Vec<Disk>,
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
