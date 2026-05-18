:root {
    --bg-base: #0a0010;
    --bg-surface: #0f0818;
    --bg-card: #130d20;
    --bg-hover: #1c1530;
    --border: rgba(255,255,255,0.07);
    --border-subtle: rgba(255,255,255,0.04);
    --border-accent: rgba(160,100,240,0.3);
    --text-primary: #ede8f8;
    --text-secondary: #9a8fba;
    --text-muted: #4a3f65;
    --purple: #a855f7;
    --purple-light: #c084fc;
    --purple-dim: rgba(168,85,247,0.15);
    --purple-dark: #7c3aed;
    --emerald: #4ecb8d;
    --emerald-dim: rgba(78,203,141,0.12);
    --crimson: #f87171;
    --crimson-dim: rgba(248,113,113,0.12);
    --amber: #fbbf24;
    --amber-dim: rgba(251,191,36,0.12);
    --steel: #818cf8;
    --steel-dim: rgba(129,140,248,0.12);
    --font-head: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
    --radius: 8px;
    --radius-lg: 12px;
    --radius-xl: 18px;
    --shadow: 0 4px 24px rgba(0,0,0,0.5);
    --shadow-lg: 0 12px 48px rgba(0,0,0,0.7);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: var(--font-body);
    color: var(--text-primary);
    background: var(--bg-base);
    -webkit-tap-highlight-color: transparent;
    min-height: 100vh;
    font-size: 14px;
}

#static-bg {
    position: fixed; inset: 0; z-index: 0;
    background:
        radial-gradient(ellipse 70% 50% at 15% 0%, rgba(168,85,247,0.07) 0%, transparent 60%),
        radial-gradient(ellipse 50% 60% at 85% 100%, rgba(124,58,237,0.05) 0%, transparent 60%),
        var(--bg-base);
}

/* ── INTRO ── */
#introSplash {
    position: fixed; inset: 0; background: #000; z-index: 99999;
    display: flex; align-items: center; justify-content: center;
    transition: opacity 0.8s ease-out;
}
#introSplash.hidden { opacity: 0; pointer-events: none; }
#introSplash video { width: 100%; height: 100%; object-fit: cover; }
#introSplash .skip-btn {
    position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
    z-index: 10; padding: 10px 28px;
    background: rgba(168,85,247,0.12); color: var(--purple-light);
    border: 1px solid var(--border-accent); border-radius: 50px;
    font-weight: 500; font-size: 0.78rem; cursor: pointer;
    font-family: var(--font-body); letter-spacing: 1px; backdrop-filter: blur(10px);
}

/* ── NOTIFICATION ── */
#customNotification {
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    background: var(--bg-card); color: var(--text-primary);
    padding: 12px 24px; border-radius: var(--radius);
    border: 1px solid var(--border-accent);
    z-index: 40000; display: none; text-align: center;
    font-size: 0.82rem; font-weight: 500;
    box-shadow: var(--shadow-lg); letter-spacing: 0.3px;
    white-space: nowrap;
}

/* ── MODAL ── */
#customModal {
    display: none; position: fixed; inset: 0;
    background: rgba(0,0,0,0.8); z-index: 20000;
    backdrop-filter: blur(12px);
    align-items: center; justify-content: center; padding: 20px;
}
.modal-card {
    background: var(--bg-card); border: 1px solid var(--border-accent);
    border-radius: var(--radius-xl); padding: 32px 28px;
    width: 100%; max-width: 360px; box-shadow: var(--shadow-lg);
}
.modal-card h3 {
    font-family: var(--font-head); font-size: 1.1rem;
    color: var(--purple-light); margin-bottom: 20px; letter-spacing: 0.3px;
}

/* ── PROFILE MODAL ── */
#profileModal {
    display: none; position: fixed; inset: 0;
    background: rgba(0,0,0,0.8); z-index: 20000;
    backdrop-filter: blur(12px);
    align-items: center; justify-content: center; padding: 20px;
}
.profile-modal-card {
    background: var(--bg-card); border: 1px solid var(--border-accent);
    border-radius: var(--radius-xl); padding: 32px 28px;
    width: 100%; max-width: 400px; box-shadow: var(--shadow-lg);
}

/* ── BUTTONS ── */
.btn-main {
    padding: 10px 20px; border: none; border-radius: var(--radius);
    font-family: var(--font-body); font-weight: 600; cursor: pointer;
    transition: all 0.3s ease; font-size: 0.85rem;
}
.btn-main.btn-success {
    background: var(--emerald); color: white;
}
.btn-main.btn-success:hover {
    background: var(--emerald); opacity: 0.9;
}
.btn-main.btn-danger {
    background: var(--crimson); color: white;
}
.btn-main.btn-purple {
    background: var(--purple); color: white;
}
.btn-ghost {
    padding: 10px 20px; background: transparent; border: 1px solid var(--border);
    border-radius: var(--radius); color: var(--text-primary); cursor: pointer;
    font-family: var(--font-body); font-weight: 500; transition: all 0.3s ease;
}

