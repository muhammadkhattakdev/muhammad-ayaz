import React from "react";
import "./style.css";
import avatar from "../../../../../static/trusted_by/avatar.png";
import {
  Home, CheckSquare, Calendar, BarChart3, Inbox, Folder, ChevronDown, ChevronUp, ArrowRight,
} from "lucide-react";

const BrowserMockup = () => {
  return (
    <div className="browser-container">
      <div className="background-glow"></div>
      <div className="browser-mockup">
        <div className="browser-header">
          <div className="browser-dots">
            <div className="browser-dot green"></div>
            <div className="browser-dot yellow"></div>
            <div className="browser-dot red"></div>
          </div>
          <div className="browser-address-bar"></div>
          <div className="browser-actions">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="browser-content">
          <div className="dashboard-layout">
            <div className="sidebar">
              <div className="user-profile">
                <div className="user-avatar">
                  <img src={avatar} alt="User" />
                  <div className="avatar-badge">+</div>
                </div>
                <div className="user-info">
                  <h3>
                    John Smith{" "}
                    <ChevronDown
                      size={14}
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    />
                  </h3>
                  <p>Founder | CEO</p>
                </div>
              </div>

              <nav className="sidebar-nav">
                <a href="#" className="nav-item active">
                  <span className="nav-icon">
                    <Home size={20} />
                  </span>
                  <span>Dashboard</span>
                </a>
                <a href="#" className="nav-item">
                  <span className="nav-icon">
                    <CheckSquare size={20} />
                  </span>
                  <span>My task</span>
                </a>
                <a href="#" className="nav-item">
                  <span className="nav-icon">
                    <Calendar size={20} />
                  </span>
                  <span>Calendar</span>
                </a>
                <a href="#" className="nav-item">
                  <span className="nav-icon">
                    <BarChart3 size={20} />
                  </span>
                  <span>Portfolios</span>
                </a>
                <a href="#" className="nav-item">
                  <span className="nav-icon">
                    <Inbox size={20} />
                  </span>
                  <span>Inbox</span>
                </a>
                <a href="#" className="nav-item">
                  <span className="nav-icon">
                    <Folder size={20} />
                  </span>
                  <span>List Work</span>
                </a>
              </nav>
            </div>

            <div className="main-content">
              <div className="dashboard-header">
                <div className="welcome-section">
                  <p>Welcome to</p>
                  <h2>Dashboard</h2>
                </div>
                <div className="search-section">
                  <p>Search Here</p>
                </div>
                <div className="date-section">
                  <p>Sunday, 8 March 2024</p>
                  <h2>04:35 PM</h2>
                </div>
              </div>

              <div className="stats-section">
                <div className="stat-card">
                  <div className="stat-header">
                    <span className="stat-badge blue">Sales</span>
                    <span className="stat-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                  <div className="stat-value">0.970</div>
                  <div className="stat-bar">
                    <div className="stat-line"></div>
                    <div className="stat-line"></div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-header">
                    <span className="stat-badge orange">Active</span>
                    <span className="stat-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                  <div className="stat-value">2.890</div>
                  <div className="stat-bar">
                    <div className="stat-line"></div>
                    <div className="stat-line"></div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-header">
                    <span className="stat-badge purple">Download</span>
                    <span className="stat-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                  <div className="stat-value">5.000</div>
                  <div className="stat-bar">
                    <div className="stat-line"></div>
                    <div className="stat-line"></div>
                  </div>
                </div>
              </div>

              <div className="chart-section">
                <div className="chart-header">
                  <h3>Consumption</h3>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span className="legend-dot purple"></span>
                      <span>Sales</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-dot orange"></span>
                      <span>Download</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-dot blue"></span>
                      <span>Profits</span>
                    </div>
                  </div>
                </div>

                <div className="chart-container">
                  <div className="chart-y-axis">
                    <div className="y-label">$18,000 —</div>
                    <div className="y-label">$14,000 —</div>
                    <div className="y-label">$8,000 —</div>
                    <div className="y-label">$2,000 —</div>
                    <div className="y-label">$1,000 —</div>
                    <div className="y-label">$500 —</div>
                  </div>

                  <div className="chart-graph">
                    <div className="chart-tooltip">$12,000</div>
                    <svg
                      className="wave-chart"
                      viewBox="0 0 800 200"
                      preserveAspectRatio="none"
                    >
                      {/* Blue wave */}
                      <path
                        className="chart-wave blue"
                        d="M0,100 C100,40 200,160 300,100 C400,40 500,160 600,100 C700,40 800,60 800,60"
                      />

                      {/* Purple wave */}
                      <path
                        className="chart-wave purple"
                        d="M0,80 C100,120 200,80 300,120 C400,80 500,120 600,80 C700,120 800,80 800,80"
                      />

                      {/* Orange wave */}
                      <path
                        className="chart-wave orange"
                        d="M0,130 C100,70 200,130 300,70 C400,130 500,70 600,130 C700,70 800,130 800,130"
                      />
                    </svg>

                    <div className="chart-x-axis">
                      <div className="x-label">Jan</div>
                      <div className="x-label">Feb</div>
                      <div className="x-label">Mar</div>
                      <div className="x-label">Apr</div>
                      <div className="x-label">Jun</div>
                      <div className="x-label">July</div>
                      <div className="x-label">Aug</div>
                      <div className="x-label">Sep</div>
                      <div className="x-label">Oct</div>
                      <div className="x-label">Nov</div>
                      <div className="x-label">Dec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-to-top">
        <span>
          <ChevronUp size={20} />
        </span>
      </div>
    </div>
  );
};

export default BrowserMockup;
