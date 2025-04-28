"use client";
import { useRouter } from "next/navigation";
import "@/styles/login.css";
import { ArrowLeft, Lock } from "lucide-react";

export default function ResetPasswordPage() {
    const router = useRouter();

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <form className="login-form">
                    <h1><span className="blue">ตั้ง</span>รหัสผ่านใหม่</h1>

                    <div className="input-group">
                        <span className="icon"><Lock size={20} /></span>
                        <input type="password" placeholder="รหัสผ่านใหม่" />
                    </div>

                    <div className="input-group">
                        <span className="icon"><Lock size={20} /></span>
                        <input type="password" placeholder="ยืนยันรหัสผ่านใหม่" />
                    </div>
                    <button type="submit">ยืนยันการตั้งรหัสผ่าน</button>
                </form>
            </div>
        </div>
    );
}
