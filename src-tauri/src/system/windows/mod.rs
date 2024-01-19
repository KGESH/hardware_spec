#![allow(non_camel_case_types)]
#![allow(non_snake_case)]

use serde::Deserialize;
use wmi::{COMLibrary, Variant, WMIConnection, WMIDateTime};
use std::collections::HashMap;

#[derive(Deserialize, Debug)]
#[serde(rename = "Win32_Processor")]
#[serde(rename_all = "PascalCase")]
struct Win32Processor {
    address_width: Option<u16>,
    architecture: Option<u16>,
    asset_tag: Option<String>,
    availability: Option<u16>,
    caption: Option<String>,
    current_clock_speed: Option<u32>,
    manufacturer: Option<String>,
    max_clock_speed: Option<u32>,
    name: Option<String>,
    number_of_cores: Option<u32>,
    number_of_logical_processors: Option<u32>,
    processor_id: Option<String>,
    status: Option<String>,
    // Add more fields here as needed
}

#[derive(Deserialize, Debug)]
#[serde(rename = "Win32_BaseBoard")]
#[serde(rename_all = "PascalCase")]
pub struct Win32BaseBoard {
    pub caption: Option<String>,
    pub config_options: Option<Vec<String>>,
    pub creation_class_name: Option<String>,
    pub depth: Option<f32>,
    pub description: Option<String>,
    pub height: Option<f32>,
    pub hosting_board: Option<bool>,
    pub hot_swappable: Option<bool>,
    pub install_date: Option<WMIDateTime>,
    pub manufacturer: Option<String>,
    pub model: Option<String>,
    pub name: Option<String>,
    pub other_identifying_info: Option<String>,
    pub part_number: Option<String>,
    pub powered_on: Option<bool>,
    pub product: Option<String>,
    pub removable: Option<bool>,
    pub replaceable: Option<bool>,
    pub requirements_description: Option<String>,
    pub requires_daughter_board: Option<bool>,
    pub serial_number: Option<String>,
    pub sku: Option<String>,
    pub slot_layout: Option<String>,
    pub special_requirements: Option<bool>,
    pub status: Option<String>,
    pub tag: Option<String>,
    pub version: Option<String>,
    pub weight: Option<f32>,
    pub width: Option<f32>,
    // ... add other fields as needed ...
}


#[derive(Deserialize, Debug)]
#[serde(rename = "Win32_PhysicalMemory")]
#[serde(rename_all = "PascalCase")]
pub struct Win32PhysicalMemory {
    // RAM size in bytes
    pub capacity: Option<u64>,
    pub manufacturer: Option<String>,
    // Often used for the model name
    pub part_number: Option<String>,
    // Speed of memory in MHz
    pub speed: Option<u32>,
    // Physical label of the socket or circuit board
    pub device_locator: Option<String>,
    // Type of physical memory
    pub memory_type: Option<u16>,
    // Form factor for the memory chip
    pub form_factor: Option<u16>,
    pub serial_number: Option<String>,
    // Unique identifier for the memory device
    pub tag: Option<String>,
    // Data width of the physical memory in bits
    pub data_width: Option<u16>,
    pub total_width: Option<u16>,  // Total width in bits, including error correction bits
    // Add more fields as needed
}


#[derive(Deserialize, Debug)]
#[serde(rename = "Win32_DiskDrive")]
#[serde(rename_all = "PascalCase")]
pub struct Win32DiskDrive {
    pub availability: Option<u16>,
    pub bytes_per_sector: Option<u32>,
    pub caption: Option<String>,
    pub device_id: Option<String>,
    pub firmware_revision: Option<String>,
    pub interface_type: Option<String>,
    pub manufacturer: Option<String>,
    pub media_type: Option<String>,
    pub model: Option<String>,
    pub partitions: Option<u32>,
    pub pnp_device_id: Option<String>,
    pub sectors_per_track: Option<u32>,
    pub serial_number: Option<String>,
    pub size: Option<u64>,
    pub status: Option<String>,
    pub total_cylinders: Option<u64>,
    pub total_heads: Option<u32>,
    pub total_sectors: Option<u64>,
    pub total_tracks: Option<u64>,
    // ... add other fields as needed ...
}

#[derive(Deserialize, Debug)]
#[serde(rename = "Win32_VideoController")]
#[serde(rename_all = "PascalCase")]
pub struct Win32VideoController {
    pub adapter_compatibility: Option<String>,
    pub adapter_dac_type: Option<String>,
    pub adapter_ram: Option<u32>,
    pub caption: Option<String>,
    pub description: Option<String>,
    pub device_id: Option<String>,
    pub driver_date: Option<WMIDateTime>,
    pub driver_version: Option<String>,
    pub installed_display_drivers: Option<String>,
    pub name: Option<String>,
    pub video_processor: Option<String>,
    // ... add other fields as needed ...
}


// Todo: remove example code
pub fn get_windows_info() -> Result<String, Box<dyn std::error::Error>> {
    let com_con = unsafe { COMLibrary::assume_initialized() };
    let wmi_con = WMIConnection::new(com_con.into())?;

    let mut processor_info = String::from("Processors:\n");
    let processors: Vec<Win32Processor> = wmi_con.query()?;
    for processor in &processors {
        let processor_detail = format!("{:#?}\n", processor);
        println!("{}", processor_detail);
        processor_info.push_str(&processor_detail);
    }

    let mut board_info = String::from("Motherboard:\n");
    let board: Vec<Win32BaseBoard> = wmi_con.query()?;
    for board in &boards {
        let board_detail = format!("{:#?}\n", board);
        println!("{}", board_detail);
        board_info.push_str(&board_detail);
    }

    let mut ram_info = String::from("Physical Memory:\n");
    let rams: Vec<Win32PhysicalMemory> = wmi_con.query()?;
    for ram in &rams {
        let ram_detail = format!("{:#?}\n", ram);
        println!("{}", ram_detail);
        ram_info.push_str(&ram_detail);
    }

    let mut video_controller_info = String::from("Video Controllers:\n");
    let video_controllers: Vec<Win32VideoController> = wmi_con.query()?;
    for video_controller in &video_controllers {
        let video_controller_detail = format!("{:#?}\n", video_controller);
        println!("{}", video_controller_detail);
        video_controller_info.push_str(&video_controller_detail);
    }

    let mut disk_drive_info = String::from("Disk Drives:\n");
    let disk_drives: Vec<Win32DiskDrive> = wmi_con.query()?;
    for disk_drive in &disk_drives {
        let disk_drive_detail = format!("{:#?}\n", disk_drive);
        println!("{}", disk_drive_detail);
        disk_drive_info.push_str(&disk_drive_detail);
    }

    let results_str = format!("{}\n{}\n{}\n{}\n{}",
                              processor_info, board_info, ram_info, video_controller_info, disk_drive_info);

    Ok(results_str)
}
