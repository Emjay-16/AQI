// src/app/components/Sidebar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import "@/styles/sidebar.css";

// import icons from lucide
import {
  LayoutDashboard,
  Plus,
  BarChart2,
  Table,
  Bell,
  Monitor,
  Users,
  Settings,
  Cpu,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar-bg">
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="icon-container">
          <div className="icon-menu">
            <div className="logo" onClick={() => setOpen(!open)}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJ3tUsYgZJmEfmmsGRoCS2l9IchgXfYWz1Q&s"
                alt="Logo"
                className="logo-image"
              />
              <span>RMUTI AQI</span>
            </div>

            <Link href="/dashboard" className="menu-item">
              <LayoutDashboard className="menu-items" color="#2196F3" strokeWidth={2.5} />
              <span>แดชบอร์ด</span>
            </Link>
            <Link href="/add-node" className="menu-item">
              <Plus className="menu-items" color="#5D7285" strokeWidth={2.5} />
              <span>เพิ่มโหนด</span>
            </Link>
            <Link href="/graph" className="menu-item">
              <BarChart2 className="menu-items" color="#5D7285" strokeWidth={2.5} />
              <span>ข้อมูลแบบกราฟ</span>
            </Link>
            <Link href="/table" className="menu-item">
              <Table className="menu-items" color="#5D7285" strokeWidth={2.5} />
              <span>ข้อมูลแบบตาราง</span>
            </Link>
            <Link href="/notifications" className="menu-item">
              <Bell className="menu-items" color="#5D7285" strokeWidth={2.5} />
              <span>ระบบแจ้งเตือน</span>
            </Link>
            <Link href="/display" className="menu-item">
              <Monitor className="menu-items" color="#5D7285" strokeWidth={2.5} />
              <span>โหมดแสดงผล</span>
            </Link>
            <Link href="/users" className="menu-item">
              <Users className="menu-items" color="#5D7285" strokeWidth={2.5} />
              <span>จัดการผู้ใช้</span>
            </Link>
            <Link href="/settings" className="menu-item">
              <Settings className="menu-items" color="#5D7285" strokeWidth={2.5} />
              <span>ตั้งค่าบัญชี</span>
            </Link>
            <Link href="/devices" className="menu-item">
              <Cpu className="menu-items" color="#5D7285" strokeWidth={2.5} />
              <span>จัดการอุปกรณ์</span>
            </Link>
          </div>

          <div className="footer-menu">
            <Link href="/logout" className="menu-item logout-button">
              <LogOut className="menu-items" color="#FFFFFFFF" strokeWidth={2.5}/>
              <span>ออกจากระบบ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
