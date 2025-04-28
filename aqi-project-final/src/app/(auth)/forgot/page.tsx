"use client";
import { useRouter } from "next/navigation";
import { Mail, ArrowLeft } from "lucide-react";
import "@/styles/login.css";

export default function ForgotPasswordPage() {
    const router = useRouter();

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <button className="back-button" onClick={() => router.back()}>
                    <ArrowLeft size={20} />
                </button>

                <form className="login-form">
                    <h1><span className="blue">ลืม</span>รหัสผ่าน</h1>

                    <div className="input-group">
                        <span className="icon"><Mail size={20} /></span>
                        <input type="email" placeholder="อีเมลที่ลงทะเบียน" />
                    </div>
                    <p className="hint">เราจะส่งลิงก์รีเซ็ตรหัสผ่านให้คุณทางอีเมล</p>
                    <button type="submit">ส่งลิงก์รีเซ็ตรหัสผ่าน</button>
                </form>
            </div>
        </div>
    );
}
