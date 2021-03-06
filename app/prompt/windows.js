'use strict';

/**
 * Windows prompt definitions
 * @return {object}
 */
var windows = module.exports = (function () {

    this.MainPrompt = [{
        type: 'list',
        name: 'VmImageName',
        message: 'Select the Box Image',
        default: 5,
        choices: [{
            name: 'ferventcoder/win7pro-x64-nocm-lite - Windows 7 Professional x64 with Service Pack 1 - Lite (with no configuration management tools)',
            value: 'ferventcoder/win7pro-x64-nocm-lite'
        },{
            name: 'opentable/win-2012r2-standard-amd64-nocm - Windows 2012 R2 Standard Edition x64 (with no configuration management tools)',
            value: 'opentable/win-2012r2-standard-amd64-nocm'
        },{
            name: 'ferventcoder/win2008r2-x64-nocm - Windows 2008 R2 x64 with Service Pack 1 (with no configuration management tools)',
            value: 'ferventcoder/win2008r2-x64-nocm'
        }]
    }];

    this.ModernSystem = [{
        type: 'list',
        name: 'VmHostSystem',
        message: 'Select your OS',
        default: 0,
        choices: [{
            name: 'Mac OS X',
            value: 'mac'
        },{
            name: 'GNU/Linux',
            value: 'linux'
        },{
            name: 'Windows',
            value: 'windows'
        }]
    },{
        type: 'input',
        name: 'VirtualBoxHome',
        message: 'Oracle WirtualBox Home',
        default: '~/VirtualBox VMs/'
    },{
        type: 'list',
        name: 'ModernIe',
        message: 'Select your OS',
        default: 0,
        choices: [{
            name: 'ModernIE 10 - Windows 8',
            value: 'ie10win8'
        },{
            name: 'ModernIE 10 - Windows 7',
            value: 'ie10win7'
        },{
            name: 'ModernIE 9 - Windows 7',
            value: 'ie9'
        },{
            name: 'ModernIE 8 - Windows XP',
            value: 'ie8'
        },{
            name: 'ModernIE 7 - Windows Vista',
            value: 'ie7'
        },{
            name: 'ModernIE 6 - Windows XP',
            value: 'ie6'
        }]
    }];

    this.VirtualBoxes = {
        Mac : {
            Win8Ie10 : {
                filename: 'IE10.Win8.ova',
                files: [{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE10-Win8.1&parts=5&filename=VMBuild_20131127/VirtualBox/IE10_Win8/Mac/',
                    file: 'IE10.Win8.For.MacVirtualBox.part1.sfx'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE10-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE10_Win7/Mac/',
                    file: 'IE10.Win8.For.MacVirtualBox.part2.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE10-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE10_Win7/Mac/',
                    file: 'IE10.Win8.For.MacVirtualBox.part3.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE10-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE10_Win7/Mac/',
                    file: 'IE10.Win8.For.MacVirtualBox.part4.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE10-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE10_Win7/Mac/',
                    file: 'IE10.Win8.For.MacVirtualBox.part5.rar'
                }]
            },
            Win7Ie10 : {
                filename: 'IE10.Win7.ova',
                files: [{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE10-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE10_Win7/Mac/',
                    file: 'IE10.Win7.For.MacVirtualBox.part1.sfx'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE10-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE10_Win7/Mac/',
                    file: 'IE10.Win7.For.MacVirtualBox.part2.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE10-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE10_Win7/Mac/',
                    file: 'IE10.Win7.For.MacVirtualBox.part3.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE10-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE10_Win7/Mac/',
                    file: 'IE10.Win7.For.MacVirtualBox.part4.rar'
                }]
            },
            Win7Ie9 : {
                filename: 'IE9.Win7.ova',
                files: [{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE9-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE9_Win7/Mac/',
                    file: 'IE9.Win7.For.MacVirtualBox.part1.sfx'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE9-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE9_Win7/Mac/',
                    file: 'IE9.Win7.For.MacVirtualBox.part2.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE9-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE9_Win7/Mac/',
                    file: 'IE9.Win7.For.MacVirtualBox.part3.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE9-Win7&parts=4&filename=VMBuild_20131127/VirtualBox/IE9_Win7/Mac/',
                    file: 'IE9.Win7.For.MacVirtualBox.part4.rar'
                }]
            },
            WinXpIe8 : {
                filename : 'IE8.WinXP.ova',
                files : [{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE8-WinXP&parts=2&filename=VMBuild_20131127/VirtualBox/IE8_WinXP/Mac/',
                    file: 'IE8.WinXP.For.MacVirtualBox.part1.sfx'

                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE8-WinXP&parts=2&filename=VMBuild_20131127/VirtualBox/IE8_WinXP/Mac/',
                    file: 'IE8.WinXP.For.MacVirtualBox.part2.rar'
                }]
            },
            WinVistaIe7 : {
                filename : 'IE7.Vista.ova',
                files : [{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE7-Vista&parts=4&filename=VMBuild_20131127/VirtualBox/IE7_Vista/Mac/',
                    file: 'IE7.Vista.For.MacVirtualBox.part1.sfx'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE7-Vista&parts=4&filename=VMBuild_20131127/VirtualBox/IE7_Vista/Mac/',
                    file: 'IE7.Vista.For.MacVirtualBox.part2.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE7-Vista&parts=4&filename=VMBuild_20131127/VirtualBox/IE7_Vista/Mac/',
                    file: 'IE7.Vista.For.MacVirtualBox.part3.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE7-Vista&parts=4&filename=VMBuild_20131127/VirtualBox/IE7_Vista/Mac/',
                    file: 'IE7.Vista.For.MacVirtualBox.part4.rar'
                }]
            },
            WinXpIe6 : {
                filename : 'IE6.WinXP.ova',
                files : [{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE6-WinXP&parts=0&filename=VMBuild_20131127/VirtualBox/IE6_WinXP/Mac/',
                    file: 'IE6.WinXP.For.MacVirtualBox.sfx'
                }]
            }
        },
        Linux : {
            Win8Ie10 : {
                filename: 'IE10.Win8.ova',
                files: [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE10_Win8/Linux/',
                    file: 'IE10.Win8.For.LinuxVirtualBox.part1.sfx'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE10_Win8/Linux/',
                    file: 'IE10.Win8.For.LinuxVirtualBox.part2.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE10_Win8/Linux/',
                    file: 'IE10.Win8.For.LinuxVirtualBox.part3.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE10_Win8/Linux/',
                    file: 'IE10.Win8.For.LinuxVirtualBox.part4.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE10_Win8/Linux/',
                    file: 'IE10.Win8.For.LinuxVirtualBox.part5.rar'
                }]
            },
            Win7Ie10 : {
                filename: 'IE10.Win7.ova',
                files: [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE10_Win7/Linux/',
                    file: 'IE10.Win7.For.LinuxVirtualBox.part1.sfx'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE10_Win7/Linux/',
                    file: 'IE10.Win7.For.LinuxVirtualBox.part2.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE10_Win7/Linux/',
                    file: 'IE10.Win7.For.LinuxVirtualBox.part3.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE10_Win7/Linux/',
                    file: 'IE10.Win7.For.LinuxVirtualBox.part4.rar'
                }]
            },
            Win7Ie9 : {
                filename: 'IE9.Win7.ova',
                files: [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE9_Win7/Linux/',
                    file: 'IE9.Win7.For.LinuxVirtualBox.part1.sfx'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE9_Win7/Linux/',
                    file: 'IE9.Win7.For.LinuxVirtualBox.part2.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE9_Win7/Linux/',
                    file: 'IE9.Win7.For.LinuxVirtualBox.part3.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE9_Win7/Linux/',
                    file: 'IE9.Win7.For.LinuxVirtualBox.part4.rar'
                }]
            },
            WinXpIe8 : {
                filename : 'IE8.WinXP.ova',
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE8_WinXP/Linux/',
                    file: 'IE8.WinXP.For.LinuxVirtualBox.part1.sfx'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE8_WinXP/Linux/',
                    file: 'IE8.WinXP.For.LinuxVirtualBox.part2.rar'
                }]
            },
            WinVistaIe7 : {
                filename : 'IE7.Vista.ova',
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Linux/',
                    file: 'IE7.Vista.For.LinuxVirtualBox.part1.sfx'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Linux/',
                    file: 'IE7.Vista.For.LinuxVirtualBox.part2.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Linux/',
                    file: 'IE7.Vista.For.LinuxVirtualBox.part3.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Linux/',
                    file: 'IE7.Vista.For.LinuxVirtualBox.part4.rar'
                }]
            },
            WinXpIe6 : {
                filename : 'IE6.WinXP.ova',
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE6_WinXP/Linux/',
                    file: 'IE6.WinXP.For.LinuxVirtualBox.sfx'
                }]
            }
        },
        Windows : {
            Win7Ie10 : {
                filename: 'IE10.Win7.ova',
                files: [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/Virtual_PC/IE10_Win7/',
                    file: 'IE10.Win7.For.WindowsVPC.part001.exe'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/Virtual_PC/IE10_Win7/',
                    file: 'IE10.Win7.For.WindowsVPC.part0002.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/Virtual_PC/IE10_Win7/',
                    file: 'IE10.Win7.For.WindowsVPC.part0003.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/Virtual_PC/IE10_Win7/',
                    file: 'IE10.Win7.For.WindowsVPC.part0004.rar'
                }]
            },
            Win7Ie9 : {
                filename: 'IE9.Win7.ova',
                files: [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/Virtual_PC/IE9_Win7/',
                    file: 'IE9.Win7.For.WindowsVPC.part0001.exe'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/Virtual_PC/IE9_Win7/',
                    file: 'IE9.Win7.For.WindowsVPC.part0002.exe'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/Virtual_PC/IE9_Win7/',
                    file: 'IE9.Win7.For.WindowsVPC.part0003.exe'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/Virtual_PC/IE9_Win7/',
                    file: 'IE9.Win7.For.WindowsVPC.part0004.exe'
                }]
            },
            WinXpIe8 : {
                filename : 'IE8.WinXP.ova',
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE8_WinXP/Windows/',
                    file: 'IE8.WinXP.For.WindowsVirtualBox.part001.exe'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE8_WinXP/Windows/',
                    file: 'IE8.WinXP.For.WindowsVirtualBox.part002.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE8_WinXP/Windows/',
                    file: 'IE8.WinXP.For.WindowsVirtualBox.part003.rar'
                }]
            },
            WinVistaIe7 : {
                filename : 'IE7.Vista.ova',
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Windows/',
                    file: 'IE7.Vista.For.WindowsVirtualBox.part001.exe'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Windows/',
                    file: 'IE7.Vista.For.WindowsVirtualBox.part002.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Windows/',
                    file: 'IE7.Vista.For.WindowsVirtualBox.part003.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Windows/',
                    file: 'IE7.Vista.For.WindowsVirtualBox.part004.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Windows/',
                    file: 'IE7.Vista.For.WindowsVirtualBox.part005.rar'
                }]
            },
            WinXpIe6 : {
                filename : 'IE6.WinXP.ova',
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE6_WinXP/Windows/',
                    file: 'IE6.WinXP.For.WindowsVirtualBox.part01.exe'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE6_WinXP/Windows/',
                    file: 'IE6.WinXP.For.WindowsVirtualBox.part02.rar'
                }]
            }
        }
    };
});