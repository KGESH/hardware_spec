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
#[serde(rename = "Win32_PhysicalMemory")]
#[serde(rename_all = "PascalCase")]
pub struct Win32PhysicalMemory {
    pub capacity: Option<u64>,
    // RAM size in bytes
    pub manufacturer: Option<String>,
    pub part_number: Option<String>,  // Often used for the model name
    // ... include other fields if needed ...
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
    // let com_connection = unsafe { COMLibrary::assume_initialized() };
    // let wmi_connection = WMIConnection::new(com_connection.into()).expect("Failed to connect to WMI");

    // let results = wmi_con.raw_query("SELECT * FROM Win32_OperatingSystem");
    // let results: Vec<HashMap<String, Variant>> = wmi_connection.raw_query("SELECT * FROM Win32_Processor").unwrap();
    // let result = wmi_connection.query().unwrap();

    let com_con = COMLibrary::new()?;
    let wmi_con = WMIConnection::new(com_con)?;
    let results: Vec<Win32Processor> = wmi_con.query()?;

    for processor in results {
        println!("{:#?}", processor);
    }

    let results_str = format!("{:#?}", results);

    // for os in results {
    //     println!("{:#?}", os);
    // }

    // #[derive(Deserialize, Debug)]
    // struct Win32_OperatingSystem {
    //     Caption: String,
    //     Name: String,
    //     CurrentTimeZone: i16,
    //     Debug: bool,
    //     EncryptionLevel: u32,
    //     ForegroundApplicationBoost: u8,
    //     LastBootUpTime: WMIDateTime,
    // }

    // let results: Vec<Win32_OperatingSystem> = wmi_con.query()?;

    // add results string and return
    // for os in results {
    //     println!("{:#?}", os);
    // }

    // let os_info_str = format!("Windows System Information: {:#?}", results);

    Ok(results_str)
}