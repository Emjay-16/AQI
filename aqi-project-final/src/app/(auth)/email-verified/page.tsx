"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/email-verified.css";
import { CheckCircle } from "lucide-react";

export default function EmailVerifiedPage() {
  const router = useRouter();
  const [doneLoading, setDoneLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDoneLoading(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="email-verified-wrapper">
      <div className="email-verified-card">
        <div className="email-verified-form">

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            {!doneLoading && (
              <>
                <p className="hint">กำลังยืนยันอีเมล...</p>
                <div className="spinner-only" />
              </>
            )}
            {doneLoading && (
              <>
                <h1><span className="blue">อีเมล</span>ยืนยันแล้ว</h1>
                <CheckCircle size={120} color="#53CDFF" style={{ marginBottom: "1rem" }} />
                <p className="hint">คุณสามารถเข้าสู่ระบบได้แล้ว</p>
                <button type="button" onClick={() => router.push("/login")}>
                  ไปหน้าเข้าสู่ระบบ
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}