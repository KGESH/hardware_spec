use sysinfo::{Disks};

pub fn get_disks_info() -> String {
    let mut disks = Disks::new_with_refreshed_list();

    let disks_info = disks.iter().map(|disk| {
        let name = disk.name();
        let kind = disk.kind().to_string();
        let fs = disk.file_system();
        let removable = disk.is_removable();
        let total_space = disk.total_space();
        let available_space = disk.available_space();

        format!("Disk name: {:?}\nDisk kind: {}\nDisk file system: {:?}\nDisk is removable: {}\nDisk total space: {}\nDisk available space: {}", name, kind, fs, removable, total_space, available_space)
    }).collect::<Vec<String>>().join("\n");

    disks_info
}