import { useState } from "react";

const TEMPLATES = [
  {
    id: "dark-diagonal",
    name: "Тёмный диагональ",
    bg: "#1a1a1a",
    accent: "#e53935",
    textColor: "#fff",
    badgeColor: "#43a047",
    badge2Color: "#e53935",
  },
  {
    id: "green-fresh",
    name: "Зелёный свежий",
    bg: "#2e7d32",
    accent: "#fff",
    textColor: "#fff",
    badgeColor: "#ffb300",
    badge2Color: "#1b5e20",
  },
  {
    id: "blue-pro",
    name: "Синий профи",
    bg: "#0d47a1",
    accent: "#ffc107",
    textColor: "#fff",
    badgeColor: "#ff6f00",
    badge2Color: "#01579b",
  },
  {
    id: "white-clean",
    name: "Белый чистый",
    bg: "#f5f5f5",
    accent: "#e53935",
    textColor: "#212121",
    badgeColor: "#43a047",
    badge2Color: "#e53935",
  },
];

const LOGOS = ["AKFA", "EKOPEN", "ENGELBERG", "REHAU", "БЕЗ ЛОГО"];

const SERVICES = [
  "Аккуратная и надёжная сборка пластиковых и алюминиевых конструкций",
  "Демонтаж и скупка пластиковых окон и профнастилов",
  "Установка пластиковых окон и дверей",
  "Ремонт и обслуживание пластиковых окон",
  "Остекление балконов и лоджий",
];

