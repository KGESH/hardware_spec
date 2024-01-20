use sysinfo::{Disks};
use crate::system::mac::dto::Disk;


pub fn get_disks_info() -> Vec<Disk> {
    let disks = Disks::new_with_refreshed_list();

    let disks_info = disks.iter().map(|disk| {
        let name = disk.name().to_str().unwrap().to_string();
        let kind = disk.kind().to_string();
        let file_system = disk.file_system().to_str().unwrap().to_string();
        let total_space = disk.total_space();
        let removable = disk.is_removable();

        Disk {
            name,
            kind,
            file_system,
            total_space,
            removable,
        }
    }).collect::<Vec<Disk>>();

    disks_info
}