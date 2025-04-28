"use client";
import { useRouter } from "next/navigation";
import "@/styles/addnode.css";
import { ArrowLeft } from "lucide-react";

export default function AddNodePage() {
  const router = useRouter();

  return (
    <div className="addnode-wrapper">
      <div className="addnode-card">
        <button className="back-button" onClick={() => router.back()}>
          <ArrowLeft size={20} />
        </button>

        <form className="addnode-form">
          <h1><span className="blue">เพิ่ม</span>โหนด</h1>

          <div className="input-group">
            <label>ชื่อโหนด</label>
            <input type="text" placeholder="เช่น โหนดอาคารวิศวกรรม" />
          </div>

          <div className="input-group">
            <label>รหัสโหนด (Node ID)</label>
            <input type="text" placeholder="เช่น node001" />
          </div>

          <div className="input-group">
            <label>ตำแหน่ง/สถานที่ติดตั้ง</label>
            <textarea placeholder="เช่น อาคารวิศวกรรม ชั้น 3" />
          </div>

          <div className="input-group">
            <label>สถานะ</label>
            <select>
              <option>ใช้งานอยู่</option>
              <option>ปิดใช้งาน</option>
            </select>
          </div>

          <button type="submit">เพิ่มโหนด</button>
        </form>
      </div>
    </div>
  );
}
