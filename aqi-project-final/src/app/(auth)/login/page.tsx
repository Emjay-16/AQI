"use client";

import { useRouter } from "next/navigation";
import "@/styles/login.css";
import { ArrowLeft, User, Lock } from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("https://fastapi.airqualityindex.online/eng.rmuti/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username_or_email: usernameOrEmail,
                    password: password,
                }),
            });

            const data = await res.json();

            if (res.ok && data.status === 1) {
                toast.success("เข้าสู่ระบบสำเร็จ!");
                setTimeout(() => {
                    router.push("/dashboard");
                }, 1000);
            } else {
                // เช็ค message ว่าผิดอะไร
                if (data.message === "User not found") {
                    toast.error("ไม่พบผู้ใช้งานในระบบ");
                } else if (data.message === "Invalid password") {
                    toast.error("รหัสผ่านไม่ถูกต้อง");
                } else {
                    toast.error(data.message || "เข้าสู่ระบบล้มเหลว");
                }
            }
        } catch (error) {
            toast.error("เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์");
        }
    };
    return (
        <div className="login-wrapper">
            <Toaster position="top-right" />
            <div className="login-card">
                <button className="back-button" onClick={() => router.back()}>
                    <ArrowLeft size={20} />
                </button>

                <form className="login-form" onSubmit={handleLogin}>
                    <h1><span className="blue">เข้าสู่</span>ระบบ</h1>

                    <div className="input-group">
                        <span className="icon"><User size={20} /></span>
                        <input
                            type="text"
                            placeholder="ชื่อผู้ใช้หรืออีเมล"
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <span className="icon"><Lock size={20} /></span>
                        <input
                            type="password"
                            placeholder="รหัสผ่าน"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="login-links">
                        <a href="/register">ยังไม่มีบัญชี</a>
                        <a href="/forgot" className="right">ลืมรหัสผ่าน</a>
                    </div>

                    <button type="submit">เข้าสู่ระบบ</button>
                </form>
            </div>
        </div>
    );
}
