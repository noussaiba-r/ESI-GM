import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "./Icon";
import logo from "../assets/img.png";

const navItems = [
  { label: "Dashboard", icon: Icon.dashboard, path: "/" },
  { label: "Inventory", icon: Icon.inventory, path: "/inventory" },
  { label: "QR Scanner", icon: Icon.scanner, path: "/scanner" },
  { label: "Users", icon: Icon.users, path: "/users" },
  { label: "Requests", icon: Icon.requests, path: "/requests" },
  { label: "Material Guide", icon: Icon.requests, path: "/request-buttons-guide" },
  { label: "Material Outputs", icon: Icon.output, path: "/outputs" },
  { label: "Maintenance", icon: Icon.maintenance, path: "/maintenance" },
  { label: "Settings", icon: Icon.settings, path: "/settings" },
];

export default function SlideBare({ activeLabel = "Dashboard" }) {
  const navigate = useNavigate();

  return (
    <aside className="sb-sidebar">
      <div className="sb-top">
        <div className="sb-brand">
          <div className="sb-logo-wrap">
            <img src={logo} alt="ESI-GM" className="sb-logo" />
          </div>

          <div className="sb-brand-text">
            <h3>ESI-GM</h3>
            <p>Lab Equipment</p>
          </div>
        </div>

        <nav className="sb-nav">
          {navItems.map((item) => {
            const ItemIcon = item.icon;
            const isActive = activeLabel === item.label;

            return (
              <button
                key={item.label}
                type="button"
                className={`sb-nav-btn ${isActive ? "active" : ""}`}
                onClick={() => navigate(item.path)}
              >
                <span className="sb-nav-icon">
                  <ItemIcon size={18} />
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="sb-bottom">
        <div className="sb-user">
          <p>Robotics Lab Admin</p>
          <span>Admin</span>
        </div>

        <button type="button" className="sb-logout-btn">
          <Icon.output size={16} />
          <span>Logout</span>
        </button>

        <div className="sb-close">×</div>
      </div>
    </aside>
  );
}