function BannerPreview({ data, template }) {
  const t = template;
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 540,
        aspectRatio: "1/1",
        background: t.bg,
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "55%",
          height: "100%",
          background:
            t.id === "dark-diagonal"
              ? "linear-gradient(135deg, transparent 8%, rgba(100,181,246,0.12) 8%, rgba(100,181,246,0.08) 100%)"
              : t.id === "green-fresh"
              ? "linear-gradient(135deg, transparent 8%, rgba(255,255,255,0.10) 8%, rgba(255,255,255,0.05) 100%)"
              : t.id === "blue-pro"
              ? "linear-gradient(135deg, transparent 8%, rgba(255,193,7,0.08) 8%, rgba(255,193,7,0.04) 100%)"
              : "linear-gradient(135deg, transparent 8%, rgba(0,0,0,0.04) 8%, rgba(0,0,0,0.02) 100%)",
          clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          width: 180,
          height: 220,
          opacity: 0.15,
        }}
      >
        <svg viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="160" height="200" rx="4" stroke={t.textColor} strokeWidth="4" />
          <line x1="90" y1="10" x2="90" y2="210" stroke={t.textColor} strokeWidth="3" />
          <line x1="10" y1="110" x2="90" y2="110" stroke={t.textColor} strokeWidth="3" />
          <rect x="16" y="16" width="68" height="88" rx="2" stroke={t.textColor} strokeWidth="2" opacity="0.5" />
          <rect x="16" y="116" width="68" height="88" rx="2" stroke={t.textColor} strokeWidth="2" opacity="0.5" />
          <rect x="96" y="16" width="68" height="188" rx="2" stroke={t.textColor} strokeWidth="2" opacity="0.5" />
          <circle cx="155" cy="110" r="5" fill={t.textColor} opacity="0.4" />
        </svg>
      </div>
      {data.logo !== "БЕЗ ЛОГО" && (
        <div style={{ position: "absolute", top: 20, left: 24, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ background: t.accent, color: t.bg, fontWeight: 900, fontSize: 13, padding: "4px 6px", borderRadius: 3, lineHeight: 1 }}>▊</div>
          <span style={{ color: t.accent, fontWeight: 900, fontSize: 22, letterSpacing: 1, textTransform: "lowercase" }}>{data.logo.toLowerCase()}</span>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: data.logo !== "БЕЗ ЛОГО" ? 68 : 32,
          left: 24,
          right: 200,
          color: t.textColor,
          fontWeight: 900,
          fontSize: data.serviceText.length > 60 ? 22 : 26,
          lineHeight: 1.2,
          letterSpacing: -0.3,
        }}
      >
        {data.serviceText}
      </div>
      <div style={{ position: "absolute", bottom: 140, left: 24, display: "flex", gap: 10, alignItems: "center" }}>
        {data.showUrgent && (
          <div style={{ background: t.badgeColor, color: "#fff", fontWeight: 800, fontSize: 12, padding: "6px 14px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 0.5 }}>
            СРОЧНЫЙ ВЫЗОВ
          </div>
        )}
        {data.show24 && (
          <div style={{ background: t.badge2Color, color: "#fff", fontWeight: 800, fontSize: 12, padding: "6px 14px", borderRadius: 20 }}>24/7</div>
        )}
        {data.showCity && data.city && (
          <div style={{ background: "rgba(255,255,255,0.15)", color: t.textColor, fontWeight: 700, fontSize: 12, padding: "6px 14px", borderRadius: 20, border: `1px solid ${t.textColor}33` }}>
            📍 {data.city}
          </div>
        )}
      </div>
      <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
        {data.phones.map((p, i) =>
          p.number ? (
            <div key={i} style={{ color: t.textColor, fontWeight: 800, fontSize: 24, lineHeight: 1.4, display: "flex", alignItems: "baseline", gap: 12 }}>
              <span>{p.number}</span>
              {p.name && <span style={{ fontSize: 18, fontWeight: 600, opacity: 0.7 }}>{p.name}</span>}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("edit");
  const [templateIdx, setTemplateIdx] = useState(0);
  const [data, setData] = useState({
    logo: "AKFA",
    serviceText: SERVICES[0],
    phones: [
      { number: "+99897 178 71 73", name: "Анатолий" },
      { number: "+99897 747 40 45", name: "Сардор" },
    ],
    showUrgent: true,
    show24: true,
    showCity: true,
    city: "Ташкент",
  });

  const updatePhone = (idx, field, val) => {
    const newPhones = [...data.phones];
    newPhones[idx] = { ...newPhones[idx], [field]: val };
    setData({ ...data, phones: newPhones });
  };

  const addPhone = () => {
    if (data.phones.length < 3) setData({ ...data, phones: [...data.phones, { number: "", name: "" }] });
  };

  const removePhone = (idx) => {
    if (data.phones.length > 1) setData({ ...data, phones: data.phones.filter((_, i) => i !== idx) });
  };

  const inputStyle = { width: "100%", padding: "10px 14px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 14, fontFamily: "inherit", background: "#fafafa", outline: "none", boxSizing: "border-box" };
  const labelStyle = { fontSize: 12, fontWeight: 700, color: "#666", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4, display: "block" };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f8f8", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ background: "#1a1a1a", color: "#fff", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #e53935, #ff7043)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16 }}>B</div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 16 }}>Баннер Дизайнер</div>
          <div style={{ fontSize: 11, opacity: 0.5 }}>Быстрые рекламные баннеры для услуг</div>
        </div>
      </div>
      <div style={{ display: "flex", background: "#fff", borderBottom: "1px solid #e0e0e0", position: "sticky", top: 0, zIndex: 10 }}>
        {[{ id: "edit", label: "✏️ Редактор" }, { id: "preview", label: "👁 Превью" }].map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ flex: 1, padding: "12px 0", background: activeTab === tab.id ? "#fff" : "#f5f5f5", border: "none", borderBottom: activeTab === tab.id ? "3px solid #e53935" : "3px solid transparent", fontWeight: 700, fontSize: 14, cursor: "pointer", color: activeTab === tab.id ? "#1a1a1a" : "#999", fontFamily: "inherit" }}>{tab.label}</button>
        ))}
      </div>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: 16 }}>
        {activeTab === "edit" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <span style={labelStyle}>Шаблон</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {TEMPLATES.map((t, i) => (
                  <button key={t.id} onClick={() => setTemplateIdx(i)} style={{ padding: "10px 12px", borderRadius: 8, border: templateIdx === i ? "2px solid #e53935" : "2px solid #e0e0e0", background: t.bg, color: t.textColor, fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 4, background: t.accent, flexShrink: 0 }} />
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span style={labelStyle}>Логотип</span>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {LOGOS.map((l) => (
                  <button key={l} onClick={() => setData({ ...data, logo: l })} style={{ padding: "6px 14px", borderRadius: 6, border: data.logo === l ? "2px solid #e53935" : "2px solid #e0e0e0", background: data.logo === l ? "#fff5f5" : "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>{l}</button>
                ))}
              </div>
            </div>
            <div>
              <span style={labelStyle}>Текст услуги</span>
              <textarea value={data.serviceText} onChange={(e) => setData({ ...data, serviceText: e.target.value })} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 6 }}>
                {SERVICES.map((s, i) => (
                  <button key={i} onClick={() => setData({ ...data, serviceText: s })} style={{ padding: "4px 10px", borderRadius: 12, border: "1px solid #ddd", background: data.serviceText === s ? "#e8f5e9" : "#fff", fontSize: 11, cursor: "pointer", fontFamily: "inherit", color: "#555" }}>{s.slice(0, 30)}...</button>
                ))}
              </div>
            </div>
            <div>
              <span style={labelStyle}>Телефоны</span>
              {data.phones.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                  <input value={p.number} onChange={(e) => updatePhone(i, "number", e.target.value)} placeholder="+998 XX XXX XX XX" style={{ ...inputStyle, flex: 2 }} />
                  <input value={p.name} onChange={(e) => updatePhone(i, "name", e.target.value)} placeholder="Имя" style={{ ...inputStyle, flex: 1 }} />
                  {data.phones.length > 1 && (
                    <button onClick={() => removePhone(i)} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid #eee", background: "#fff", cursor: "pointer", fontSize: 16, color: "#e53935", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
                  )}
                </div>
              ))}
              {data.phones.length < 3 && (
                <button onClick={addPhone} style={{ padding: "6px 14px", borderRadius: 6, border: "1.5px dashed #ccc", background: "transparent", fontSize: 12, cursor: "pointer", color: "#888", fontFamily: "inherit" }}>+ Добавить номер</button>
              )}
            </div>
            <div>
              <span style={labelStyle}>Бейджи</span>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[{ key: "showUrgent", label: "Срочный вызов" }, { key: "show24", label: "24/7" }, { key: "showCity", label: "Город" }].map((b) => (
                  <button key={b.key} onClick={() => setData({ ...data, [b.key]: !data[b.key] })} style={{ padding: "6px 14px", borderRadius: 6, border: data[b.key] ? "2px solid #43a047" : "2px solid #e0e0e0", background: data[b.key] ? "#e8f5e9" : "#fff", fontWeight: 600, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>{data[b.key] ? "✓ " : ""}{b.label}</button>
                ))}
              </div>
              {data.showCity && <input value={data.city} onChange={(e) => setData({ ...data, city: e.target.value })} placeholder="Ташкент" style={{ ...inputStyle, marginTop: 8, maxWidth: 200 }} />}
            </div>
            <button onClick={() => setActiveTab("preview")} style={{ padding: "14px 0", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #e53935, #ff7043)", color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer", fontFamily: "inherit", marginTop: 8 }}>👁 Посмотреть превью</button>
          </div>
        )}
        {activeTab === "preview" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <BannerPreview data={data} template={TEMPLATES[templateIdx]} />
            <div style={{ fontSize: 12, color: "#999", textAlign: "center" }}>Нажмите правой кнопкой → "Сохранить изображение" или сделайте скриншот</div>
            <button onClick={() => setActiveTab("edit")} style={{ padding: "12px 32px", borderRadius: 8, border: "2px solid #1a1a1a", background: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>← Назад к редактору</button>
          </div>
        )}
      </div>
    </div>
  );
}