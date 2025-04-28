// src/app/dashboard/page.tsx
import "@/app/(main)/globals.css";
import "@/styles/dashboard.css";

export default function DashboardPage() {
    return (
        <>
            <section>
                <div className="aqi-box">AQI</div>
                <div className="pm-box">PM</div>
                <div className="co2-box">CO2</div>
                <div className="temp-box">Temp</div>
            </section>
        </>
    );
}

