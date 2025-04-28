"use client";
import { useState } from "react";
import "@/styles/users.css";

export default function UsersPage() {
    const users = new Array(40).fill(0).map((_, i) => ({
        username: `User${(i + 1).toString().padStart(2, "0")}`,
        name: "จริงใจ บันดาว",
        phone: "099-234-4123",
        email: `user${i + 1}@gmail.com`,
        role: i === 0 ? "Admin" : "Node Owner",
    }));

    const itemsPerPage = 13;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(users.length / itemsPerPage);
    const paginatedUsers = users.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div className="user-management">
            <h1>การจัดการผู้ใช้งาน</h1>
            <p>ชื่อ เบอร์โทร อีเมล ของผู้ใช้งานทุกคน</p>

            <div className="table-scroll">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>ชื่อผู้ใช้</th>
                            <th>ชื่อ-นามสกุล</th>
                            <th>เบอร์โทร</th>
                            <th>อีเมล</th>
                            <th>สิทธิ์</th>
                            <th className="text-right">จัดการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.map((u, i) => (
                            <tr key={i}>
                                <td>{u.username}</td>
                                <td>{u.name}</td>
                                <td>{u.phone}</td>
                                <td>{u.email}</td>
                                <td>
                                    <span className={`role-badge ${u.role === "Admin" ? "role-admin" : "role-owner"}`}>
                                        {u.role}
                                    </span>
                                </td>
                                <td className="text-right">
                                    <button className="manage-btn">⋯</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="pagination-bar">
                <span>
                    แสดงรายการที่{" "}
                    <strong>{(currentPage - 1) * itemsPerPage + 1}</strong> ถึง{" "}
                    <strong>{Math.min(currentPage * itemsPerPage, users.length)}</strong> จากทั้งหมด{" "}
                    <strong>{users.length}</strong> รายการ
                </span>

                <div className="pagination-controls">
                    <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                        {"<"}
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => goToPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    );
}
