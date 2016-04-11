var columns = [];
for (var i = 0; i < 20; i++) {
	if (i == 0) {
		columns.push({
			field: 'field_' + i,
			title: '产品名称',
			sortable: false
		});
	} else {
		columns.push({
			field: 'field_' + i,
			title: '华擎B85M Pro_' + i,
			sortable: false
		});
	}
};

var rowdata = [],
	ptypes = [],$index=0;

function addRow(title, colcount, $val) {
	var row = {};
	for (var i = 0; i < colcount; i++) {
		if (i == 0) {
			row['field_' + i] = title;
		} else {
			if ($val != '') {
				row['field_' + i] = $val + i;
			} else {
				row['field_' + i] = '&nbsp;';
			}

		}
	}
	if ($val == '') ptypes.push($index+1);
	$index= $index+1;
	rowdata.push(row);
}

addRow('主板芯片', 20, '');
addRow('集成芯片', 20, '声卡/网卡');
addRow('芯片厂商', 20, 'Intel');
addRow('主芯片组', 20, '采用Intel B85芯片组');
addRow('处理器规格', 20, '');
addRow('CPU平台', 20, 'Intel');
addRow('CPU类型', 20, 'Core i7/i5/i3/Pentium/Celeron');
addRow('CPU插槽', 20, 'LGA 1150');
addRow('内存规格', 20, '');
addRow('内存类型', 20, 'DDR3');
addRow('扩展插槽', 20, '');
addRow('显卡插槽', 20, 'PCI-E 3.0标准');
addRow('PCI-E插槽', 20, '2×PCI-E X16显卡插槽');
addRow('PCI插槽', 20, '2×PCI插槽');
addRow('SATA接口', 20, '2×SATA II接口；4×SATA III接口');
addRow('I/O接口', 20, '');
addRow('USB接口', 20, '8×USB2.0接口（4内置+4背板）；4×USB3.0接口（2内置+2背板）');
addRow('HDMI接口', 20, '1×HDMI接口');
addRow('外接端口', 20, '1×DVI接口1×VGA接口');
addRow('PS/2接口', 20, 'PS/2键盘接口');
addRow('其它接口', 20, '1×RJ45网络接口1×光纤接口 音频接口');
addRow('板型', 20, '');
addRow('主板板型', 20, 'Micro ATX板型');
addRow('外形尺寸', 20, '24.4×21.3cm');
addRow('软体管理', 20, '');
addRow('BIOS性能', 20, '支持图形界面的多国语64Mb AMI UEFI Legal BIOS符合ACPI 1.1，支持唤醒与自动开机（Wake Up Events）支持SMBIOS 2.3.1CPU，DRAM，PCH 1.05V，PCH 1.5V电压多功能调节器');
addRow('电源管理', 20, '电涌全保护');
addRow('其它参数', 20, '');
addRow('多显卡技术', 20, '支持AMD CrossFireX混合交火技术');
addRow('音频特效', 20, '不支持HIFI');
addRow('电源插口', 20, '一个8针，一个24针电源接口');
addRow('供电模式', 20, '四相');
addRow('硬件监控', 20, 'CPU/机箱温度检测CPU/机箱/电源风扇转速计 CPU/机箱静音风扇（可根据处理器温度自动调节机箱风扇转速） CPU/机箱风扇多速控制 机箱开启侦测 电压实时监控：+12V，+5V，+3.3V，核心电压');
addRow('其它特点', 20, '支持Microsoft Windows 8/8 64-bit/7/7 64-bit操作系统');
addRow('超频功能', 20, '支持');
addRow('其它性能', 20, '无线：支持802.11 a/b/g/nWi-Fi标准；支持2.4/5GHz无线双频；支持蓝牙4.0');
addRow('包装清单', 20, '华擎主板 x1快速安装指南 x1 支持光盘 x1 I/O挡板 x1 SATA数据线 x2');
addRow('可选配件', 20, 'OC Panel screw pack x1');
addRow('保修信息', 20, '');
addRow('保修政策', 20, '全国联保，享受三包服务');
addRow('质保时间', 20, '3年');