/* ── TABLES ── */
table {
    width: 100%; border-collapse: collapse;
}
tbody tr {
    border-bottom: 1px solid var(--border-subtle);
    transition: background 0.2s ease;
}
tbody tr:hover {
    background: var(--bg-hover);
}
td {
    padding: 12px 16px; text-align: left;
}
th {
    padding: 12px 16px; text-align: left; font-weight: 600;
    background: var(--bg-surface); color: var(--text-secondary);
}

/* ── BADGES ── */
.badge {
    display: inline-block; padding: 4px 12px; border-radius: 50px;
    font-size: 0.7rem; font-weight: 600; letter-spacing: 0.5px;
}
.badge-ok { background: var(--emerald-dim); color: var(--emerald); }
.badge-low { background: var(--crimson-dim); color: var(--crimson); }
.badge-inc { background: var(--emerald-dim); color: var(--emerald); }
.badge-exp { background: var(--crimson-dim); color: var(--crimson); }

/* ── ACTION CELLS ── */
.action-cell {
    display: flex; gap: 6px; align-items: center;
}
.action-btn {
    width: 32px; height: 32px; border: none; border-radius: var(--radius);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.2s ease; font-size: 0.85rem;
}
.action-btn.green { background: var(--emerald-dim); color: var(--emerald); }
.action-btn.green:hover { background: var(--emerald); color: white; }
.action-btn.gold { background: var(--amber-dim); color: var(--amber); }
.action-btn.gold:hover { background: var(--amber); color: white; }
.action-btn.purple { background: var(--purple-dim); color: var(--purple); }
.action-btn.purple:hover { background: var(--purple); color: white; }
.action-btn.wa { background: #25d366; color: white; }

/* ── INPUT FIELDS ── */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
select {
    width: 100%; padding: 10px 12px; margin: 8px 0;
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: var(--radius); color: var(--text-primary);
    font-family: var(--font-body); font-size: 0.9rem;
    transition: border 0.2s ease;
}
input:focus, select:focus {
    outline: none; border-color: var(--purple);
}

.qty-input {
    width: 50px !important; text-align: center;
}

/* ── PROFILE SECTION ── */
.profile-view-avatar {
    width: 80px; height: 80px; border-radius: 50%;
    background: var(--bg-surface); display: flex; align-items: center;
    justify-content: center; margin: 0 auto 16px;
    border: 2px solid var(--border-accent);
}
.profile-view-avatar img {
    width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
}
.profile-view-name {
    font-size: 1.2rem; font-weight: 600; text-align: center;
    margin-bottom: 4px; color: var(--purple-light);
}
.profile-view-email {
    font-size: 0.85rem; color: var(--text-muted); text-align: center;
    margin-bottom: 16px;
}
.profile-info-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0;
}
.profile-info-box {
    background: var(--bg-surface); padding: 12px; border-radius: var(--radius);
    border: 1px solid var(--border-subtle);
}
.pib-label {
    font-size: 0.7rem; color: var(--text-muted); font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;
}
.pib-val {
    font-size: 0.9rem; color: var(--text-primary); font-weight: 500;
}

/* ── PROFILE EDIT ── */
.profile-edit-avatar {
    width: 100px; height: 100px; border-radius: 50%;
    background: var(--bg-surface); display: flex; align-items: center;
    justify-content: center; margin: 0 auto 16px; cursor: pointer;
    border: 2px solid var(--border-accent); position: relative;
}
.profile-edit-avatar img {
    width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
}
.edit-overlay {
    position: absolute; width: 100%; height: 100%; border-radius: 50%;
    background: rgba(0,0,0,0.5); display: flex; align-items: center;
    justify-content: center; opacity: 0; transition: opacity 0.2s ease;
    color: white; font-size: 1.5rem;
}
.profile-edit-avatar:hover .edit-overlay {
    opacity: 1;
}
#editProfilePicInput { display: none; }
.profile-field-label {
    display: block; font-size: 0.8rem; color: var(--text-muted);
    font-weight: 600; margin-top: 12px; margin-bottom: 4px;
    text-transform: uppercase; letter-spacing: 0.5px;
}
.upload-progress {
    display: none; text-align: center; color: var(--text-muted);
    margin: 12px 0; font-size: 0.85rem;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
    td { padding: 8px 12px; font-size: 0.85rem; }
    .action-cell { flex-wrap: wrap; }
    .profile-info-grid { grid-template-columns: 1fr; }
}
