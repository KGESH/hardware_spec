#![allow(non_camel_case_types)]
#![allow(non_snake_case)]

use serde::Deserialize;
use wmi::{COMLibrary, Variant, WMIConnection, WMIDateTime};
use std::collections::HashMap;


// Todo: remove example code
pub fn get_windows_info() -> String {
    let com_connection = unsafe {COMLibrary::assume_initialized()};
    let wmi_connection = WMIConnection::new(com_connection.into()).expect("Failed to connect to WMI");

    // let results = wmi_con.raw_query("SELECT * FROM Win32_OperatingSystem");
    let result: Vec<Win32_ComputerSystemProduct> = wmi_connection.query().unwrap();


    let results_str = format!("{:?}", results);

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

    results_str
}