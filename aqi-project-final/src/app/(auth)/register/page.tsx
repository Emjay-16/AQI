"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

import "@/styles/register.css";
import { User, Mail, Phone, Lock, ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agree) {
      alert("กรุณายืนยันข้อมูลก่อนลงทะเบียน");
      return;
    }
    if (password !== confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }
    if (!firstName.trim() || !lastName.trim() || !username.trim() || !email.trim() || !phone.trim() || !password.trim()) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }
    if (!/^\d{10}$/.test(phone.trim())) {
      alert("เบอร์โทรต้องเป็นตัวเลข 10 หลัก");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      alert("กรุณากรอกอีเมลให้ถูกต้อง");
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.post("https://fastapi.airqualityindex.online/register", {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        phone: phone.toString(),
        password: password,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;

      if (data?.status === 1) {
        alert("สมัครสมาชิกสำเร็จ! กรุณายืนยันอีเมลของคุณ");
        router.push("/email-verified");
      } else {
        alert(`สมัครสมาชิกไม่สำเร็จ: ${data?.message || "เกิดข้อผิดพลาด"}`);
      }

    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.detail?.message ||
        error?.response?.data?.message ||
        error?.message ||
        "ไม่สามารถสมัครสมาชิกได้";
      setErrorMessage(errorMessage);
      console.error("Error during registration:", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <button className="back-button" onClick={() => router.back()}>
          <ArrowLeft size={20} />
        </button>

        <form className="form-section" onSubmit={handleSubmit}>
          <h1><span className="blue">ลง</span>ทะเบียน</h1>

          <div className="input-group">
            <span className="icon"><User size={20} /></span>
            <input type="text" placeholder="ชื่อ" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input type="text" placeholder="นามสกุล" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>

          <div className="input-group">
            <span className="icon"><User size={20} /></span>
            <input type="text" placeholder="ชื่อผู้ใช้" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div className="input-group">
            <span className="icon"><Mail size={20} /></span>
            <input type="email" placeholder="อีเมล" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="input-group">
            <span className="icon"><Phone size={20} /></span>
            <input type="tel" placeholder="เบอร์โทร" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>

          <div className="input-group">
            <span className="icon"><Lock size={20} /></span>
            <input type="password" placeholder="รหัสผ่าน" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="input-group">
            <span className="icon"><Lock size={20} /></span>
            <input type="password" placeholder="ยืนยันรหัสผ่าน" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <label className="checkbox-label">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            ยืนยันว่าข้อมูลครบถ้วนและถูกต้อง
          </label>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "กำลังลงทะเบียน..." : "ลงทะเบียน"}
          </button>
        </form>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* แสดงข้อความข้อผิดพลาด */}

        <div className="image-section">
          <img src="/images/aqi.jpg" alt="register" />
        </div>
      </div>
    </div>
  );
}
