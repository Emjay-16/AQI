"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "@/styles/email-verified.css";
import { CheckCircle } from "lucide-react";

export default function EmailVerifiedPage() {
  const router = useRouter();
  const [doneLoading, setDoneLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<string>("loading");

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (token) {
      axios
        .get(`https://fastapi.airqualityindex.online/verify-email?token=${token}`)
        .then((response) => {
          if (response.data.message === "Email verified successfully.") {
            setVerificationStatus("success");
          } else {
            setVerificationStatus("failed");
          }
        })
        .catch(() => {
          setVerificationStatus("failed");
        });
    } else {
      setVerificationStatus("failed");
    }

    const timer = setTimeout(() => setDoneLoading(true), 1000);
    return () => clearTimeout(timer);
  }, [router]);

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
            {doneLoading && verificationStatus === "success" && (
              <>
                <h1><span className="blue">อีเมล</span>ยืนยันแล้ว</h1>
                <CheckCircle size={120} color="#53CDFF" style={{ marginBottom: "1rem" }} />
                <p className="hint">คุณสามารถเข้าสู่ระบบได้แล้ว</p>
                <button type="button" onClick={() => router.push("/login")}>
                  ไปหน้าเข้าสู่ระบบ
                </button>
              </>
            )}
            {doneLoading && verificationStatus === "failed" && (
              <>
                <h1><span className="blue">เกิดข้อผิดพลาด</span></h1>
                <p className="hint">ไม่สามารถยืนยันอีเมลของคุณได้ กรุณาลองใหม่อีกครั้ง</p>
                <button type="button" onClick={() => router.push("/register")}>
                  ไปหน้าลงทะเบียน
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
