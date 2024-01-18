pub mod os;

use os::get_os_info;

pub fn get_system_info() {
    get_os_info();
}